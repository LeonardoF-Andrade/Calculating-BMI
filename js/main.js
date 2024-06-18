import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const closeBtn = document.querySelector(".close");

weight.oninput = () => AlertError.close()
height.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault();

  const weightValue = weight.value;
  const heightValue = height.value;
  if (notNumber(weightValue) || notNumber(heightValue) || weightValue <= 0 || heightValue <= 0) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const bmi = (weightValue / (heightValue * heightValue)) * 10000; //Calculate IMC

  Modal.message.innerText = `Seu IMC é ${bmi.toFixed(2)}`;
  Modal.open();

};

function notNumber(value) {
  return isNaN(value) || value == "";
}
