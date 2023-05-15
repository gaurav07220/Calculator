let expression = '';

const append = (value) => {
  expression += value;
  document.getElementById('result').innerHTML = expression;
}

const clearDisplay = () => {
  expression = '';
  document.getElementById('result').innerHTML = expression;
}

const deleteLast = () => {
  expression = expression.slice(0, -1);
  document.getElementById('result').innerHTML = expression;
}

const calculate = () => {
  const result = eval(expression);
  document.getElementById('result').innerHTML = result;
  expression = result.toString();
}
