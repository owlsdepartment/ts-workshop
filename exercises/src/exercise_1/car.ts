import { Moment } from "moment";

export interface Car {
    model: string; // ustawiane bezpośrednio
    productionDate: Moment; // generowane losowo
    year: number; // brane z wygenerowanej daty
    brand: string; // powinno być brane na podstawie model'u 
    color: string; // ustawiane bezpośrednio
    doors: 3 | 5; // wybierane losowo
}

export interface CarParams {
    model: string;
    color: string;
}

/*
Brands and models:
 - Seat: Leon, Ibiza, Arona, Ateca
 - Opel: Astra, Corsa, Insignia, Combo
 - Fiat: Ducato, Punto, Panda, Tipo
 - Nissan: Qashqai, Micra, Juke, Primera
 - Chevrolet: Cruze, Aveo, Camaro
 - Volkswagen: Golf, Touareg, Passat, Polo
 - Mitsubishi: Lancer, Endeavor, Chariot, Challenger
*/
