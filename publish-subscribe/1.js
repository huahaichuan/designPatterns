/**
 * Created by huaha on 2017/7/21.
 */
var pubsub = {};
(function (q) {
    var topics = {},
        subUid = -1;
    //发布或广播事件，包含特定的topic名称和参数（比如传递的数据）
    q.publish = function (topic, args) {
        if(!topics[topic]){
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers?subscribers.length : 0;
            while (len--){
                subscribers[len].func(topic,args)
            }
         return this;
    };
    //通过特定的名称和回调函数订阅事件，topic/event触发时执行事件
    q.subscribe = function (topic,func) {
        if(!topics[topic]){
            topics[topic]=[];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token:token,
            func:func
        });
        return token;
    };
    //基于订阅上的标记引用，通过特定topic取消订阅
    q.unsubscribe = function (token) {
        for(var m in topics){
            if(topics[m]){
                for(var i = 0,j = topics[m].length;i < j;i++){
                    if(topics[m][i].token===token){
                        topics[m].splice(i,1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
}(pubsub));


//简单的消息记录器记录所有通过订阅者接收到的主题（topic）和数据

var messageLogger = function (topics,data) {
    console.log("logging: "+topics+": "+data);
};

//订阅者监听topic,一旦该topic广播一个通知，订阅者就调用回调函数
var subscription = pubsub.subscribe("inbox/newMessage",messageLogger);

//发布者负责发布程序感兴趣的topic或通知
pubsub.publish("inbox/newMessage","hello world");

pubsub.publish("inbox/newMessage",["test","a","b","c"]);

pubsub.publish("inbox/newMessage",{sender:'hello@google.com',body:'hey again'});


