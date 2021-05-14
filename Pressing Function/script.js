'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); //then is can be open after clicking the button
  overlay.classList.remove('hidden');

  //modal.style.display = 'block'; same as above line
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}
//   btnShowModal[i].addEventListener('click', function(){
//       modal.classList.remove('hidden'); //then is can be open after clicking the button
//   overlay.classList.remove('hidden');

//   });
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  // or if (e.key === 'Escape' && !modal.classList.contains('hidden'))
});
