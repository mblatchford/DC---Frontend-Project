
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
                      // at timer end
                      if (--timer < 0 ){ 
                        // stop interval from repeating
                        clearInterval(interval);
                      }
        
                  }, 1000);
  }
  

//  timer begins on window load
//  does not currently link to any game functions
//  will need to be tied to future buttons instead of on window load

window.onload = function () {
    let minutes = 60 * .5,
    display = document.querySelector('.timer');
    startTimer(minutes, display);
};