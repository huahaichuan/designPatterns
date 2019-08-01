/**
 * Created by huaha on 2017/7/21.
 */
//定义car构造函数
function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

//定义Truck构造函数
function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

//定义vehicle工厂的大体代码
function VehicleFactory() {}

//定义该工厂factory的原型，默认的vehicleClass是Car
VehicleFactory.prototype.vehicleClass = Car;

//创建新Vehicle实例的工厂方法
VehicleFactory.prototype.createVehicle = function (options) {
    if(options.vehicleType === "car"){
        this.vehicleClass = Car;
    }else {
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
}

//创建生成汽车的工厂实例
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType:'car',
    color:'yellow',
    doors:6
});

//测试汽车是由vehicleClass的原型prototype里的Car创建的

console.log(car instanceof Car);
console.log(car);

//创建实例Truck
var movingTruck = carFactory.createVehicle({
    vehicleType : "truck",
    state:'like new',
    color:'red',
    wheelSize:'small'
});
console.log(movingTruck instanceof Truck);
console.log(movingTruck);

/**
 * 何时使用Factory
 *
 * 对象或组件涉及高复杂性时
 *
 * 当需要根据所在的不同环境轻松生成对象的不同实例时
 *
 * 当处理很多共享相同属性的小型对象或组件时
 *
 * 在编写只需要满足一个API的其他对象的实例对象时
 *
 */


//Abstract Factory(抽象工厂)

var AbstractVehicleFactory = (function () {
    //存储车辆的类型
    var typeset = {};
    return {
        getVehicle : function (type,customizations) {
            var Vehicle = typeset[type];
            return (Vehicle)? new Vehicle(customizations):null;
        },
        registerVehicle:function (type,Vehicle) {
            var proto  = Vehicle.prototype;
            if(proto.drive && proto.breakDown){
                typeset[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    };
})();

AbstractVehicleFactory.registerVehicle("car",Car);
AbstractVehicleFactory.registerVehicle("truck",Truck);

//基于抽象车辆类实例化一个新car对象
var car = AbstractVehicleFactory.getVehicle("car",{color:"lime green",state:"like new"});
//实例化一个新truck对象
var truck = AbstractVehicleFactory.getVehicle("truck",{wheelSize:"medium",color:"neon yellow"});
console.log(car);
console.log(truck);