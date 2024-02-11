'use strict';

// You can store querySelectors in a variable for ease of use.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// querySelector will only select the first element with the class, however, querySelectorAll will select all the html elements with the matching class
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    // classList allows you to access the classes of the element selected and has various methods like adding, removing, replacing, and toggling classes.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Because btnOpenModal is a node list it is similar to an array which allows you to use for loops to add event listeners to each button if you desire.
for (let index = 0; index < btnOpenModal.length; index++)
    btnOpenModal[index].addEventListener('click', openModal);

// Do not call the function with parenthesis, or the script will call it right away when it loads. Instead just call the name of the function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// You can specify an event of a keydown, keyup, or keypressed which will generate an object of the event which we named 'e'.
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
