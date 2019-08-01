/**
 * Created by huaha on 2017/7/20.
 */
//购物车示例
var basketModule = (function () {
    //私有
    var basket = [];
    function doSomethingPrivate() {
        //...
    }
    //返回一个暴露出的公有对象
    return{
        addItem:function (values) {
            basket.push(values);
        },
        //获取购物车里的item数
        getItemCount:function () {
            return basket.length;
        },
        //私有函数的公有形式别名
        doSomething:doSomethingPrivate,
        //获取购物车里所有item的加个总值
        getTotal:function () {
            var itemCount = this.getItemCount(),
                total = 0;
            while (itemCount--){
                total += basket[itemCount].price;
            }
            return total;
        }
    }
})();
basketModule.addItem({item:'bread',price:5});
basketModule.addItem({item:'butter',price:3});
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// console.log(basketModule.basket);  undefined
// console.log(basket); undefined
//basket只存在于basketModule闭包作用域里，而不是存在于返回的公共对象里