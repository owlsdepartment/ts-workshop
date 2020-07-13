// Zmienne const
const bool: boolean = true;
const num: number = -2; 
const text: string = "text";
const someObj: { a: string } = { a: "text" };

// Zmienne let
let let_bool: boolean = true;
let let_num: number = -2; 
let let_text: string = "text";
let let_someObj: { a: string } = { a: "text" };

// Function
function voidFoo(): void {}
function boolFoo(): boolean {
    return true;
}
function fooWithParams(a: number, b: boolean) {}
function otherFoo(someObj: { someField: string }): number {
    return Object.keys(someObj).length
}

// Arrow Functions
const foo = () => {}
const fooWithParam = (a: string) => a
const fooWithReturnType = (b: number): string => `${b}`

// Arrays
const arr: number[] = [0, 1, 2, 3, 4, 5, 100];
const strArr: string[] = ["ee", "some", "long", "text"];
const arrWithObj: { i: number; id: string }[] = [
    { i: 0, id: "some_id_0" }, { i: 1, id: "some_id_1" }
]

// Generic Array
const gen_arr: Array<number> = [0, 1, 2, 3, 4, 5, 100];
const gen_strArr: Array<string> = ["ee", "some", "long", "text"];
const gen_arrWithObj: Array<{ i: number; id: string }> = [
    { i: 0, id: "some_id_0" }, { i: 1, id: "some_id_1" }
]

// Tuple
const tuple: [number, string] = [20, "text"];
const otherTuple: [object, Error] = [{}, new Error()]
const tupleOfArrays: [number[], string[]] = [
    [0, 1, 2, 3],
    ["ee", "some", "long", "text"]    
];

// Enum
enum Colors { Blue, Green, Yellow }
let color: Colors = Colors.Blue;

enum Food { Apple = 1, Orange, Banana }
let food: Food = Food.Apple;

enum StringFood {
    Apple = 'Apple',
    Orange = 'Orange',
    Banana = 'Banana'
}
let strFood: StringFood = StringFood.Banana;

let foodName: string = Food[2] // 'Orange'

// Void
function void_foo(): void {}
let c_void: void = undefined;

// never
function neverReturns(): never {
    throw new Error("I always throw an error :(");
}
function neverEndingStory(): never {
    while(true) {
        // ...
    }
}

// object
const a = { field: "I'm a field!" };
const b: object = new String();

// Type assertion
let someStr = "Some text" // : string
function returnsBool(a: any) { // : boolean
    return !!a;
}
const MAGIC_NUMBER = 20; // : 20

// const
const dupa = {
    a: 20,
    b: "siema",
    nested: { a: 20, b: "siema" }
} as const

