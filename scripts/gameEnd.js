function gameEnd(end){
    if(end === "win"){
        //write new message, call modal, delete game
        let timer = document.querySelector('.timer');
        timer.textContent = "Time Remaining: " + "00:00";
        modalTextElement.textContent = "You're a winner!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";
        level++;


    }else if(end === "loss"){
        modalTextElement.textContent = "You're a loser!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";

    }

}