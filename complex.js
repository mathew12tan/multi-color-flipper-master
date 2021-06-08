const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");

const main = document.querySelector("main");
const btn = document.querySelector("#btn");

const quantity = document.querySelector("#quantity");
const angle = document.querySelector("#angle");

const errorPara = document.createElement("p");
errorPara.classList.add("error-msg");

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomColor() {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    let randomValue = getRandomNumber(hex);
    hexColor += hex[randomValue];
  }
  return hexColor;
}

function validateInput(input) {
  input.parentElement.appendChild(errorPara);
  if (!input.checkValidity()) {
    errorPara.innerHTML = input.validationMessage;
    return false;
  } else {
    errorPara.innerHTML = "";
    return true;
  }
}

btn.addEventListener("click", function () {
  const isAllValid = validateInput(quantity) && validateInput(angle);
  if (isAllValid) {
    let newBackgroundImage = "";
    let colorPattern = "";
    for (let index = 1; index <= quantity.value; index++) {
      let firstValue = (100 / quantity.value) * (index - 1);
      let secondValue = (100 / quantity.value) * index;
      addColor = `, ${getRandomColor()} ${firstValue}% ${secondValue}%`;
      colorPattern += addColor;
    }
    newBackgroundImage = `linear-gradient(${angle.value}deg ${colorPattern})`;
    main.style.backgroundImage = newBackgroundImage;
  }
});
