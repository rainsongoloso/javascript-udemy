'use strict';

const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', show);
}

closeModalBtn.addEventListener('click', hide);
overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hide();
  }
});
