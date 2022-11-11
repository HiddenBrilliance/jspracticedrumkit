
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//chooses audio based on keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//chooses class "key" and provides keycode
    if (!audio) return; //stops function from firing
    audio.currentTime = 0 // rewinds to the start
    audio.play()
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return //skips if not transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound) // listens for key press
