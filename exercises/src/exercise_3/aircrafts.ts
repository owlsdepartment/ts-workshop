import { getId, Position, getRandomPosition } from "./helpers"

// Można modyfikować aircraft w ramach potrzeb
export interface Aircraft {
    name: string;

    getCurrentPosition(): Position;
    fly(): Promise<boolean>;
    land(): Promise<boolean>;
}

// dla specialId, użyj getId
// metody fly i land zwracają losowo true lub false
// getCurrentPosition powinno po prostu używać getRandomPosition

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
