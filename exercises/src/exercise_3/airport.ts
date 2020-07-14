import { Hangar } from "./hangar";
import { Aircraft } from "./aircrafts";

const printBoolean = (val: boolean) => val ? "Yes" : "No"

interface Hangars {
    planes: Hangar<any>, // TODO: zamienic na Hangar<Plane>
    helicopters: Hangar<any>, // TODO: zamienic na Hangar<Helicopter>
    ufos: Hangar<any> // TODO: zamienic na Hangar<UFO>
}

export class Airport {
    private hangars: Hangars;

    constructor() {
        this.hangars = {
            planes: new Hangar(),
            helicopters: new Hangar(),
            ufos: new Hangar()
        }

        // TODO: odkomentować
        for (let i = 0; i < 10; i++) {
            // hangars.planes.addVehicle(new Plane())
            // hangars.planes.addVehicle(new Helicopter())
            // hangars.planes.addVehicle(new UFO())
        }
    }

    // TODO: odkomentować
    /*
    getPlane(): Aircraft {
        return this.hangars.planes.getVehicle(5);
    }

    getUFO(): Aircraft {
        return this.hangars.ufos.getVehicle(1);
    }

    getHelicopter(): Aircraft {
        return this.hangars.helicopters.getVehicle(9);
    }
    */

    async landAircraft(aircraft: Aircraft) {
        console.log(`Letting aircraft ${aircraft.name} land on the airport!`)

        const landed = await aircraft.land();
        console.log(`Was landing successfull? ${printBoolean(landed)}!`)
    }

    async startAircraft(aircraft: Aircraft) {
        console.log(`Starting aircraft ${aircraft.name}...`)

        const started = await aircraft.fly();
        console.log(`Was landing successfull? ${printBoolean(started)}!`)
    }
}
