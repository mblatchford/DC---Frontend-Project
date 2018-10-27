
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    // assigning setInterval to a variable means I can use the variable as the intervalID
    // clearInterval cancels intervals by ID
    let interval = setInterval(function () {
                      minutes = parseInt(timer / 60, 10)
                      seconds = parseInt(timer % 60, 10);
  
                      minutes = minutes < 10 ? "0" + minutes : minutes;
                      seconds = seconds < 10 ? "0" + seconds : seconds;
  
                      display.textContent = minutes + ":" + seconds;
                      // at timer end, game ends
                      if (--timer < 0 ){ 
                        // stop interval from repeating
                        clearInterval(interval);
                        // gameEnd
                        let loss = 'loss';
                        gameEnd(loss);
                      }
        
                  }, 1000);
  }
  

//  timer includes default if no parameter is passed
function timer (time = .5) {
    let minutes = 60 * time,
    display = document.querySelector('.timer');
    startTimer(minutes, display);
};