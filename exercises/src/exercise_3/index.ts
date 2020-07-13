import { Hangar } from "./hangar"
import { Plane, Helicopter, UFO, Aircraft } from "./aircrafts"
import { Pigeon } from "./pigeon"

const hangars = {
    planes: new Hangar(),
    helicopters: new Hangar(),
    ufos: new Hangar()
}

function landAircraft(aircraft: Aircraft) {
    console.log(`Letting aircraft ${aircraft.name} land on the airport!`)
}

export default function main() {
    for (let i = 0; i < 10; i++) {
        // hangars.planes.addVehicle(new Plane())
        // hangars.planes.addVehicle(new Helicopter())
        // hangars.planes.addVehicle(new UFO())
    }

    // landAircraft(hangars.planes.getVehicle(5))
    // landAircraft(hangars.ufos.getVehicle(1))
    // landAircraft(hangars.helicopters.getVehicle(9))
    // landAircraft(new Pigeon())
}
