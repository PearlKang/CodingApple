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
