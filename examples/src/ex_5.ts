export const _ = "_"

// return type is any
function wrong_identity(arg: any) {
    return arg;
}

// return type is depends on argument's type
function identity<T>(arg: T) {
    return arg;
}

let a = wrong_identity(2);   // a: any
let b = identity<number>(2); // b: number
let c = identity(2);         // c: number

function multipleGeneric<A, B, C>(a: A, b: B, c: C) {
    return { a, b, c }
}
// returns: { a: A, b: B, c: C }

interface IdentityFoo {
    <T>(arg: T): T;
}

const foo: IdentityFoo = identity;

interface Dictionary<T> {
    [key: string]: T;
}

const names: Dictionary<string> = {
    name1: "name1",
    name2: "name2",
    name3: "name3",
}

interface DataDictionary<Id, Data = object> {
    [k: string]: {
        id: Id,
        data: Data
    }
}

const dataDict_1: DataDictionary<number, { age: number }> = {
    "some_data": {
        id: 1,
        data: { age: 30 }
    }
}

const dataDict_2: DataDictionary<number> = {
    "some_data": {
        id: 1,
        data: { someData: "anything, really" }
    }
}

class GenericNumber<T> {
    zeroValue!: T;
    add(x: T, y: T): T {
        // @ts-ignore
        return x + y;
    };
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;


function withId<T extends { id: number }>(arg: T) {
    console.log(`Object with id: ${arg.id}`);
    return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

function mapArray<D, T extends { data: D[] }>(obj: T) {
    const dict: Dictionary<D> = {}

    for (const [i, el] of Object.entries(obj.data)) {
        dict[i] = el
    }

    return dict;
}
