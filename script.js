'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
//whenever we use querySelectior with a selector that matches multiple elements, only the first one gets selected so instead we can use querySelectorAll
//nodelist in the console is little bit like an array though it is not an array  but here it's work like an array

const openModal = function () {
  // console.log('button clicked');
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

//Adding key Esc:
document.addEventListener('keydown', function (event) {
  // console.log('A key was pressed');
  // console.log(event);
  // console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    closeModal();
  }
});
//the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed as we hit any key here on the keyboard a keydown event is generated, our listener function here is waiting for that event to happen and at anytime an event like this occurs javascript does infact generate an object and that object contains all the inforamation about the event itself and we can then actually access that object in the even handler function. So again when an event happened we can have access to information aboutt that event in the event handler function.

//Hey, javascript call function when a key down event happens and when you do so please pass in the event object as an argument.
