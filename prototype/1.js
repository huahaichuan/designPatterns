/**
 * Created by huaha on 2017/7/21.
 */
var person = {
    init :function (model) {
        this.model = model;
    },
    getName:function () {
        console.log("My name is " +this.model.name);
    }
}

function student(model) {
    function F() {};
    F.prototype = person;
    var f = new F();
    f.init(model);
    return f;
}

var tom = student({name:'tom',age:12});
console.log(tom);
tom.getName();