const classicConst = "just classic."
let num: number

export function someFunction(newNum: number) {
    if (num !== newNum) {
        console.log("Changing variable....")
        num = newNum
    } else {
        console.log("Why should I change it?!")
    }
}
