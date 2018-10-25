// a memory game that pulls images/sounds from an API. the user will match
// the face of the cards. 8 cards are randomized and displayed. only 2 cards
// may be selected at a time. after 2 cards are selected, cards flip back
// unless the cards are correct, in which case the cards stay visible.
// guess count is reset after 2 guesses.

function button() {
  getImages(queryStr, pageSize, numImages);
  // getSounds(queryStr,durationEnd,pageSize,numSounds);
}

function gameStart(dataObj) {
  const arrayOfImages = dataObj;
  // container for images is appended and array of images is concatenated to double up the images.
  let gameBoard = arrayOfImages.concat(arrayOfImages);

  // function to sort 8(16) cards randomly.
  gameBoard.sort(() => 0.5 - Math.random());

  let firstClick = "";
  let secondClick = "";
  let count = 0;
  let wait = 800;

  const board = document.querySelector("[data-board]");
  const tileContainer = document.createElement("section");
  tileContainer.setAttribute("class", "boardy");
  board.appendChild(tileContainer);

  // loops through array of images to append to div
  gameBoard.forEach(item => {
    // card elements are created with name
    const tile = document.createElement("div");
    tile.classList.add("memcard");
    tile.dataset.attr_name = item.attr_name;
    tile.dataset.attr_url = item.attr_url;
    tile.dataset.name = item.src;

    //   front card element created
    const frontOf = document.createElement("div");
    frontOf.classList.add("front");

    // back card element created
    const backOf = document.createElement("div");
    backOf.classList.add("back");
    backOf.style.backgroundImage = `url(${item.src})`;

    tileContainer.appendChild(tile);
    tile.appendChild(frontOf);
    tile.appendChild(backOf);
  });

  const paired = () => {
    let chosen = document.querySelectorAll(".clicked");
    chosen.forEach(tile => {
      tile.classList.add("paired");
    });
  };

  // function to reset clicks
  const resetClicks = () => {
    firstClick = "";
    secondClick = "";
    count = 0;

    let clicked = document.querySelectorAll(".clicked");
    clicked.forEach(tile => {
      tile.classList.remove("clicked");
    });
  };

  // an event listener for the game board
  tileContainer.addEventListener("click", function (e) {
    // console.log('i clicked');
    let selected = e.target;
    //   only allow the div cards to be selected and
    //   if there's a pair selected, the user cannot click
    //   the same tile again.
    if (
      selected.nodeName === "SECTION" ||
      selected.parentNode.classList.contains("clicked") ||
      selected.parentNode.classList.contains("paired")
    ) {
      return;
    }
    // reset counter after 2 clicks
    if (count < 2) {
      count++;
      if (count === 1) {
        firstClick = selected.parentNode.dataset.name;
        //   console.log(firstClick);
        selected.parentNode.classList.add("clicked");
      } else {
        secondClick = selected.parentNode.dataset.name;
        //   console.log(secondClick);
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
    }
  });
}
