"use strict";
let it = Math.floor(Math.random() * 15) + 1;
console.log(it);
let grid = document.querySelector(".grid");
let nodeList = document.querySelectorAll(".cell");
let body = document.querySelector("body");
console.log(nodeList);

nodeList[it].setAttribute("id", "it");

const addGreen = (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("clicked");
  }
};

const findMine = (e) => {
  if (e.target.hasAttribute("id")) {
    e.target.classList.add("clicked-it");
    e.target.textContent = "IT";
    grid.removeEventListener("click", addGreen);
    body.style.backgroundColor = "black";
  }
};

grid.addEventListener("click", addGreen);
grid.addEventListener("click", findMine);
