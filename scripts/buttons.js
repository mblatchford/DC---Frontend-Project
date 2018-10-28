// ===========================================
//  game intializing buttons
// ===========================================
const spaceElement = document.querySelector("[data-space]");
const dogElement = document.querySelector("[data-dogs]");
const catElement = document.querySelector("[data-cats]");
let level = 1;

// why don't these parameters need to be defined with a const or let? They aren't globally scoped right?
spaceElement.addEventListener("click", () => {
  queryStr = "space";
  pageSize = 100;
  numImages = 1 + level * 2;
  numSounds = 1 + level * 2;
  durationEnd = 3;
  modalElement.classList.toggle("modal-hidden");
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});

dogElement.addEventListener("click", () => {
  queryStr = "dog";
  pageSize = 100;
  numImages = 6 + level * 2;
  numSounds = 6 + level * 2;
  durationEnd = 3;
  modalElement.classList.toggle("modal-hidden");
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});

catElement.addEventListener("click", () => {
  queryStr = "cat";
  pageSize = 100;
  numImages = 6 + level * 2;
  numSounds = 6 + level * 2;
  durationEnd = 3;
  modalElement.classList.toggle("modal-hidden");
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
});
