const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");

const main = document.querySelector("main");
const btn = document.querySelector("#btn");

const quantity = document.querySelector("#quantity");
const quantityError = document.querySelector(".quantity-error");

const angle = document.querySelector("#angle");
const angleError = document.querySelector(".angle-error");

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

function validateQuantity() {
  if (!quantity.checkValidity()) {
    quantityError.innerHTML = quantity.validationMessage;
    return false;
  } else {
    quantityError.innerHTML = "";
    return true;
  }
}

function validateAngle() {
  if (!angle.checkValidity()) {
    angleError.innerHTML = angle.validationMessage;
    return false;
  } else {
    angleError.innerHTML = "";
    return true;
  }
}

btn.addEventListener("click", function () {
  const isAllValid = [validateQuantity(), validateAngle()];
  console.log(isAllValid);
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
