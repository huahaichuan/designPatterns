/**
 * Created by huaha on 2017/7/20.
 */
//包含命名空间、共有和私有变量的Module模式
var myNamespace = (function () {
    //私有计数器变量
    var myPrivateVar = 0;
    //记录所有参数的私有函数
    var myPrivateMethod=function () {
        console.log(myPrivateVar);
    }
    return{
        //共有变量
        myPublicVar:'foo',
        //调用私有变量和方法的公有函数
        myPublicFunction:function () {
            myPrivateVar++;
            myPrivateMethod();
        }
    }
})();
// console.log(myPrivateVar);  undefined
myNamespace.myPublicFunction();
myNamespace.myPublicFunction();