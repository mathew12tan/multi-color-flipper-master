const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    let randomNumber = getRandomNumber(hex);
    hexColor += hex[randomNumber];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  hexColor = "#";
});