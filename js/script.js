const inputName = document.querySelector("#input-name-card");
const inputNumber = document.querySelector("#input-number-card");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCvc = document.querySelector("#input-cvc");
const pNumberCard1 = document.querySelector("#p-number-card-1");
const pNumberCard2 = document.querySelector("#p-number-card-2");
const pNumberCard3 = document.querySelector("#p-number-card-3");
const pNumberCard4 = document.querySelector("#p-number-card-4");
const pNameCard = document.querySelector("#p-name");
const pCardMonth = document.querySelector("#p-month");
const pCardYear = document.querySelector("#p-year");
const pCvc = document.querySelector("#p-cvc");
const pAlertName = document.querySelector("#p-alert-name");
const pAlertNumber = document.querySelector("#p-alert-number");
const pAlertDate = document.querySelector("#p-alert-date");
const pAlertCvc = document.querySelector("#p-alert-cvc");
const buttonConfirm = document.querySelector("#btn-confirm");

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

inputNumber.addEventListener("input", () => {
  pNumberCard1.textContent = inputNumber.value.substring(0, 4);
  pNumberCard2.textContent = inputNumber.value.substring(4, 8);
  pNumberCard3.textContent = inputNumber.value.substring(8, 12);
  pNumberCard4.textContent = inputNumber.value.substring(12, 16);
    console.log(isNumber(inputNumber.value));
  if (isNumber(inputNumber.value)) {
    pAlertNumber.textContent = " ";
    if (inputNumber.value.length === 16) {
      inputMonth.focus();
      inputNumber.style.borderColor = "green";
    }

    console.log(typeof inputNumber.value);
  } else {
    pNumberCard1.textContent = "####";
    pNumberCard2.textContent = "####";
    pNumberCard3.textContent = "####";
    pNumberCard4.textContent = "####";
    inputNumber.style.borderColor = "red";
    pAlertNumber.textContent = "Wrong format, numbers only!";
    pAlertNumber.style.fontSize = "12px";
    pAlertNumber.style.color = "red";
  }
});

inputName.addEventListener("input", () => {
  pNameCard.textContent = inputName.value.toUpperCase();
  inputName.maxLength = 30;
  if (inputName.value.length === 16) {
    pNameCard.textContent = "######";
    inputName.style.borderColor = "red";
  } else {
    inputName.style.borderColor = "green";
  }
});

inputMonth.addEventListener("input", () => {

  inputMonth.maxLength = 2;
  pCardMonth.textContent = inputMonth.value.substring(0, 2) + "/";
  console.log(inputMonth.value.substring(0, 2));
  if (inputMonth.value.length === 2) {
    pAlertDate.textContent = " ";
    inputMonth.style.borderColor = "green";
    inputYear.focus();
  } else {
    inputMonth.style.borderColor = "red";
    pAlertDate.textContent = " ";
  }
  if (!isNumber(inputMonth.value)) {
    console.log(typeof inputMonth.value);
    pAlertDate.textContent = "Can't be blank!";
    pAlertDate.style.fontSize = "12px";
    pAlertDate.style.color = "red";
    inputMonth.style.borderColor = "red";
    pCardMonth.textContent = "###";
  }
  
});

inputYear.addEventListener("input", () => {
  inputYear.maxLength = 2;
  pCardYear.textContent = inputYear.value.substring(0, 2);
  if (inputYear.value.length === 2) {
    pAlertDate.textContent = " ";
    inputYear.style.borderColor = "green";
    inputCvc.focus();
  } else {
    inputYear.style.borderColor = "red";
    pAlertDate.textContent = " ";
  }

  if (!isNumber(inputYear.value)){
    pAlertDate.textContent = "Can't be blank!";
    pAlertDate.style.fontSize = "12px";
    pAlertDate.style.color = "red";
    inputYear.style.borderColor = "red";
    pCardYear.textContent = "###";
  }
});

inputCvc.addEventListener("input", () => {
  pCvc.textContent = inputCvc.value;
  inputCvc.maxLength = 3;
  if (inputCvc.value.length === 3) {
    pAlertCvc.textContent = " ";
    buttonConfirm.focus();
    inputCvc.style.borderColor = "green";
  } else {
    pAlertCvc.textContent = " ";
    
    inputCvc.style.borderColor = "red";
  }

  if(!isNumber(inputCvc.value)){
    pAlertCvc.textContent = "Can't be blank!"
    pAlertCvc.style.fontSize = "12px";
    pAlertCvc.style.color = "red";
    inputCvc.style.borderColor = "red"
    pCvc.textContent = "###";
  }
});
