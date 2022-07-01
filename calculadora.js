
const showBar = document.getElementById("showBar");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three"); 
const plus = document.getElementById("plus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const times = document.getElementById("times");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const division = document.getElementById("division");

let values = []
let resultado

one.addEventListener('click', ()=> {
    showBar.value = showBar.value + "1";
})

two.addEventListener('click', ()=> {
    showBar.value = showBar.value + "2";
})

three.addEventListener('click', ()=> {
    showBar.value = showBar.value + "3";
})

four.addEventListener('click', ()=> {
    showBar.value = showBar.value + "4";
})

five.addEventListener('click', ()=> {
    showBar.value = showBar.value + "5";
})

six.addEventListener('click', ()=> {
    showBar.value = showBar.value + "6";
})

seven.addEventListener('click', ()=> {
    showBar.value = showBar.value + "7";
})

eight.addEventListener('click', ()=> {
    showBar.value = showBar.value + "8";
})

nine.addEventListener('click', ()=> {
    showBar.value = showBar.value + "9";
})

zero.addEventListener('click', ()=> {
    showBar.value = showBar.value + "0";
})

plus.addEventListener('click', ()=> {
    showBar.value = showBar.value + " + ";
})

minus.addEventListener('click', ()=> {
    showBar.value = showBar.value + " - ";
})

del.addEventListener('click', ()=> {
    showBar.value = showBar.value.slice(0,-1);
})

clear.addEventListener('click', ()=> {
    showBar.value = "";
})

times.addEventListener('click', ()=> {
    showBar.value = showBar.value + " * ";
})

division.addEventListener('click', ()=> {
    showBar.value = showBar.value + " / ";
})

point.addEventListener('click', ()=> {
    showBar.value = showBar.value + ".";
})

equal.addEventListener('click', ()=> {
    showBar.value = eval(showBar.value);
})