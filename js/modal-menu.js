var modalWindowBagel = document.getElementById("modalWindowBagel");
var modalWindowCoffee = document.getElementById("modalWindowCoffee");
var modalWindowDumplings = document.getElementById("modalWindowDumplings");
var modalWindowCake = document.getElementById("modalWindowCake");

var btn_bagel = document.getElementById("btn_bagel");
var btn_coffee = document.getElementById("btn_coffee");
var btn_dumplings = document.getElementById("btn_dumplings");
var btn_cake = document.getElementById("btn_cake");

var span_bagel = document.getElementsByClassName("modal-window__close--bagel")[0];
var span_coffee = document.getElementsByClassName("modal-window__close--coffee")[0];
var span_dumplings = document.getElementsByClassName("modal-window__close--dumplings")[0];
var span_cake = document.getElementsByClassName("modal-window__close--cake")[0];

btn_bagel.onclick = function () {
    modalWindowBagel.style.display = "block";
};
btn_coffee.onclick = function () {
    modalWindowCoffee.style.display = "block";
};
btn_dumplings.onclick = function () {
    modalWindowDumplings.style.display = "block";
};
btn_cake.onclick = function () {
    modalWindowCake.style.display = "block";
};

span_bagel.onclick = function () {
        modalWindowBagel.style.display = "none";
};
span_coffee.onclick = function () {
        modalWindowCoffee.style.display = "none";
};
span_dumplings.onclick = function () {
        modalWindowDumplings.style.display = "none";
};
span_cake.onclick = function () {
        modalWindowCake.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalWindowBagel) {
        modalWindowBagel.style.display = "none";
    }
    if (event.target == modalWindowCoffee) {
        modalWindowCoffee.style.display = "none";
    }
    if (event.target == modalWindowDumplings) {
        modalWindowDumplings.style.display = "none";
    }
    if (event.target == modalWindowCake) {
        modalWindowCake.style.display = "none";
    }
};