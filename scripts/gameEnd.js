function gameEnd(end){
    if(end === "win"){
        //write new message, call modal, delete game
        modalElement.textContent = "You're a winner!"; 
        modalElement.classList.toggle('modal-hidden');

    
    }else if(end === "loss"){
        modalElement.textContent = "You're a loser!"; 
        modalElement.classList.toggle('modal-hidden');

    }

}