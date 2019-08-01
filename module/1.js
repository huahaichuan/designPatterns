/**
 * Created by huaha on 2017/7/20.
 */
//对象字面量

var person = {
    myProperty: "someValue",
    //对象字面量可以包含属性和方法
    //例如，可以声明模块的配置对象
    option:{
        name:"tom",
        sex:'m',
        age:'26',
        language:'ch'
    },
    //方法
    say:function () {
        console.log("my name is"+this.option.name);
    },
    newPerson:function (newOption) {
        if(typeof newOption === 'object'){
            this.option = newOption;
        }
        console.log("my name is"+this.option.name);
    }
}

person.say();
person.newPerson({name:"huahaichuan"});