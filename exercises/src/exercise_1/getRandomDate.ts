import moment, { Moment } from "moment";

function getRand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomDate(): Moment {
    const year = getRand(2000, 2020);
    const month = getRand(0, 11);
    const dayToAdd = getRand(0, 20);

    return moment().year(year).month(month).add("days", dayToAdd);
}
