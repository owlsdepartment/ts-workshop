import ex_1 from "./exercise_1";
import ex_2 from "./exercise_2";
import ex_3 from "./exercise_3";

interface Exercises {
    [key: string]: () => void
}

const exercises: Exercises = {
    "1": ex_1,
    "2": ex_2,
    "3": ex_3
}

const toRun = process.argv[2];

if (toRun && toRun === "all") {
    for (const k in exercises) {
        exercises[k]();
    }
} else if (toRun in exercises) {
    exercises[toRun]();
} else {
    console.log(`Invalid parameter. Expected: 1 | 2 | 3 | all, but got: ${toRun}`)
}
