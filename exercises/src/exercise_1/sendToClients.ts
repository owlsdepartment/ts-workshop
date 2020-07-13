import { Car } from "./car";

export function sendToClients(cars: Car[]) {
    console.log("Sending cars to customers...\n")

    for (const [i, car] of Object.entries(cars)) {
        console.log(`Sending ${car.brand} ${car.model} ${car.year} to Mr. Kowalski_${i}\n`)
    }

    console.log("Cars were sent!")
}
