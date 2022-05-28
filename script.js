const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let randomNumber = Math.floor(Math.random() *20)

const message = $('.message')

const check = $('.btn.check')

let score = 20

let highScore = 0

console.log(check)

check.onclick = function () {
    console.log(score) 
    let guessNumber = $('.guess').value
    if (!guessNumber)
    {
        message.innerHTML = 'No number'
    }
    else if (guessNumber< randomNumber)
    {
        message.innerHTML = '📉 Too low'
        score = score -1
        $('.score').innerHTML = score
        console.log(score)
    }
    else if (guessNumber > randomNumber){
        message.innerHTML = '📈 Too high'
        score = score -1
        $('.score').innerHTML = score
        console.log(score)
    }
    else{
        message.innerHTML = '🎉 correct number'
        $('body').style.backgroundColor = '#60b347'
        highScore < score ? highScore = score : highScore      
        $('.highscore').innerHTML = highScore
        $('.number').innerHTML = randomNumber
    }

}

const again = $('.btn.again')

again.onclick = function(){
    $('body').style.backgroundColor = '#222'
    $('.number').innerHTML = '?'
    randomNumber = Math.floor(Math.random() *20)
    score = 20
    message.innerHTML = 'Start guessing...'
    $('.score').innerHTML = '20'
    $('.guess').value = '';
}