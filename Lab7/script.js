const meanings = [
  ["load", "blur", "focus", "pageshow", "resize"],
  ["click", "dblclick", "mousemove", "mouseover"],
];
const messages = [
  "The page is fully loaded!",
  "You are unfocused!",
  "You are focused!",
  "You are looking at me!",
  "You are changing me!",
];

function task1(todo) {
  window.addEventListener(`${todo}`, () => {
    console.log(`${messages[meanings[0].indexOf(`${todo}`)]}`);
  });
}

function task2(index, todo) {
  const teg = document.querySelector(`.h${index}`);
  let i = 0;
  teg.addEventListener(`${todo}`, () => {
    i++;
    if (i % 2 != 0) {
      teg.style.color = "green";
    } else teg.style.color = "black";
    if (i > 2) i = 1;
  });
}

function task3() {
  const run = document.querySelector(".run");
  const output = document.querySelector(".output");
  run.addEventListener("click", () => {
    output.textContent = window;
  });
}

function task4(todo) {
  const img = document.querySelector(".img");
  let i = 0;
  img.addEventListener(`${todo}`, () => {
    i++;
    if (i % 2 != 0) {
      img.style.width = "300px";
    } else img.style.width = "100px";
    if (i > 2) i = 1;
  });
}

function task5() {
  const submit = document.querySelector(".submit");
  const regex = /\d/;
  submit.addEventListener("click", () => {
    const input = document.querySelector(".input");
    const newInp = [...input.value];
    let accumulator = "";
    input.value = "";
    newInp.forEach((index) => {
      if (regex.test(index)) accumulator += index;
      input.value = accumulator;
    });
  });
}
// task1(meanings[0][0])
// task2(1, meanings[1][0])
// task3()
// task4(meanings[1][0])
// task5();
