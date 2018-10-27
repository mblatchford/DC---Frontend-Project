
// ===========================================
//  game intializing buttons
// ===========================================
const spaceElement = document.querySelector('[data-space]');
const dogElement = document.querySelector('[data-dogs]');
const catElement = document.querySelector('[data-cats]');
let level = 1;

spaceElement.addEventListener('click', () => {
  queryStr = 'space';
  pageSize = 100;
  numImages = 2 + (level*2);
  numSounds = 2 + (level*2);
  durationEnd = 3;
  modalElement.classList.toggle('modal-hidden')
  button(queryStr, pageSize,  numImages, numSounds, durationEnd);
});

dogElement.addEventListener('click', () => {
  queryStr = 'dog';
  pageSize = 100;
  numImages = 2;
  numSounds = 2;
  durationEnd = 3;
  modalElement.classList.toggle('modal-hidden')
  button(queryStr, pageSize,  numImages, numSounds, durationEnd);
});

catElement.addEventListener('click', () => {
  queryStr = 'cat';
  pageSize = 100;
  numImages = 2;
  numSounds = 2;
  durationEnd = 3;
  modalElement.classList.toggle('modal-hidden')
  button(queryStr, pageSize,  numImages, numSounds, durationEnd);
});