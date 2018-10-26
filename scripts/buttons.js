
// ===========================================
//  game intializing buttons
// ===========================================
const spaceElement = document.querySelector('[data-space]');
const dogElement = document.querySelector('[data-dogs]');
const catElement = document.querySelector('[data-cats]');

spaceElement.addEventListener('click', () => {
  queryStr = 'space';
  pageSize = 100;
  numImages = 8;
  numSounds = 8;
  durationEnd = 4;
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});

dogElement.addEventListener('click', () => {
  queryStr = 'dog';
  pageSize = 100;
  numImages = 16;
  numSounds = 16;
  durationEnd = 4;
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});

catElement.addEventListener('click', () => {
  queryStr = 'cat';
  pageSize = 100;
  numImages = 2;
  numSounds = 2;
  durationEnd = 4;
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});