function gameEnd(end){
    if(end === "win" && level != 2){
        //write new message, call modal, delete game
        let timer = document.querySelector('.timer');
        timer.textContent = "Time Remaining: " + "00:00";
        modalTextElement.textContent = "You're a winner!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";
        level++;
    }else if(end === "win" && level === 2){
        level = 1;
        let timer = document.querySelector('.timer');
        timer.textContent = "Time Remaining: " + "00:00";
        modalTextElement.textContent = "You've beaten the game!!!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";
        // game ending modal splash or transition different from the others?

    }else if(end === "loss"){
        modalTextElement.textContent = "You're a loser!"; 
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";

    }

}