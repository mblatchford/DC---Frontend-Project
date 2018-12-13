
// ===========================================
//  game intializing buttons
// ===========================================
const spaceElement = document.querySelector('[data-space]');
const dogElement = document.querySelector('[data-dogs]');
const catElement = document.querySelector('[data-cats]');
let level = 1;

// Consider grouping together this functionality:
function initialize(queryStr) {
  let pageSize = 100;
  let numImages = 6 + (level*2);
  let numSounds = 6 + (level*2); 
  let durationEnd = 3;
  modalElement.classList.toggle('modal-hidden')
  button(queryStr, pageSize, numImages, numSounds, durationEnd);
  window.pJSDom[0].pJS.fn.vendors.destroypJS();
  window["pJSDom"] = [];
}

// which then allows you to:

spaceElement.addEventListener('click', () => {
  initialize('space');
  
  // let queryStr = 'space';
  // let pageSize = 100;
  // let numImages = 6 + (level*2);
  // let numSounds = 6 + (level*2); 
  // let durationEnd = 3;
  // modalElement.classList.toggle('modal-hidden')
  // button(queryStr, pageSize, numImages, numSounds, durationEnd);
  // window.pJSDom[0].pJS.fn.vendors.destroypJS();
  // window["pJSDom"] = [];
});

dogElement.addEventListener('click', () => {
  initialize('dog');
  // let queryStr = 'dog';
  // let pageSize = 100;
  // let numImages = 6 + (level*2);
  // let numSounds = 6 + (level*2);
  // let durationEnd = 3;
  // modalElement.classList.toggle('modal-hidden')
  // button(queryStr, pageSize, numImages, numSounds, durationEnd);
  // window.pJSDom[0].pJS.fn.vendors.destroypJS();
  // window["pJSDom"] = [];
});

catElement.addEventListener('click', () => {
  initialize('cat');
  // let queryStr = 'cat';
  // let pageSize = 100;
  // let numImages = 6 + (level*2);
  // let numSounds = 6 + (level*2);
  // let durationEnd = 3;
  // modalElement.classList.toggle('modal-hidden')
  // button(queryStr, pageSize, numImages, numSounds, durationEnd);
  // window.pJSDom[0].pJS.fn.vendors.destroypJS();
  // window["pJSDom"] = [];
});