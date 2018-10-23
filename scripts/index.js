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
const board = document.querySelector("[data-board]");
const imageContainer = document.createElement("div");
imageContainer.setAttribute("class", "boardy");
board.appendChild(imageContainer);

// loops through array of images to append to div
gameBoard.forEach(item => {
  const imageCard = document.createElement("div");
  imageCard.classList.add("memcard");
  imageCard.dataset.name = item.name;
  imageCard.style.backgroundImage = `url(${item.image})`;
  imageContainer.appendChild(imageCard);
});

// function to randomize 8 cards

// function to display 8 cards

// function that allows only 2 cards to be selected at a time

// function that when 2 cards are matched, those cards are kept visible

// function to reset guess counter after 2 guesses
