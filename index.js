let counter = 0;

const label = document.getElementById("myLabel");

const decrease = document.getElementById("btn1");
const reset = document.getElementById("btn2");
const increase = document.getElementById("btn3");

decrease.onclick = function() {
    counter--;
    label.textContent = counter;
}

reset.onclick = function() {
    counter = 0;
    label.textContent = counter;
}

increase.onclick = function() {
    counter++;
    label.textContent = counter;
}