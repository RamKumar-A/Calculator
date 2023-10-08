const form = document.querySelector('form');
const output = document.querySelector('.bmi');
const outputDesc = document.querySelector('.description');

// eventListeners
form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', hanldeReset);

// handlers
function handleSubmit(e) {
  e.preventDefault();
  const weight = +document.querySelector('#weight').value;
  const height = +document.querySelector('#height').value / 100;
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);
  const description = handleBMI(bmi);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('please enter valid numbers');
    return;
  }

  output.textContent = bmi;
  outputDesc.textContent = `You are ${description}`;
  output.id = description;
}

function hanldeReset() {
  output.textContent = 0;
  outputDesc.textContent = 'N/A';
  output.id = '';
}

function handleBMI(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  } else {
    return 'obese';
  }
}
