"use strict";

let result;
let input = document.querySelector("input");
let equals = document.getElementById("equals");

let ac = document.getElementById("ac");
ac.addEventListener("click", () => (input.value = " "));

let del = document.getElementById("del");
del.addEventListener("click", () => input.value.slice(0, -1));

// let divide = document.getElementById("divide");
// divide.addEventListener("click", () => {
//   let num1 = input.value;
//   input.value = null;
//   function divide() {
//     let num2 = input.value;
//     input.value = null;
//     result = num1 / num2;
//   }
//   divide();
// });

let box0 = document.getElementById("box0");
box0.addEventListener("click", () => (input.value += 0));

let box1 = document.getElementById("box1");
box1.addEventListener("click", () => (input.value += 1));

let box2 = document.getElementById("box2");
box2.addEventListener("click", () => (input.value += 2));

let box3 = document.getElementById("box3");
box3.addEventListener("click", () => (input.value += 3));

let box4 = document.getElementById("box4");
box4.addEventListener("click", () => (input.value += 4));

let box5 = document.getElementById("box5");
box5.addEventListener("click", () => (input.value += 5));

let box6 = document.getElementById("box6");
box6.addEventListener("click", () => (input.value += 6));

let box7 = document.getElementById("box7");
box7.addEventListener("click", () => (input.value += 7));

let box8 = document.getElementById("box8");
box8.addEventListener("click", () => (input.value += 8));

let box9 = document.getElementById("box9");
box9.addEventListener("click", () => (input.value += 9));

let dot = document.getElementById("dot");
dot.addEventListener("click", () => (input.value += "."));

input.value = " ";

let num1 = input.value;
parseInt(num1);
document.getElementById("plus").addEventListener("click", function () {
  let num1 = input.value;
  input.value = null;
  function sum() {
    let num2 = input.value;
    result = parseInt(num1) + parseInt(num2);
  }
  equals.onclick = function () {
    sum();
    input.value = null;
    input.value += result;
    num1 = null;
    result = null;
  };
});
