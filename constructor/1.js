/**
 * Created by huaha on 2017/7/20.
 */

//constructor(构造器模式)
function Car(model,year,miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
Car.prototype.say=function () {
    return this.model+"has done "+this.miles+" miles";
}
var civic = new Car('Honda Civic',2009,2000);
var mondeo = new Car("Ford Mondeo",2010,5000);
console.log(civic.say());
console.log(mondeo.say());