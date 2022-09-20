const nameStr1: string = "kim";
const nameStrArray1: string[] = ["kim", "park"];
const nameObject1: { name: string } = { name: "kim" };
const nameObject2: { name?: string } = {};

const nameStr2: string | number = "kim";
const nameStr3: string[] | number = 123;

type Name = string | number;

const nameStr4: Name = 123;

function func(x: number): number {
  return x * 2;
}

type Member1 = [number, boolean];

const john1: Member1 = [123, true];

type Member2 = {
  name: string;
};

const john2: Member2 = { name: "kim" };

type Member3 = {
  [key: string]: string;
};

const john3: Member3 = { name: "kim", age: "12" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
