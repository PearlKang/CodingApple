let nameStr1: string = "kim";
let nameStrArray1: string[] = ["kim", "park"];
let nameObject1: { name: string } = { name: "kim" };
let nameObject2: { name?: string } = {};

let nameStr2: string | number = "kim";
let nameStr3: string[] | number = 123;

type Name = string | number;

let nameStr4: Name = 123;

function func(x: number): number {
  return x * 2;
}

type Member1 = [number, boolean];

let john1: Member1 = [123, true];

type Member2 = {
  name: string;
};

let john2: Member2 = { name: "kim" };

type Member3 = {
  [key: string]: string;
};

let john3: Member3 = { name: "kim", age: "12" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let name1: string = "kim";
let age1: number = 50;
let isMarried1: boolean = true;

let isMarried2: null = null;
let isMarried3: undefined = undefined;

let members1: string[] = ["kim", "park"];
let members11: (string | number | boolean)[] = ["kim", 123, true];
let members2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let member3 = "park";

let myInfo1 = { name: "ben", age: 35, hometown: "busan" };
let myInfo2: { name: string; age: number; hometown: string } = {
  name: "ben",
  age: 35,
  hometown: "busan",
};

let myFavorite1 = {
  song: "title",
  singer: "singer",
};
let myFavorite2: { song: string; singer: string } = {
  song: "title",
  singer: "singer",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let member4: number | string = 123;

let members3: number[] = [1, 2, 3];
let members4: (number | string)[] = [1, "2", 3];

let object1: { a: string } = { a: "123" };
let object2: { a: string | number } = { a: "123" };

let name2: any;
name2 = 123;
name2 = [];

let name3: unknown;
// name3 - 1;
name3 = 123;
name3 = [];

let tmp1: string = name2;
// let tmp2: string = name3;

let age2: string | number;
// age2 + 1;

let age3: unknown = 1;
// age3 - 1;

let user11: string = "kim";
let age22: undefined | number = undefined;
let married33: boolean = false;
let benkang: (string | undefined | number | boolean)[] = [
  user11,
  age22,
  married33,
];

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

function func2(x: number): number {
  return x * 2;
}
func2(3);

// x:number | undefined
function func3(x?: number): void {
  1 + 1;
  //   return 1 + 1;
}

function func4(x: number | string): void {
  //   console.log(x + 3);
}
func4(2);

function func5(x?: string): void {
  if (x) console.log("안녕하세요 " + x);
  else console.log("이름이 없습니다.");
}

function func6(x: number): number {
  let num: number = 0;

  while (true) {
    num = num / 10;
    if (num == 0) break;
  }

  return num;
}

function func7(x: number | string): number {
  return x.toString().length;
}

function func8(x: number, y: boolean, z: string): string | void {
  if (x + (y ? 500 : 0) + (z == "상" ? 100 : 0) >= 600) return "결혼가능";
}

function func9(x: number | string): number | string {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function func10(x: number | string): void {
  let array: number[] = [];

  if (typeof x === "number") {
    array[0] = x;
  }
}

function func11(x: number | string): void {
  let array: number[] = [];

  array[0] = x as number;
}

function func12(x: (number | string)[]): number[] {
  let output: number[] = [];

  x.forEach((y) => {
    if (typeof y === "string") {
      output.push(parseFloat(y));
    } else {
      output.push(y);
    }
  });

  return output;
}
console.log(func12([123, "123"]));

let teacher1 = { subject: "math" };
let teacher2 = { subject: ["science", "english"] };
let teacher3 = { subject: ["science", "art", "korean"] };

function func13(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "empty";
  }
}
console.log(func13(teacher1));
console.log(func13(teacher2));
console.log(func13(teacher3));

let animal1: string | number | undefined;

type Animal1 = string | number | undefined;
let animal2: Animal1 = "kim";

let animal3: { name: string; age: number } = { name: "kim", age: 20 };

type AnimalType = { name: string; age: number };
let animal4: AnimalType = { name: "kim", age: 20 };

const hometown1 = "seoul";
const hometown2 = { region: "seoul" };
hometown2.region = "busan";

const girlfriend1 = {
  name: "ember",
};
girlfriend1.name = "yura";

type GirlfriendType1 = {
  readonly name: string;
};
const girlfriend2: GirlfriendType1 = {
  name: "ember",
};
// girlfriend2.name = "yura";

type GirlfriendType2 = {
  // ? = property | undefined
  name?: string;
};
const girlfriend3: GirlfriendType2 = {
  name: "ember",
};
girlfriend3.name = "yura";

type Name1 = string;
type Age1 = number;
type Person1 = Name1 | Age1;

type PositionX = {
  x: number;
};
type PositionY = {
  y: number;
};
type Position = PositionX & PositionY;
// x:number,y:number

let position1: Position = { x: 10, y: 20 };

type HomeworkPositionX = { x: number; y: number };
type HomeworkPositionY = { y: number; z: number };
type HomeworkPositionZ = { z: number; x: number };
type HomeworkPosition = HomeworkPositionX &
  HomeworkPositionY &
  HomeworkPositionZ;
let position2: HomeworkPosition = { x: 10, y: 20, z: 30 };

type Homework1 = { color?: string; size: number; readonly position: number[] };
let homeworkTest1: Homework1 = { size: 1, position: [1, 2, 3, 4, 5] };

type Homework2 = { name: string; phone: number; email: string };
let homeworkTest2: Homework2 = {
  name: "kim",
  phone: 1012345678,
  email: "test@test.com",
};

type Homework3 = { adult: boolean };
type Homework4 = Homework2 & Homework3;
let homeworkTest3 = {
  name: "kim",
  phone: 123456789,
  email: "test@test.com",
  adult: true,
};

let name4: string;
let name5: "kim";
let me1: "bald" | "solo";

function func14(a: "hello"): 1 | 0 {
  return 0;
}

function func15(
  a: "rock" | "paper" | "scissors"
): ("rock" | "paper" | "scissors")[] {
  if (a === "rock") {
    return ["rock"];
  } else if (a === "paper") {
    return ["paper"];
  } else if (a === "scissors") {
    return ["scissors"];
  } else {
    return ["rock", "paper", "scissors"];
  }
}

const input1 = "kim";

var content1 = {
  name: "kim",
  //   readonly name: "kim",
} as const;

function myFunc(a: "kim") {}
// myFunc(content1.name);
myFunc(content1.name);

function func16(a: string): number {
  return 1;
}

type FuncType1 = (a: string) => number;

let func17: FuncType1 = function (a) {
  return 10;
};

type Member4 = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let member5: Member4 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};
member5.plusOne(2);
/*
function func18(a) {
  a();
}
function func19() {}
func18(func19());
*/
type CutZero = (a: string) => string;
type RemoveDash = (a: string) => number;
let cutZero: CutZero = (a) => a.replace("O", "");
let removeDash: RemoveDash = (a) => parseFloat(a.replace("-", ""));

type PhoneNumber = (a: string, b: CutZero, c: RemoveDash) => number;

let phoneNumber: PhoneNumber = (a, cutZero, removeDash) => {
  let cuttingZero: string = cutZero(a);
  let removingDash: number = removeDash(cuttingZero);
  return removingDash;
};

type funcType2 = (a: string) => string;
type funcType3 = (a: string) => number;

function makeFunc(a: string, func1: funcType2, func2: funcType3) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
makeFunc("010-1234-5678", cutZero, removeDash);

let title2 = document.querySelector("#title");
if (title2 != null) title2.innerHTML = "hi";
if (title2 instanceof Element) title2.innerHTML = "hi";

let title3 = document.querySelector("#title") as Element;
title3.innerHTML = "hi";

let title4 = document.querySelector("#title");
if (title4?.innerHTML != undefined) title4.innerHTML = "hi";

let link1 = document.querySelector(".link");
if (link1 instanceof HTMLAnchorElement) link1.href = "https://kakao.com";

let button1 = document.querySelector("#button");
button1?.addEventListener("click", function () {});

let img1 = document.querySelector("#image");
if (img1 instanceof HTMLImageElement) img1.src = "new.jpg";

let a1 = document.querySelector(".naver");
if (a1 instanceof HTMLAnchorElement) a1.href = "https://kakao.com";

let a2 = document.querySelectorAll(".naver");
a2.forEach((a) => {
  if (a instanceof HTMLAnchorElement) a.href = "https://kakao.com";
});

class Person2 {
  //data: number = 0;
  //data = 0;
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  func(a: string) {
    console.log("hi" + a);
  }
}
// Person2.prototype.func = function () {};

let people1 = new Person2("kim");
let people2 = new Person2("park");

class Car1 {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car1("소나타", 3000);

console.log(car1);
console.log(car1.tax());

class Word {
  num: number[];
  str: string[];

  constructor(...param) {
    let numbers: number[] = [];
    let strings: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        strings.push(i);
      } else {
        numbers.push(i);
      }
    });

    this.num = numbers;
    this.str = strings;
  }
}

