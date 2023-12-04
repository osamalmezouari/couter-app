const counterElement = document.getElementById("counterNumber") as HTMLParagraphElement
const decrease = document.getElementById("decrease") as HTMLButtonElement
const reset = document.getElementById("reset") as HTMLButtonElement
const increase = document.getElementById("increase") as HTMLButtonElement

let counter: number = 0;

const handlerClick = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement
    const buttonTargetValue: string = target.value
    if (buttonTargetValue === "decrease") {
        counter -= 1
        counterElement.innerHTML = (`${counter}`)
        if (counter < 0) {
            counterElement.style.color = "red"
        }
        else if (counter === 0) {
            counterElement.style.color = "black"
        }
    }
    else if (buttonTargetValue === "reset") {
        counter = 0
        counterElement.innerHTML = (`${counter}`)
        counterElement.style.color = "black"
    }
    else {
        counter += 1
        counterElement.innerHTML = (`${counter}`)
        if (counter > 0) {
            counterElement.style.color = "green"
        }
        else if (counter === 0) {
            counterElement.style.color = "black"
        }
    }
}

decrease.onclick = (e: MouseEvent) => handlerClick(e)
reset.onclick = (e: MouseEvent) => handlerClick(e)
increase.onclick = (e: MouseEvent) => handlerClick(e)



