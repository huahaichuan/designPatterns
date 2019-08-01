/**
 * Created by huaha on 2017/7/20.
 */
//单例模式使用
var SingletonTester = (function () {
    var option = {name:'test',pointX:5};
    function Singleton(options) {
        options = options || {};
        //为singleton设置属性
        this.name = options.name || 'test';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    //实例持有者
    var instance;
    var _static={
        name:'singletonTester',
        //获取实例的方法，返回singleton对象的singleton实例
        getInstance:function (options) {
            if(instance===undefined){
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();
var singletonTest = SingletonTester.getInstance({pointX:10});
console.log(singletonTest.pointX);