import { getId } from "./helpers"

export interface Position {
    x: number;
    y: number;
    z: number;
}

export interface Aircraft {
    name: string;

    getCurrentPosition(): Position;
    fly(): Promise<boolean>;
    land(): Promise<boolean>;
}

// dla specialId, użyj getId
// metody fly i land zwracają losowo true lub false

// TIP: można użyć abstract class

export class Plane {
    // TODO:
}

export class Helicopter {
    // TODO:
}

export class UFO {
    // TODO:
}
