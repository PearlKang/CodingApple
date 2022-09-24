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
