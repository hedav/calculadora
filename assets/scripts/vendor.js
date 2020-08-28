const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-suma');
const subtractBtn = document.getElementById('btn-resta');
const multiplyBtn = document.getElementById('btn-multiplicar');
const divideBtn = document.getElementById('btn-dividir');

const currentResultOutput = document.getElementById('current-resultado');
const currentCalculationOutput = document.getElementById('current-calculo');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
