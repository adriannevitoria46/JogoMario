alert("O melhor jogo do mundo");

const mario = document.querySelector('.Mario');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500);
}
const loop = setInterval (() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition);


if(pipePosition <= 120){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;


}

},10);
document.addEventListener('keydown', jump);

