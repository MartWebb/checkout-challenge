// DOM Elements
const onePlus = document.querySelector('.one-plus');
const oneMinus = document.querySelector('.one-minus');
const twoPlus = document.querySelector('.two-plus');
const twoMinus = document.querySelector('.two-minus');
const qtyOne = document.querySelector('.qty-one');
const qtyTwo = document.querySelector('.qty-two');
const totalAmount = document.querySelector('.total-amount');
const saveButton = document.querySelector('.submit-btn');

// Save data setup
const formId = "save-later-form";
const url = location.href;
const formIdentifier = `${url} ${formId}`;
let form = document.querySelector(`#${formId}`); 
let formElements = form.elements;

// Totaling setup
let count = 1;
let total = 0;
const bag = 54.99;
const shoes = 74.99;
const tax = 19.00;
total = bag + shoes + tax;
totalAmount.textContent = total;

// There is a better way, but I cannot think of it at the mo
// Addition listners
onePlus.addEventListener('click', () => {
    total += bag;
    totalAmount.textContent = total.toFixed(2);
    count += 1;
    qtyOne.textContent = count;
});


twoPlus.addEventListener('click', () => {
    total += shoes;
    totalAmount.textContent = total.toFixed(2);
    count += 1;
    qtyOne.textContent = count;
});

//  Subtraction Listeners
oneMinus.addEventListener('click', () => {
    if (count !== 1) {
        total -= bag;
        totalAmount.textContent = total.toFixed(2);
        count -= 1;
        qtyOne.textContent = count;
    }
});

twoMinus.addEventListener('click', () => {
    if (count !== 1) {
        total -= shoes;
        totalAmount.textContent = total.toFixed(2);
        count -= 1;
        qtyTwo.textContent = count;
    }
});

// Get form data
const getFormData = () => {
    let data = { [formIdentifier]: {} };
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
    return data;
  };

// Save form data
const saveData = () => {
    alert('You are successful!');
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
};
