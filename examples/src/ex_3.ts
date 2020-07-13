interface SomeInterface {
    a: string;
    b: number;
    c: object;
}

const someInterface: SomeInterface = {
    a: "text!",
    b: 0,
    c: {}
}

interface InterfaceWithFoo {
    foo: (a: string) => {}
}

const interfaceWithFoo: InterfaceWithFoo = {
    foo(a) {
        return {}
    }
}


interface FunctionalInterface {
    (a: string, someBool: boolean): SomeInterface
}

const funcInterface: FunctionalInterface = function(a, someBool) {
    return {
        a,
        b: 20,
        c: {}
    }
}

export interface UserData {
    name: string;
    surname?: string;
}

let data: UserData = {
    name: "Grzegorz",
    surname: "Brzęczyszczykiewicz"
}
data = { name: "Grzesiu" }

interface UserRecord {
    readonly id: number;
    name: string;
}

let record: UserRecord = {
    id: 0,
    name: "Stasiek"
}
record.name = "Czesiu"
// record.id = 2 // ERROR!

interface Dictionary {
    [key: string]: any;
}

const dict: Dictionary = {
    a: "cos",
    b: 8,
    c: {}
    // i tak dalej
}

interface WordDictionary {
    [key: string]: string;
}

const wordDict: WordDictionary = {
    word_1: "slowo 1",
    word_2: "slowo 2",
    word_3: "slowo 3",
}

interface NumberDictionary {
    [index: string]: number;
    length: number; // ok, length is a number
    // name: string; // error, the type of 'name' is not a subtype of the indexer
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

interface MixedKeyInterface {
    [key: string]: string | number;
    [key: number]: string | number;
    // [key: symbol]: string | number;
    // error: An index signature parameter type must be either 'string' or 'number'.
}

const keyA = Symbol("keyA");
const keyB = Symbol("keyB");

interface ObjectWithSymbols {
    [keyA]: string;
    [keyB]: number;
    [Symbol.iterator]: Generator;
}

interface B {
    bField: string;
}

interface A extends B {
    aField: string;
}

const aObj: A = {
    aField: "a",
    bField: "b"
}

interface C {
    cField: string;
}

interface D extends A, C {
    dField: string;
}

const dObj: D = {
    aField: "a",
    bField: "b",
    cField: "c",
    dField: "d"
}

interface Animal {
    name: string;
    bread: string;
    eat(food: string): void;
}

class Dog implements Animal {
    name = "dog";
    bread: string;

    constructor(bread: string) {
        this.bread = bread;
    }

    eat(food: string) {
        console.log(`[${this.name}] I'm eating ${food}`)
    }
}

interface AnimalConstructor {
    new (bread: string): Animal;
}

function createAnimal(Cont: AnimalConstructor, bread: string) {
    return new Cont(bread);
}

const dog = createAnimal(Dog, "shiba")

interface Shape {
    color: string;
}

interface Square {
    color: string;
    a: number;
}

interface Rectangle {
    color: string;
    a: number;
    b: number;
}

const square: Square = { color: "green", a: 2 }
const rectangle: Rectangle = { color: "red", a: 2, b: 4 }
let someShape: Shape = square
someShape = rectangle

const otherSquare: Square = rectangle;
// const otherRectangle: Rectangle = square;
// Property 'b' is missing in type 'Square' but required in type 'Rectangle'



