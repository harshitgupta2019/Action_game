score = 0;
cross=true;
audiogo=new Audio('gameover.mp3');
audio= new Audio('music.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 150 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 150) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));


    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 93 && offsetY < 56) {
        gameOver.innerHTML = 'Game Over-Reload To Play Again';
        obstacle.classList.remove('obstacleAni');
        score=0;
        updateScore(score);
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.2;
            obstacle.style.animationDuration = newDur +'s';
          
        }, 500);
        }
}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}