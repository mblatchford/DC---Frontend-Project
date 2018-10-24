// a memory game that pulls images/sounds from an API. the user will match
// the face of the cards. 8 cards are randomized and displayed. only 2 cards
// may be selected at a time. after 2 cards are selected, cards flip back
// unless the cards are correct, in which case the cards stay visible.
// guess count is reset after 2 guesses.

// const emptyArrayOfImages = [];

// array of objects that hold the name / src of temp images
const arrayOfImages = [
  {
    name: "1",
    image: "imgs/1.png"
  },
  {
    name: "2",
    image: "imgs/2.png"
  },
  {
    name: "3",
    image: "imgs/3.png"
  },
  {
    name: "4",
    image: "imgs/4.png"
  },
  {
    name: "5",
    image: "imgs/5.png"
  },
  {
    name: "6",
    image: "imgs/6.png"
  },
  {
    name: "7",
    image: "imgs/7.png"
  },
  {
    name: "8",
    image: "imgs/8.png"
  }
];

// container for images is appended and array of images is concatenated to double up the images.
let gameBoard = arrayOfImages.concat(arrayOfImages);

// function to sort 8(16) cards randomly.
gameBoard.sort(() => 0.5 - Math.random());

let firstClick = "";
let secondClick = "";
let count = 0;
let wait = 800;

let lastClick = null;

const board = document.querySelector("[data-board]");
const imageContainer = document.createElement("section");
imageContainer.setAttribute("class", "boardy");
board.appendChild(imageContainer);

// loops through array of images to append to div
gameBoard.forEach(item => {
  // card elements are created with name
  const imageCard = document.createElement("div");
  imageCard.classList.add("memcard");
  imageCard.dataset.name = item.name;

  //   front card element created
  const frontOf = document.createElement("div");
  frontOf.classList.add("front");

  // back card element created
  const backOf = document.createElement("div");
  backOf.classList.add("back");
  backOf.style.backgroundImage = `url(${item.image})`;

  //   imageCard.style.backgroundImage = `url(${item.image})`;
  imageContainer.appendChild(imageCard);
  imageCard.appendChild(frontOf);
  imageCard.appendChild(backOf);
});

const paired = () => {
  var chosen = document.querySelectorAll(".clicked");
  chosen.forEach(imageCard => {
    imageCard.classList.add("paired");
  });
};

// function to reset clicks
const resetClicks = () => {
  firstClick = "";
  secondClick = "";
  count = 0;

  let clicked = document.querySelectorAll(".clicked");
  clicked.forEach(imageCard => {
    imageCard.classList.remove("clicked");
  });
};

// an event listener for the game board
imageContainer.addEventListener("click", function(e) {
  // console.log('i clicked');
  let selected = e.target;
  //   only allow the div cards to be selected and
  //   not allow the same item to be selected
  if (
    selected.nodeName === "section" ||
    selected === lastClick ||
    selected.parentNode.classList.contains("clicked")
  ) {
    return;
  }
  // reset counter after 2 clicks
  if (count < 2) {
    count++;
    if (count === 1) {
      // the first click is assigned
      firstClick = selected.parentNode.dataset.name;
      console.log(firstClick);
      selected.parentNode.classList.add("clicked");
    } else {
      // the second click is assigned
      secondClick = selected.parentNode.dataset.name;
      console.log(secondClick);
      selected.parentNode.classList.add("clicked");
    }
    // as long as the first and second clicks are not empty
    // and the first click matches the second click
    // the paired function is called.
    if (firstClick !== "" && secondClick !== "") {
      if (firstClick === secondClick) {
        //   added a delay between resetting clicks and
        // matched pairs disappearing.
        setTimeout(paired, wait);
        setTimeout(resetClicks, wait);
      } else {
        setTimeout(resetClicks, wait);
      }
    }
    // set the previous clicked item as clicked
    lastClick = selected;
  }
});
