'use strict';

let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let Modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

console.log(Modal);
// Show Modal upon Clicking the 3 buttons

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    Modal.classList.remove('hidden');
    // add blur effect in the background
    overlay.classList.remove('hidden');
  });
}

// close Modal upon clicking the close button

closeModal.addEventListener('click', function () {
  Modal.classList.add('hidden');
  // remove blur effect upon closing the modal.
  overlay.classList.add('hidden');
});

// close Modal upon keyboard Escape key

document.addEventListener('keydown', function (e) {
  if (!Modal.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      Modal.classList.add('hidden');
      // remove blur effect upon closing the modal.
      overlay.classList.add('hidden');
    }
  }
});
