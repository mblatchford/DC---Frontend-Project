function gameEnd(end){
    if(end === "win"){
        //write new message, call modal, delete game
        modalTextElement.textContent = "You're a winner!"; 
        modalElement.classList.toggle('modal-hidden');

    
    }else if(end === "loss"){
        modalTextElement.textContent = "You're a loser!"; 
        modalElement.classList.toggle('modal-hidden');
        let eraseBoard = document.querySelector('[data-board]');
        eraseBoard.remove();
    }

}