function gameEnd(end){
    if(end === "win"){
        //write new message, call modal, delete game
        modalTextElement.textContent = "You're a winner!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";

    }else if(end === "loss"){
        modalTextElement.textContent = "You're a loser!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";

    }

}