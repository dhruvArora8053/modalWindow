'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
//whenever we use querySelectior with a selector that matches multiple elements, only the first one gets selected so instead we can use querySelectorAll
//nodelist in the console is little bit like an array though it is not an array  but here it's work like an array

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i].textContent);
  // Show modal 1
  // Show modal 2
  // Show modal 3

  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
//and notice we are not calling the function by giving brackets, this would not work at all because it will immediately called a function as soon as Javascripts executes this line but that's not what we want to happen. We want the close modal function to be executed only as soon as the click event happens on the close modal button.
