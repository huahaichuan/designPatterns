/**
 * Created by huaha on 2017/7/20.
 */
//首先，模拟一个目标可能拥有的一系列依赖Observer
function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.Add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function () {
    this.observerList = [];
};

ObserverList.prototype.Count = function () {
    return this.observerList.length;
};

ObserverList.prototype.Get = function (index) {
    if(index>-1 && index<this.observerList.length){
        return this.observerList[index];
    }
};

ObserverList.prototype.Insert = function (obj,index) {
    // var pointer =-1;
    // if(index === 0){
    //     this.observerList.unshift(obj);
    //     pointer = index
    // }else if(index === this.observerList.length){
    //     this.observerList.push(obj);
    //     pointer = index;
    // }
    // pointer = index;         不能理解书上为啥首尾要单独处理
    this.observerList.splice(index,0,obj);
    return index;
};

ObserverList.prototype.IndexOf = function (obj,startIndex) {
    var i = startIndex || -1,pointer = -1;
    while (i<this.observerList.length){
        if(this.observerList[i] === obj){
            pointer = i;
        }
        i++;
    }
    return pointer;
};

ObserverList.prototype.RemoveIndexAt = function (index) {
    // if(index===0){
    //     this.observerList.shift();
    // }else if(index === this.observerList.length-1){
    //     this.observerList.pop();
    // }    不能理解书上为啥首尾要单独处理
    this.observerList.splice(index,1);
};

//使用extension扩展对象

function extend(obj,extension) {
    for(var key in obj){
        extension[key] = obj[key];
    }
}

//接下来，模拟目标（subject）和在观察者列表上添加、删除或通知观察者的能力
function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function (observer) {
    this.observers.Add(observer);
}

Subject.prototype.RemoveObverser = function (observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
}

Subject.prototype.Notify = function (context) {
    var observerCount = this.observers.Count();
    for(var i=0;i<observerCount;i++){
        this.observers.Get(i).Update(context);
    }
}

//创建新的observer

//the observer
function Observer() {
    this.Update = function () {

    }
}