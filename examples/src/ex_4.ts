import { UserData } from "./ex_3"

function withOptionalParams(name: string, surname?: string): UserData {
    return { name, surname }
}

interface ExtendedUserData extends UserData {
    data: string[]
}

function withManyParams(name: string, surname?: string, ...args: string[]): ExtendedUserData {
    return {
        name,
        surname, 
        data: args
    }
}

function withDefaultParam(name: string = "Stasiek") {
    return `Passed name: ${name}`
}

interface MoreThanTen {
    (a: number): boolean;
}

const someFunc: (a: number) => boolean = function(a) {
    return a > 10;
}
const someArrowFunc: (a: number) => boolean = a => a > 10;
const andAnother: MoreThanTen = a => a > 10;

// Function overloads
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

class ExampleClass {
    id: number;
    initialized: boolean = false;

    constructor() {
        this.id = 0;

        this.init();
    }

    init() {
        this.initialized = true;
    }

    incrementedId(offset: number) {
        return this.id + offset;
    }
}

class PublicClass {
    public property: string = "prop";
}

class PrivateClass {
    private name: string = "I'm incognito!"

    getName() {
        return this.name; // good
    }
}
// new PrivateClass().name; // error

class ProtectedClass {
    protected name: string = "cool name!"
}
class ExtendingClass extends ProtectedClass {
    constructor() {
        super();
        console.log(this.name);
    }
}

abstract class Animal {
    abstract makeSound(): string;

    move(): void {
        console.log("I'm moving...")
    }
}

class Sheep extends Animal {
    makeSound() {
        return "Beeeee!";
    }
}

class NormalInit {
    private privateField: number;
    publicField: string;

    constructor(privateField: number, publicField: string) {
        this.privateField = privateField;
        this.publicField = publicField;
    }
}

class SmartInit {
    constructor(
        private privateField: number,
        public publicField: string
    ) {}
}
