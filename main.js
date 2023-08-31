// Get DOM elements
const cardNumberInput = document.querySelector('.card-number-input');
const cardHolderInput = document.querySelector('.card-holder-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvvInput = document.querySelector('.cvv-input');
const cardNumberBox = document.querySelector('.card-number-box');
const cardHolderName = document.querySelector('.card-holder-name');
const expMonth = document.querySelector('.exp-month');
const expYear = document.querySelector('.exp-year');
const cvvBox = document.querySelector('.cvv-box');
const cardContainer = document.querySelector('.card-container');

// Update card number box as user types
cardNumberInput.addEventListener('input', () => {
  cardNumberBox.textContent = cardNumberInput.value.padEnd(16, '#');
});

// Update cardholder name as user types
cardHolderInput.addEventListener('input', () => {
  cardHolderName.textContent = cardHolderInput.value || 'full name';
});

// Update expiration date as user selects options
monthInput.addEventListener('change', () => {
  expMonth.textContent = monthInput.value || 'mm';
});
yearInput.addEventListener('change', () => {
  expYear.textContent = yearInput.value.slice(-2) || 'yy';
});

// Update CVV display as user types
cvvInput.addEventListener('input', () => {
  cvvBox.textContent = cvvInput.value;
});

// Flip card when focused on CVV input
cvvInput.addEventListener('focus', () => {
  cardContainer.classList.add('flip');
});

cvvInput.addEventListener('blur', () => {
  cardContainer.classList.remove('flip');
});

// Prevent submission if any input is empty
document.querySelector('form').addEventListener('submit', (event) => {
  if (
    cardNumberInput.value === '' ||
    cardHolderInput.value === '' ||
    monthInput.value === 'month' ||
    yearInput.value === 'year' ||
    cvvInput.value === ''
  ) {
    event.preventDefault();
    alert('Please fill in all required fields.');
  } else {
    alert('Your payment was successful.');
  }
});
