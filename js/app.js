"use strict";
const card = document.querySelectorAll(".cards__card");
const overlay = document.querySelector(".overlay");
const bur = document.querySelector(".bur");
const nav = document.querySelector(".bur__nav");

for (let i of card) {
  i.addEventListener("click", () => {
    overlay.classList.add("visible");
  });
}

overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay"))
    overlay.classList.remove("visible");
});

bur.addEventListener("click", (e) => {
  nav.classList.add("show");
});
