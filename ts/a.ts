export var name6 = "kim";
export var age4 = 20;
export type Name2 = string;

namespace namespaceTest {
  export type Name3 = string | number;
}

let tmp: namespaceTest.Name3 = "kim";

namespace namespaceTest2 {
  export type Name3 = string | number;
}

export interface interfaceTest1 {}

// module -> namespace -> import (module = namespace)

export type Car3 = {
  wheel: number;
  model: string;
};

export interface Bike2 {
  wheel: 2;
  model: string;
}

export type ObjFunction1 = (a?: object) => void;
