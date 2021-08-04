let count = 0; // number
count += 1;
//count = "문자열"; // error

const message: string = "hello world"; // string

const done: boolean = true; // boolean

const numbers: number[] = [1, 2, 3]; // number array
const messages: string[] = ["hello", "world"]; // string array

//messages.push(1); can't push number

let mightBeUndefined: string | undefined = undefined; // this might be string or undefined
let nullableNumber: number | null = null; // this might be number or null

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow";

// color = 'green'; error

// args, return value
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

function sumArray(number: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
  console.log("I am just saying.. nothing");
}

// interface declation Shape
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  //implements 는 Shape interface의 메서드를 충족하겠다라고 얘기하는것
  // 생성자
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number;
}
interface Developer extends Person {
  skills: string[];
}
const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];

type man = {
  name: string;
  age?: number;
};
// & 는 intersection 으로써 두개 이상의 타입을 합쳐준다.
type newbie = Person & {
  thinks: string[];
};

const person2: man = {
  name: "렬채",
};

const dev: newbie = {
  name: "개애발",
  thinks: ["취업하고싶다..", "일좀하자"],
};

type Me = Person[];

const manman: Me = [person2, dev];

// type 과 interface가 있는데 일반객체는 type을 쓰는게, class 관련객체는 interface를
// 쓰는게 좋다.
//
// generic
// 이러면 타입 유추가 깨진다.
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}

// Generics 를 사용하자
function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
