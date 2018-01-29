var Beverage = function () {};

Beverage.prototype.boilWater = function() {
    console.log('把水煮沸');
}

Beverage.prototype.brew = function() {
    throw new Error('子类必须重写该方法');
}

Beverage.prototype.pourInCup = function() {
    throw new Error('子类必须重写该方法');
}

Beverage.prototype.addCondiments = function() {
    throw new Error('子类必须重写该方法');
}

Beverage.prototype.customerWantsCondiments = function() {
    return true;
}
Beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if(this.customerWantsCondiments()) {
        this.addCondiments();
    }
}


var Coffee = function() {};

Coffee.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
}

Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
}

Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
}


var Tea = function () {};

Tea.prototype.boilWater = function () {
    console.log('把水煮沸');
}

Tea.prototype.brew = function() {
    console.log('用沸水浸泡茶叶');
}

Tea.prototype.pourInCup = function() {
    console.log('把茶水倒进杯子');
}

Tea.prototype.addCondiments = function() {
    console.log('加柠檬檬');
}

Tea.prototype.customerWantsCondiments = function() {
    return false;
}

Coffee.prototype = new Beverage();
Tea.prototype = new Beverage();