// Iteration 5: Store the player score and display it on the game over screen
let realScore = document.getElementById('score-box')
let play = document.getElementById('play-again-button')
let score = localStorage.getItem("score")

realScore.innerHTML += score;
play.onclick = () => {
    location.href = 'game.html'
}