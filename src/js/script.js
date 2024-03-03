const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const themeMario = new Audio('./src/sounds/Overworld Theme - Super Mario World.mp3');
themeMario.volume = 0.5;
const marioDied = new Audio('./src/sounds/smb_mariodie.wav');
marioDied.volume = 0.5;
document.getElementById("nome-usu").innerHTML = "Nome do usuario: " + $[username];

const jump = () => {
    mario.classList.add('mario-jump');

    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500);
}

startButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const difficulty = document.getElementById("difficulty").value;


    if (difficulty === "easy") {
        pipe.style.animation = 'pipe-easy 1s infinite';
        window.location.href = `index.html?username=${username}&difficulty=${difficulty}`;
    }

    if (difficulty === "medium") {
        pipe.style.animation = 'pipe-medium 2s infinite';
        window.location.href = `index.html?username=${username}&difficulty=${difficulty}`;
    }

    if (difficulty === "hard") {
        pipe.style.animation = 'pipe-hard 5s infinite';
        window.location.href = `index.html?username=${username}&difficulty=${difficulty}`;
    }
});

let score = 0;

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '20px';

        themeMario.pause();





        marioDied.play();
        clearInterval(loop);
        return;
    } else {
        score++;

        themeMario.play();
        document.getElementById("score-display").innerHTML = "Score: " + score;
    }

}, 10);



document.addEventListener("keydown", jump);