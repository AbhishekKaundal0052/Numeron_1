// Iteration 2: Generate 2 random number and display it on the screen

var num1 = document.getElementById('number1')
var num2 = document.getElementById('number2')
num1.innerHTML = Math.round(Math.random() * 100)
num2.innerHTML = Math.round(Math.random() * 100)
console.log(num1)
console.log(num2)
// Iteration 3: Make the options button functional
let score = 0;
 document.getElementById('greater-than').addEventListener('click', function () {
    if (num1.innerHTML > num2.innerHTML) {
        score++;
        reset(timerValue)
        num1.innerHTML = Math.round(Math.random() * 100)
        num2.innerHTML = Math.round(Math.random() * 100)
        console.log(num1)
        console.log(num2)
    }
    else {
        location.href = 'gameover.html'
    }
})
document.getElementById('equal-to').addEventListener('click', function () {
    if (num1.innerHTML == num2.innerHTML) {
        score++;
        reset(timerValue)
        num1.innerHTML = Math.round(Math.random() * 100)
        num2.innerHTML = Math.round(Math.random() * 100)
    }
    else {
        location.href = 'gameover.html'
    }
})
document.getElementById('lesser-than').addEventListener('click', function () {
    if (num1.innerHTML < num2.innerHTML) {
        score++;
        reset(timerValue)
        num1.innerHTML = Math.round(Math.random() * 100)
        num2.innerHTML = Math.round(Math.random() * 100)
    }
    else {
        location.href = 'gameover.html'
    }
})

// Iteration 4: Build a timer for the game
var timer = document.getElementById('timer')
let time
var timerValue

function timerGame() {
    time = 5
    timer.innerText = 5
    timerValue = setInterval(function () {
        time--
        if (time == 0) {
            location.href = 'gameover.html'
        }
        timer.innerHTML = time
    }, 1000)
    localStorage.setItem("score", score)
}
function reset(timerValue) {
    clearInterval(timerValue)
    timerGame()
}
timerGame()