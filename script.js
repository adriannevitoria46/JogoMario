alert("O melhor jogo do mundo");

const mario = document.querySelector('.Mario');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500);

}

document.addEventListener('keydown', jump);
