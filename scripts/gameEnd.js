function gameEnd(end) {
  if (end === "win") {
    //write new message, call modal, delete game
    let timer = document.querySelector(".timer");
    timer.textContent = "Time Remaining: " + "00:00";
    modalTextElement.textContent = "Congratulations, you won!";
    modalElement.classList.toggle("modal-hidden");
    document.querySelector("[data-board]").innerHTML = "";
  } else if (end === "loss") {
    modalTextElement.textContent = "Game Over";
    modalElement.classList.toggle("modal-hidden");
    document.querySelector("[data-board]").innerHTML = "";
  }
}
