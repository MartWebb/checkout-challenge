// DOM Elements
const ctl = document.querySelectorAll('.ctl');
const price = document.querySelectorAll('.product-price-new');
const qtyOne = document.querySelector('.qty-one');
const qtyTwo = document.querySelector('.qty-two');
const totalAmount = document.querySelector('.total-amount');
const shipping = document.querySelector('.shipping');

// Dom elements used for storage
const saveButton = document.querySelector('.submit-btn');
const checkbox = document.getElementById('checkbox');

let priceArray = [];
let qtyArray = [];

const qtyChangeHandler = (targetClassName) => {
    const qty = document.querySelector(`.qty-${targetClassName.slice(0,3)}`);
    let num = qty.innerText;
    targetClassName.slice(4,7) === 'plu' ? num++ : num !== '0' ? num-- : num = 0;
    qty.textContent = num;
    totalHandler();
};

const totalHandler = () => {
    price.forEach(price => priceArray.push(price.innerText.replace(/\$|,/g, '')));
    let total = parseFloat(priceArray[0]) * parseInt(qtyOne.innerText) 
        + parseFloat(priceArray[1]) 
        * parseInt(qtyTwo.innerText) 
        + parseInt(shipping.innerText.replace(/\$|,/g, ''));
    if (qtyOne.textContent === '0' && qtyTwo.textContent === '0') total = 0
    totalAmount.textContent = total.toFixed(2);
};

ctl.forEach(ctl => ctl.addEventListener('click', (event) => qtyChangeHandler(event.target.className.slice(4))));

// Save data setup
const formId = "save-later-form";
const url = location.href;
const formIdentifier = `${url} ${formId}`;
let form = document.querySelector(`#${formId}`); 
let formElements = form.elements;

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
    if (checkbox.checked) {
        alert('You are successful and you saved!');
        data = getFormData();
        localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
        return;
    }
    alert('You are successful, but you did not save!');
    
};
