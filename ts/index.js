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