'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
//whenever we use querySelectior with a selector that matches multiple elements, only the first one gets selected so instead we can use querySelectorAll
//nodelist in the console is little bit like an array though it is not an array  but here it's work like an array

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  // Show modal 1
  // Show modal 2
  // Show modal 3
} 
