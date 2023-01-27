/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("unit-value");
const convertBtn = document.getElementById("convert-btn");
const lengthParagraph = document.getElementById("length");
const volumeParagraph = document.getElementById("volume");
const massParagraph = document.getElementById("mass");

convertBtn.addEventListener("click", function convert() {
  let number = input.value;
  input.value = "";
  let meter = 0;
  let feet = 0;
  let liters = 0;
  let gallons = 0;
  let kilograms = 0;
  let pounds = 0;
  meter = number / 3.281;
  feet = number * 3.281;
  liters = number / 0.264;
  gallons = number * 0.264;
  kilograms = number / 2.204;
  pounds = number * 2.204;
  lengthParagraph.textContent = `${number} meters = ${feet.toFixed(
    3
  )} feet | ${number} feet = ${meter.toFixed(3)} meters `;
  volumeParagraph.textContent = `${number} liters = ${gallons.toFixed(
    3
  )} gallons | ${number} gallons = ${liters.toFixed(3)} liters `;
  massParagraph.textContent = `${number} kilos = ${pounds.toFixed(
    3
  )} pounds | ${number} pounds = ${kilograms.toFixed(3)} kilos `;
});
