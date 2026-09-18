alert("JavaScript funcionando!");
const mario = document.querySelector('.Mario');

const jump = ()=>{
mario.classList.add('jump');{
document.classList.remove('jump')
}

mario.addEventListener('keydown', jump)
}