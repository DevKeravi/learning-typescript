"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var count = 0; // number
count += 1;
//count = "문자열"; // error
var message = "hello world"; // string
var done = true; // boolean
var numbers = [1, 2, 3]; // number array
var messages = ["hello", "world"]; // string array
//messages.push(1); can't push number
var mightBeUndefined = undefined; // this might be string or undefined
var nullableNumber = null; // this might be number or null
var color = "red"; // red, orange, yellow 중 하나
color = "yellow";
// color = 'green'; error
// args, return value
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(number) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log("I am just saying.. nothing");
}
var Circle = /** @class */ (function () {
    //implements 는 Shape interface의 메서드를 충족하겠다라고 얘기하는것
    // 생성자
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: "김사람",
    age: 20,
};
var expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
var people = [person, expert];
var person2 = {
    name: "렬채",
};
var dev = {
    name: "개애발",
    thinks: ["취업하고싶다..", "일좀하자"],
};
var manman = [person2, dev];
// type 과 interface가 있는데 일반객체는 type을 쓰는게, class 관련객체는 interface를
// 쓰는게 좋다.
//
// generic
// 이러면 타입 유추가 깨진다.
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// Generics 를 사용하자
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
