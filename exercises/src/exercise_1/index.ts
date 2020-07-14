import { Car } from "./car";
import { sendToClients } from "./sendToClients";

// Czas na fabrykę samochodów!

class CarFactory {
    // TODO: zamienić typ `any` na konkretny, oczekiwany
    takeOrders(orders: any[]): Car[] {
        // TODO: implementacja
        // przyjmij tablice zamówień na auta i stwórz auto dla każdego
        return [];
    }
}

export default function main() {
    // TODO: stwórz instancje fabryki
    // const factory = ...

    // TODO: złóż poniższe zamówienia za samochody i wyślij je do klientów!
    const orders = [
        { model: "Leon", color: "red" },
        { model: "Corsa", color: "black" },
        { model: "Punto", color: "blue" },
        { model: "Qashqai", color: "white" },
        { model: "Camaro", color: "yellow" },
        { model: "Passat", color: "dark_green" },
        { model: "Lancer", color: "dark_grey" }
    ]

    // sendToClients(cars)
}
