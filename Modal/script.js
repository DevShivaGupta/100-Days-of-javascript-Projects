'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close');
const btnsOpenModal = document.querySelector(".popup");

function open(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
function close(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnsOpenModal.addEventListener('click',open);
btnCloseModal.addEventListener('click',close);
overlay.addEventListener('click',close);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      close();
    }
  });
  
