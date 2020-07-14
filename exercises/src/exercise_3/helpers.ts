export interface Position {
    x: number;
    y: number;
    z: number;
}

let id = 0;

export function getId() {
    return ++id;
}

function getRand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomPosition(): Position {
    return {
        x: getRand(0, 100),
        y: getRand(100, 1000),
        z: getRand(1, 2000)
    }
}
