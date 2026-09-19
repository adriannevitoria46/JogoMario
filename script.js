const mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');


// =========================
//          PULO
// =========================

const jump = () => {

    if (mario.classList.contains('jump')) {
        return;
    }

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
};

document.addEventListener('keydown', jump);


// =========================
//         COLISÃO
// =========================

const collisionCheck = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom
        .replace('px', '');


    if (
        pipePosition <= 120 &&
        pipePosition > 0 &&
        marioPosition < 80
    ) {

        // Para o cano
        pipe.style.animation = 'none';

        pipe.style.left = `${pipePosition}px`;


        // Para o Mario
        mario.style.animation = 'none';

        mario.style.bottom = `${marioPosition}px`;


        // Mostra o GAME OVER
        gameOver.style.display = 'flex';


        // Para a verificação da colisão
        clearInterval(collisionCheck);
    }

}, 10);


// =========================
//     JOGAR NOVAMENTE
// =========================

function restartGame() {

    window.location.reload();

}