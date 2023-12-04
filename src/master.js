"use strict";
const counterElement = document.getElementById("counterNumber");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let counter = 0;
const handlerClick = (e) => {
    const target = e.target;
    const buttonTargetValue = target.value;
    if (buttonTargetValue === "decrease") {
        counter -= 1;
        counterElement.innerHTML = (`${counter}`);
        if (counter < 0) {
            counterElement.style.color = "red";
        }
        else if (counter === 0) {
            counterElement.style.color = "black";
        }
    }
    else if (buttonTargetValue === "reset") {
        counter = 0;
        counterElement.innerHTML = (`${counter}`);
        counterElement.style.color = "black";
    }
    else {
        counter += 1;
        counterElement.innerHTML = (`${counter}`);
        if (counter > 0) {
            counterElement.style.color = "green";
        }
        else if (counter === 0) {
            counterElement.style.color = "black";
        }
    }
};
decrease.onclick = (e) => handlerClick(e);
reset.onclick = (e) => handlerClick(e);
increase.onclick = (e) => handlerClick(e);
