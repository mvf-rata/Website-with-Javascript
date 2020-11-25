const answer = document.getElementById('answer');
const button = document.getElementById('start');
button.addEventListener('click', isPrime);

function isPrime() {
  let n = document.getElementById('input').value; // get the value when function runs.
  if (n === 1) {
    answer.innerHTML = '1 is neither a prime nor a composit number. It is a unit.';
  } else if (n < 0) {
    answer.innerHTML = 'It must be a positiv number.'
    answer.style.color = 'red';
  } else if (n == 0) {
    answer.innerHTML = 'You can not divide by zero.'
  }
  for (const d = 2; d <= n; d++){ //modulus operation
    if (n % d == 0){
      answer.innerHTML = 'It is not a Prime Number';
      answer.style.color = 'red';
      break;
    } else {
      answer.innerHTML = 'It is a Prime Number';
      answer.style.color = 'green';
    }
  }
}
