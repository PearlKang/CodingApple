"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var nameStr1 = "kim";
var nameStrArray1 = ["kim", "park"];
var nameObject1 = { name: "kim" };
var nameObject2 = {};
var nameStr2 = "kim";
var nameStr3 = 123;
var nameStr4 = 123;
function func(x) {
    return x * 2;
}
var john1 = [123, true];
var john2 = { name: "kim" };
var john3 = { name: "kim", age: "12" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var name1 = "kim";
var age1 = 50;
var isMarried1 = true;
var isMarried2 = null;
var isMarried3 = undefined;
var members1 = ["kim", "park"];
var members11 = ["kim", 123, true];
var members2 = {
    member1: "kim",
    member2: "park",
};
var member3 = "park";
var myInfo1 = { name: "ben", age: 35, hometown: "busan" };
var myInfo2 = {
    name: "ben",
    age: 35,
    hometown: "busan",
};
var myFavorite1 = {
    song: "title",
    singer: "singer",
};
var myFavorite2 = {
    song: "title",
    singer: "singer",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var member4 = 123;
var members3 = [1, 2, 3];
var members4 = [1, "2", 3];
var object1 = { a: "123" };
var object2 = { a: "123" };
var name2;
name2 = 123;
name2 = [];
var name3;
// name3 - 1;
name3 = 123;
name3 = [];
var tmp1 = name2;
// let tmp2: string = name3;
var age2;
// age2 + 1;
var age3 = 1;
// age3 - 1;
var user11 = "kim";
var age22 = undefined;
var married33 = false;
var benkang = [
    user11,
    age22,
    married33,
];
var school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
function func2(x) {
    return x * 2;
}
func2(3);
// x:number | undefined
function func3(x) {
    1 + 1;
    //   return 1 + 1;
}
function func4(x) {
    //   console.log(x + 3);
}
func4(2);
function func5(x) {
    if (x)
        console.log("안녕하세요 " + x);
    else
        console.log("이름이 없습니다.");
}
function func6(x) {
    var num = 0;
    while (true) {
        num = num / 10;
        if (num == 0)
            break;
    }
    return num;
}
function func7(x) {
    return x.toString().length;
}
function func8(x, y, z) {
    if (x + (y ? 500 : 0) + (z == "상" ? 100 : 0) >= 600)
        return "결혼가능";
}
function func9(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function func10(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
function func11(x) {
    var array = [];
    array[0] = x;
}
function func12(x) {
    var output = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            output.push(parseFloat(y));
        }
        else {
            output.push(y);
        }
    });
    return output;
}
console.log(func12([123, "123"]));
var teacher1 = { subject: "math" };
var teacher2 = { subject: ["science", "english"] };
var teacher3 = { subject: ["science", "art", "korean"] };
function func13(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "empty";
    }
}
console.log(func13(teacher1));
console.log(func13(teacher2));
console.log(func13(teacher3));
var animal1;
var animal2 = "kim";
var animal3 = { name: "kim", age: 20 };
var animal4 = { name: "kim", age: 20 };
var hometown1 = "seoul";
var hometown2 = { region: "seoul" };
hometown2.region = "busan";
var girlfriend1 = {
    name: "ember",
};
girlfriend1.name = "yura";
var girlfriend2 = {
    name: "ember",
};
var girlfriend3 = {
    name: "ember",
};
girlfriend3.name = "yura";
// x:number,y:number
var position1 = { x: 10, y: 20 };
var position2 = { x: 10, y: 20, z: 30 };
var homeworkTest1 = { size: 1, position: [1, 2, 3, 4, 5] };
var homeworkTest2 = {
    name: "kim",
    phone: 1012345678,
    email: "test@test.com",
};
var homeworkTest3 = {
    name: "kim",
    phone: 123456789,
    email: "test@test.com",
    adult: true,
};
var name4;
var name5;
var me1;
function func14(a) {
    return 0;
}
function func15(a) {
    if (a === "rock") {
        return ["rock"];
    }
    else if (a === "paper") {
        return ["paper"];
    }
    else if (a === "scissors") {
        return ["scissors"];
    }
    else {
        return ["rock", "paper", "scissors"];
    }
}
var input1 = "kim";
var content1 = {
    name: "kim",
    //   readonly name: "kim",
};
function myFunc(a) { }
// myFunc(content1.name);
myFunc(content1.name);
function func16(a) {
    return 1;
}
var func17 = function (a) {
    return 10;
};
var member5 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
member5.plusOne(2);
var cutZero = function (a) { return a.replace("O", ""); };
var removeDash = function (a) { return parseFloat(a.replace("-", "")); };
var phoneNumber = function (a, cutZero, removeDash) {
    var cuttingZero = cutZero(a);
    var removingDash = removeDash(cuttingZero);
    return removingDash;
};
function makeFunc(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
makeFunc("010-1234-5678", cutZero, removeDash);
var title2 = document.querySelector("#title");
if (title2 != null)
    title2.innerHTML = "hi";
if (title2 instanceof Element)
    title2.innerHTML = "hi";
var title3 = document.querySelector("#title");
title3.innerHTML = "hi";
var title4 = document.querySelector("#title");
if ((title4 === null || title4 === void 0 ? void 0 : title4.innerHTML) != undefined)
    title4.innerHTML = "hi";
var link1 = document.querySelector(".link");
if (link1 instanceof HTMLAnchorElement)
    link1.href = "https://kakao.com";
var button1 = document.querySelector("#button");
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", function () { });
var img1 = document.querySelector("#image");
if (img1 instanceof HTMLImageElement)
    img1.src = "new.jpg";
var a1 = document.querySelector(".naver");
if (a1 instanceof HTMLAnchorElement)
    a1.href = "https://kakao.com";
var a2 = document.querySelectorAll(".naver");
a2.forEach(function (a) {
    if (a instanceof HTMLAnchorElement)
        a.href = "https://kakao.com";
});
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    Person2.prototype.func = function (a) {
        console.log("hi" + a);
    };
    return Person2;
}());
// Person2.prototype.func = function () {};
var people1 = new Person2("kim");
var people2 = new Person2("park");
var Car1 = /** @class */ (function () {
    function Car1(model, price) {
        this.model = model;
        this.price = price;
    }
    Car1.prototype.tax = function () {
        return this.price / 10;
    };
    return Car1;
}());
var car1 = new Car1("소나타", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                strings.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj1 = new Word("kim", 3, 5, "park");
console.log(obj1.num);
console.log(obj1.str);
var square1 = {
    color: "red",
    width: 100,
};
var student1 = { name: "kim" };
var teacher4 = { name: "kim", age: 20 };
var student2 = { name: "kim" };
var teacher5 = { name: "kim", age: 20 };
var product1 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var cart1 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var cart2 = { product: "청소기", price: 7000, card: false };
var obj2 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
//rest parameter : 입력이 몇개가 들어올지 모를때,
function func20(num) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    console.log(a);
}
func20(1, 2, 3, 5, 4, 5, 6);
function func21() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
func21(1, 2, 3, 5, 4, 5, 6);
// spread operator
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
// 1,2,3,4,5
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
var arr4 = ["안녕", 100];
var arr5 = arr4[0];
var arr6 = arr4[1];
var _a = ["안녕", 100], arr7 = _a[0], arr8 = _a[1];
// let { student: student, age: age } = { student: true, age: 20 };
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var obj3 = { student: true, age: 20 };
function func22(a, b) {
    console.log(a, b);
}
func22(1, 2);
func22(obj3.student, obj3.age);
function func23(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
func23({ student: true, age: 20 });
func23(obj3);
function func24() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    var maxNum = -1;
    input.forEach(function (i) {
        if (maxNum < i) {
            maxNum = i;
        }
    });
    return maxNum;
}
console.log(func24(1, 3, 2, 4, 5, 6, 7, 8));
function func25(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
func25({ user: "kim", comment: [3, 5, 4], admin: false });
function func26(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
func26([40, "wine", false]);
function func27(a) { }
function func28(a) {
    //   if (typeof a === "string") {
    //   } else {
    //   }
    if (a && typeof a === "string") {
    }
}
function func29(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
// 오브젝트 instanceof 부모class
var date1 = new Date();
if (date1 instanceof Date) {
}
function func30(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car타입이에요.");
    }
}
// void
// function func31(): never {
//   // return 1;
//   // return undefined;
//   // throw new Error();
//   while (true) {}
// }
function func31(parameter) {
    if (typeof parameter === "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
// never -> void
// let func32 = function () {
//   throw new Error();
// };
var User1 = /** @class */ (function () {
    function User1(a) {
        this.familyName = "kim";
        // this.name = a;
        this.name = a + this.familyName;
    }
    //   public func() {}
    User1.prototype.changeFamilyName = function () {
        this.familyName = "park";
    };
    return User1;
}());
new User1("kim");
var user2 = new User1("park");
// user2.name = "hi";
var user3 = new User1("민수");
console.log(user3);
user3.changeFamilyName();
console.log(user3);
var Person3 = /** @class */ (function () {
    //   name: string;
    //   constructor() {
    //     this.name = "kim";
    //   }
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var person1 = new Person3("kim");
console.log(person1);
var User2 = /** @class */ (function () {
    function User2() {
        this.x = 10;
    }
    return User2;
}());
var NewUser1 = /** @class */ (function (_super) {
    __extends(NewUser1, _super);
    function NewUser1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser1;
}(User2));
var person2 = new NewUser1();
console.log(person2);
var User3 = /** @class */ (function () {
    function User3() {
        //   private x = 10;
        this.x = 10;
    }
    return User3;
}());
var NewUser2 = /** @class */ (function (_super) {
    __extends(NewUser2, _super);
    function NewUser2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   x = 20;
    NewUser2.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser2;
}(User3));
var User4 = /** @class */ (function () {
    function User4() {
        //   public static x = 10;
        //   private static x = 10;
        this.y = 20;
    }
    User4.x = 10;
    return User4;
}());
var children1 = new User4();
// console.log(User4.x, User4.y);
console.log(User4.x);
// console.log(children1.x, children1.y);
console.log(children1.y);
var User5 = /** @class */ (function () {
    function User5() {
        this.intro = User5.skill + " 전문가입니다.";
    }
    User5.skill = "js";
    return User5;
}());
var Chulsu1 = new User5();
console.log(Chulsu1);
User5.skill = "ts";
var Chulsu2 = new User5();
console.log(Chulsu2);
var User6 = /** @class */ (function () {
    function User6() {
        this.z = 30;
    }
    User6.x = 10;
    User6.y = 20;
    return User6;
}());
var User7 = /** @class */ (function () {
    function User7() {
    }
    User7.addOne = function (num) {
        User7.x += num;
    };
    User7.printX = function () {
        console.log(User7.x);
    };
    User7.x = 10;
    User7.y = 20;
    return User7;
}());
User7.addOne(3);
User7.addOne(4);
User7.printX();
var Square3 = /** @class */ (function () {
    function Square3(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square3.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative;\n    top:".concat(a * 400, "px;\n    left:").concat(a * 400, "px;\n    width:").concat(this.width, "px;\n    height:").concat(this.height, "px;\n    background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square3;
}());
var square2 = new Square3(30, 30, "red");
square2.draw();
square2.draw();
square2.draw();
square2.draw();
var a_1 = require("./a");
console.log(a_1.name6);
var name7 = "park";
var car2 = { wheel: 4, model: "Sonata" };
var func33 = function (a) {
    console.log(a);
};
func33({ abc: "hi" });
var dog1 = "bark";
var dog2 = { name: "paw" };
function func34(x) {
    return x[0];
}
var a3 = func34([4, 2]);
console.log(a3);
// console.log(a3 + 1);
function func35(x) {
    return x[0];
}
var a4 = func35([4, 2]);
// let a4 = func35([4, 2]);
var a5 = func35(["4", "2"]);
// let a5 = func35(["4", "2"]);
console.log(a4 + 1);
console.log(a5);
function func36(x) {
    return x - 1;
}
var a6 = func36(100);
function func37(x) {
    return x.length;
}
var a7 = func37("100");
function func38(x) {
    return x.length;
}
var a8 = func38(["100"]);
function homework5(x) {
    console.log(x.length);
}
homework5("hello");
homework5(["kim", "park"]);
var data1 = '{"name":"dog","age":1}';
function homework6(x) {
    return JSON.parse(x);
}
var result3 = homework6(data1);
console.log(result3);
function homework7(x) {
    return JSON.parse(x);
}
var result4 = homework7(data1);
console.log(result4);
var Person4 = /** @class */ (function () {
    function Person4(a) {
        this.name = a;
    }
    return Person4;
}());
var a9 = new Person4("어쩌구");
a9.name;
var dogSound1 = ["dog", true];
var dogSound2 = ["dog", true];
// let dogSound3: [string, boolean?, number] = ["dog", true];
var dogSound3 = ["dog", true];
function func39() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
func39(1, 2, 3, 6, 5, 4, 7, 8, 9);
function func40() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
func40(1, "2");
function func41(a, b) {
    console.log([a, b]);
}
func41(1, "2");
var arr9 = [1, 2, 3];
var arr10 = __spreadArray([4, 5], arr9, true); //[4,5,1,2,3]
var food1 = ["동서녹차", 4000, true];
var food2 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
var food3 = ["동서녹차", 4000, true, false, true, true, false, true];
function func42() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
func42("a", true, 6, 3, "1", 4);
function func43() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === "string") {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
/*
declare let dataA: number;

console.log(dataA + 1);
*/
/*
import { dataA } from "./data";
*/
/*
console.log(dataTest);
*/
var dog3 = "kim";
// import { Age } from "./types/common/test";
var age5;
var name8 = "kim";
var age6 = 30;
var Car4 = /** @class */ (function () {
    function Car4(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car4;
}());
var myCar1 = new Car4("morning");
var Car5 = /** @class */ (function () {
    function Car5(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car5;
}());
var myCar2 = new Car5("morning");
var Car6 = /** @class */ (function () {
    function Car6() {
    }
    Car6.prototype.tax = function (a) {
        return a * 0.1;
    };
    return Car6;
}());
var obj4 = { name: "kim", age: 20 };
Object.keys(obj4);
// let person3: PersonKeys1 = "age";
var person3 = "name";
// let person3: PersonKeys1 = "age";
var person4 = "name";
var a10;
var a11;
var a12;
var age23;
var age24;
var age25;
var age26;
