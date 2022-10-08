function playSound(e){
    console.log("keyCode:", e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)    // gets the audio tag with desired keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)    // gets the key tag with desired keycode

    if(!audio){     // Stops the funcion from running, if audio is null
        return;
    }
    audio.currentTime = 0;  // rewinds to the start of audio file (if the audio file is already playing, it will restart it)
    audio.play();
    key.classList.add('playing')    // give playing class to key tag.  Would be key.addClass('playing) in jquery
}

//Removing the playing class after transition is done
function removeTransition(e){
    if (e.propertyName !== 'transform'){    // skip if it's not a transform
        return
    }
    this.classList.remove('playing');       // "this" is key bc it's what we added the event listener to
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))     // when transition has ended

window.addEventListener('keydown', playSound)   // on keydown, playSound
