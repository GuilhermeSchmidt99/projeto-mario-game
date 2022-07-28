const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const coin = document.querySelector('.coin');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');  
    }, 500);
}


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft; 
    const coinPosition = coin.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        coin.style.animation = 'none';
        coin.style.left = `${coinPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './_images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clearInterval(loop);
 
    }
}, 10);


   
document.addEventListener('keydown', jump);
