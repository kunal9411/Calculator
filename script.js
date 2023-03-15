let resultDisplay = document.getElementById('resultDisplay')

function clearInput() {
  resultDisplay.value = '';
}

function insert(value) {
    resultDisplay.value += value
}

function calculate() {
    let expression = resultDisplay.value;
    let operators = expression.split(/[0-9]+/).filter(Boolean);
    let operands = expression.split(/[-+*/]/).map(parseFloat);
    let total = operands[0];
    
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] == '+') {
        total += operands[i + 1];
      } else if (operators[i] == '-') {
        total -= operands[i + 1];
      } else if (operators[i] == '*') {
        total *= operands[i + 1];
      } else if (operators[i] == '/') {
        total /= operands[i + 1];
      }
    }
    
    document.getElementById('resultDisplay').value = total;
  }