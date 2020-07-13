import { Position } from "./aircrafts"

export class Pigeon {
    name: string = "pigeon";

    getCurrentPosition(): Position {
        return { x: 0, y: 0, z: 0 }
    }
    
    fly(): Promise<boolean> {
        return Promise.resolve(true)
    }

    land(): Promise<boolean> {
        return Promise.resolve(false)
    }
}
