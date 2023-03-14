let formReference = document.getElementById("form");
let nomeReference = document.getElementById("nome");
let textReference = document.getElementById("textArea");
let deleteRefernce = document.getElementById("delete");

formReference.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let incluso = false;
  let existingName = localStorage.getItem("nomi")
    ? JSON.parse(localStorage.getItem("nomi"))
    : [];
  existingName.forEach((element) => {
    if (element == nomeReference.value) {
      return (incluso = true);
    }
  });
  if (incluso == false) {
    existingName.push(nomeReference.value);
    console.log(existingName);
    localStorage.setItem(`nomi`, JSON.stringify(existingName));
    textReference.innerText = `last name saved ${nomeReference.value}`;
  } else {
    textReference.innerText = "il nome e` gia presente";
  }
});

deleteRefernce.addEventListener("click", (e) => {
  e.preventDefault();
  let existingName = localStorage.getItem("nomi")
    ? JSON.parse(localStorage.getItem("nomi"))
    : [];
  existingName.forEach((element) => {
    if (element == nomeReference.value) {
      existingName.pop(element);
      localStorage.setItem(`nomi`, JSON.stringify(existingName));
      textReference.innerText = `${nomeReference.value} removed`;
    } else {
      textReference.innerText = `${nomeReference.value} non e prensente nel local storage`;
    }
  });
});
let tempo = sessionStorage.setItem(`tempo`, `0`);
let k = 0;
const timerSet = function () {
  sessionStorage.setItem(`tempo`, `${k}`);
  document.getElementById("timer").innerText = `${k} s`;
  k++;
};
const timer = setInterval(timerSet, 1000);
