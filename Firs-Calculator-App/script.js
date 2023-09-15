// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTemprature = function (arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const curTemp = arr[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// console.log(calcTemprature(tempratures));

function clearInput() {
  document.getElementById('calcInput').value = '';
}

// const buttonTarget = document.querySelectorAll('.nmbr-btn');

// buttonTarget.addEventListener('click', function () {
//   alert('You pushed the button!');
// });

const nbrButton = document.querySelectorAll('.nmbr-btn');

const finalResult = document.querySelector('.orange-btn');

let getArrayValue;
let getArrayActionValue;
let getLastValue;
let getFinalResult;
let getInputValue;
let getInputSplitValue;

let getInputRealValue = document.getElementById('calcInput');

for (let i = 0; i < nbrButton.length; i++) {
  const currentButtonSelect = nbrButton[i];
  currentButtonSelect.addEventListener('click', () => {
    getInputRealValue.value += currentButtonSelect.innerText;
  });
}

finalResult.addEventListener('click', () => {
  getInputValue = getInputRealValue.value;
  if (getInputValue.indexOf('+') > -1) {
    getInputSplitValue = getInputValue.split('+');
    getFinalResult =
      Number(getInputSplitValue[0]) + Number(getInputSplitValue[1]);
  } else if (getInputValue.indexOf('-') > -1) {
    getInputSplitValue = getInputValue.split('-');
    getFinalResult =
      Number(getInputSplitValue[0]) - Number(getInputSplitValue[1]);
  } else if (getInputValue.indexOf('*') > -1) {
    getInputSplitValue = getInputValue.split('*');
    getFinalResult =
      Number(getInputSplitValue[0]) * Number(getInputSplitValue[1]);
  } else if (getInputValue.indexOf('%') > -1) {
    getInputSplitValue = getInputValue.split('%');
    console.log(getInputSplitValue);
    getFinalResult =
      Number(getInputSplitValue[0]) % Number(getInputSplitValue[1]);
  } else if (getInputValue.indexOf('÷') > -1) {
    getInputSplitValue = getInputValue.split('÷');
    console.log(getInputSplitValue);
    getFinalResult =
      Number(getInputSplitValue[0]) / Number(getInputSplitValue[1]);
  }
  getInputRealValue.value = getFinalResult;
});
