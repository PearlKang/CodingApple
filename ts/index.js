var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