let obj1 = new Word("kim", 3, 5, "park");
console.log(obj1.num);
console.log(obj1.str);

// type typeName = string;
// interface

type Square1 = {
  color: string;
  width: number;
};

let square1: Square1 = {
  color: "red",
  width: 100,
};

interface Square2 {
  color: string;
  width: number;
}

interface Student1 {
  name: string;
}
// interface Student1 {
//   score: number;
// }
interface Teacher1 {
  name: string;
  age: number;
}
let student1: Student1 = { name: "kim" };
let teacher4: Teacher1 = { name: "kim", age: 20 };

interface Teacher2 extends Student1 {
  age: number;
  //   name: number;
}
let student2: Student1 = { name: "kim" };
let teacher5: Teacher2 = { name: "kim", age: 20 };

type Animal2 = { name: string };
// type Animal2 = { name: string };
type Cat1 = { age: number } & Animal2;
type Cat2 = { name: number } & Animal2;

// let cat1: Cat2 = { name: "kim" };

interface Product1 {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product1: Product1 = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart1 {
  product: string;
  price: number;
}

let cart1: Cart1[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface Cart2 extends Cart1 {
  card: boolean;
}

let cart2: Cart2 = { product: "청소기", price: 7000, card: false };

interface MathObj1 {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj2: MathObj1 = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

//rest parameter : 입력이 몇개가 들어올지 모를때,
function func20(num, ...a) {
  console.log(a);
}
func20(1, 2, 3, 5, 4, 5, 6);

function func21(...a: number[]) {
  console.log(a);
}
func21(1, 2, 3, 5, 4, 5, 6);

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
// 1,2,3,4,5
let arr3 = [...arr1, ...arr2];

let arr4 = ["안녕", 100];
let arr5 = arr4[0];
let arr6 = arr4[1];

let [arr7, arr8] = ["안녕", 100];

// let { student: student, age: age } = { student: true, age: 20 };
let { student, age } = { student: true, age: 20 };

let obj3 = { student: true, age: 20 };

function func22(a, b) {
  console.log(a, b);
}
func22(1, 2);
func22(obj3.student, obj3.age);

function func23({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
func23({ student: true, age: 20 });
func23(obj3);

function func24(...input: number[]): number {
  let maxNum = -1;

  input.forEach((i) => {
    if (maxNum < i) {
      maxNum = i;
    }
  });

  return maxNum;
}
console.log(func24(1, 3, 2, 4, 5, 6, 7, 8));

type FuncType4 = {
  user: string;
  comment: number[];
  admin: boolean;
};
function func25({ user, comment, admin }: FuncType4) {
  console.log(user, comment, admin);
}
func25({ user: "kim", comment: [3, 5, 4], admin: false });

type FuncType5 = (number | string | boolean)[];
function func26([a, b, c]: FuncType5) {
  console.log(a, b, c);
}
func26([40, "wine", false]);

function func27(a?: string) {}
function func28(a: string | undefined) {
  //   if (typeof a === "string") {
  //   } else {
  //   }
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

function func29(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// 오브젝트 instanceof 부모class

let date1 = new Date();

if (date1 instanceof Date) {
}

type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike1 = {
  wheel: "2개";
  color: string;
};

function func30(x: Car2 | Bike1) {
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

function func31(parameter: string) {
  if (typeof parameter === "string") {
    console.log(parameter);
  } else {
    console.log(parameter);
  }
}

// never -> void
// let func32 = function () {
//   throw new Error();
// };

class User1 {
  //   name = "kim";
  //   name: string = "kim";
  //   public name: string = "kim";
  //   private name: string = "kim";

  name: string;
  private familyName: string = "kim";

  constructor(a: string) {
    // this.name = a;
    this.name = a + this.familyName;
  }
  //   public func() {}

  changeFamilyName() {
    this.familyName = "park";
  }
}
new User1("kim");

let user2 = new User1("park");
// user2.name = "hi";
let user3 = new User1("민수");
console.log(user3);
user3.changeFamilyName();
console.log(user3);

class Person3 {
  //   name: string;
  //   constructor() {
  //     this.name = "kim";
  //   }

  constructor(public name: string) {}
}

let person1 = new Person3("kim");
console.log(person1);

class User2 {
  x = 10;
}

class NewUser1 extends User2 {}

let person2 = new NewUser1();
console.log(person2);

class User3 {
  //   private x = 10;
  protected x = 10;
}

class NewUser2 extends User3 {
  //   x = 20;
  doThis() {
    this.x = 20;
  }
}

class User4 {
  static x = 10;
  //   public static x = 10;
  //   private static x = 10;
  y = 20;
}

let children1 = new User4();
// console.log(User4.x, User4.y);
console.log(User4.x);
// console.log(children1.x, children1.y);
console.log(children1.y);

class User5 {
  static skill = "js";
  intro = User5.skill + " 전문가입니다.";
}

let Chulsu1 = new User5();
console.log(Chulsu1);

User5.skill = "ts";

let Chulsu2 = new User5();
console.log(Chulsu2);

class User6 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

class User7 {
  private static x = 10;
  public static y = 20;

  static addOne(num: number) {
    User7.x += num;
  }

  static printX() {
    console.log(User7.x);
  }
}
User7.addOne(3);
User7.addOne(4);
User7.printX();

class Square3 {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative;
    top:${a * 400}px;
    left:${a * 400}px;
    width:${this.width}px;
    height:${this.height}px;
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let square2 = new Square3(30, 30, "red");
square2.draw();
square2.draw();
square2.draw();
square2.draw();

import { name6, age4, Name2 } from "./a";

console.log(name6);

let name7: Name2 = "park";

//예전 import
// ///<reference  path="./a.ts" />

import { Car3, Bike2 } from "./a";

let car2: Car3 = { wheel: 4, model: "Sonata" };

import { ObjFunction1 } from "./a";

let func33: ObjFunction1 = function (a) {
  console.log(a);
};
func33({ abc: "hi" });

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };

function func34(x: unknown[]) {
  return x[0];
}

let a3 = func34([4, 2]);
console.log(a3);
// console.log(a3 + 1);

function func35<MyType>(x: MyType[]): MyType {
  return x[0];
}
let a4 = func35<number>([4, 2]);
// let a4 = func35([4, 2]);
let a5 = func35<string>(["4", "2"]);
// let a5 = func35(["4", "2"]);
console.log(a4 + 1);
console.log(a5);

function func36<MyType extends number>(x: MyType) {
  return x - 1;
}

let a6 = func36<number>(100);

function func37<MyType extends string>(x: MyType) {
  return x.length;
}

let a7 = func37<string>("100");

interface LengthCheck {
  length: number;
}

function func38<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let a8 = func38<string[]>(["100"]);

function homework5<Type extends string | string[]>(x: Type) {
  console.log(x.length);
}
homework5<string>("hello");
homework5<string[]>(["kim", "park"]);

interface Animal3 {
  name: string;
  age: number;
}

let data1 = '{"name":"dog","age":1}';

function homework6(x: string) {
  return JSON.parse(x);
}
let result3 = homework6(data1);
console.log(result3);

function homework7<T>(x: string): T {
  return JSON.parse(x);
}
let result4 = homework7<Animal3>(data1);
console.log(result4);

class Person4<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a9 = new Person4<string>("어쩌구");
a9.name;

let dogSound1: (string | boolean)[] = ["dog", true];
let dogSound2: [string, boolean] = ["dog", true];
// let dogSound3: [string, boolean?, number] = ["dog", true];
let dogSound3: [string, boolean, number?] = ["dog", true];

function func39(...x: number[]) {
  console.log(x);
}
func39(1, 2, 3, 6, 5, 4, 7, 8, 9);

function func40(...x: [number, string]) {
  console.log(x);
}
func40(1, "2");

function func41(a: number, b: string) {
  console.log([a, b]);
}
func41(1, "2");

let arr9 = [1, 2, 3];
let arr10: [number, number, ...number[]] = [4, 5, ...arr9]; //[4,5,1,2,3]

let food1: [string, number, boolean] = ["동서녹차", 4000, true];
let food2: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];
type Arr1 = [string, number, ...boolean[]];
let food3: Arr1 = ["동서녹차", 4000, true, false, true, true, false, true];

function func42(...rest: [string, boolean, ...(number | string)[]]) {}
func42("a", true, 6, 3, "1", 4);

function func43(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}

declare let dataA: number;

console.log(dataA + 1);
