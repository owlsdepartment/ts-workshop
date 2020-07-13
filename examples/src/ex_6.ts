export const _ = ""

interface Serializable {
    serialize(): void;
}

interface Loggable {
    log(msg: string): void;
}

interface Person {
    name: string;
    gender: "male" | "female";
}

function intersection(input: Person & Serializable & Loggable) {
    input.serialize()
    input.log(`[${input.name}] message`)

    return input;
}

const state: { [k: string]: boolean } = {} 

function isLoading(actions: string | string[]) {
    if (Array.isArray(actions)) {
        for (const key of actions) {
            if (state[key]) {
                return true;
            }
        }
    } else {
        return state[actions]
    }
}

type Id = string | number;
type ObjWithA = { a: number; }
type Foo = (a: number, b: string) => boolean

// Also allows for generics
type IdentityFoo<T> = (arg: T) => T
type GenericObj<T> = { data: T }

type Gender = "male" | "female"
type Fruit = "banana" | "orange" | "apple"

const someObj = {
    key1: null,
    key2: null,
    key3: null,
    key4: null
}
type SomeObjKeys = keyof typeof someObj
// type SomeObjKeys = "key1" | "key2" | "key3" | "key4"

function pluck<T, K extends keyof T>(obj: T, properties: K[]): T[K][] {
    return properties.map(n => obj[n]);
}
  
interface Car {
    manufacturer: string;
    model: string;
    year: number;
}
let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};
  
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);
// ['Toyota', 'Camry']

let modelYear = pluck(taxi, ['model', 'year'])
// ['Camry', 2014]

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

function proxify<T>(o: T): Proxify<T> {
    const out: Partial<Proxify<T>> = {}

    for (const [key, val] of Object.entries(o)) {
        out[key as keyof T] = {
            get: () => val,
            set: (value) => {}
        }
    }

    return out as Proxify<T>;
}

interface User { name: string; surname: string; }
interface Robot { model: string }

declare function detectRobot<T extends User | Robot>(somebody: T): T extends Robot ? Robot : User;

declare function detectInput<T>(input: T):
    T extends any[] ? [] :
    T extends object ? {} :
    never;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle

function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size; // s is Square
        case "rectangle":
            return s.height * s.width; // s is Rectangle
        case "circle":
            return Math.PI * s.radius ** 2; // s is Circle
    }
}
