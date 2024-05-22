//create username variable 
let username;

//create a function to store the username upon clicking the submit button
//using onclick on the submit button then gathering the text value from the username and storing it on my H2 tag 
//with welcome message 

document.getElementById('submit').onclick = function () {
    username = document.getElementById("text").value;
    document.getElementById('myH2').textContent = `Welcome ${username}`
}

//need to grab the elements by id and store them as constants as these do not change 
const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('.choices') //forgot to put . in front of choices as it is a class not an id

//need to use 'let' to use these anywhere in the document
let playerChoice
let computerChoice
let result

//have to separate the buttons with forEach method to be able to click each button separately
//for each choice button i want to add an event listener to do a function upon a click
//upon click will get the button id and save it as the player choice//need to grab inner html/text from player display and set
//it to equal as the playerChoice; to display the choice of the player on the screen

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerText = `${username}'s Choice: ${playerChoice}`
    addComputerChoice()
    checkWinner()
}));
//need a function for the computer choice to randomly pick a button based on button id possibly math.random
function addComputerChoice() {
    const randNum = Math.floor(Math.random() * 3)+1; //had to add +1 because it let computer choice always say undefined
    if (randNum === 1) {
        computerChoice = 'rock'
    }
    if (randNum === 2) {
        computerChoice = 'paper'
    }
    if (randNum === 3) {
        computerChoice = 'scissors'
    }
    //have to display computer choice as well to see computer's choice
    computerChoiceDisplay.innerText = `Computer Choice: ${computerChoice}`
}

//game logic (review tic tac toe logic as guide)
    //do innerHTML for the result to display on the screen under result 
    function checkWinner() {
        if (playerChoice === computerChoice) {
            result = 'It is a Tie!';
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            result = 'Computer Wins!';
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            result = 'You Win!';
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            result = 'You Win!';
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') { //had a space in front pof ' paper' = undefined
            result = 'Computer Wins!';
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            result = 'Computer Wins!';
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            result = 'You Win';
        }
        resultDisplay.innerText = result //forgot to add this and the result was not appearing on the screen
    }
//create function for reset button to start over with a new user 
// location.reload allows to reload the current URL like the Refresh button
//https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
function resetPage() {
    if (confirm('Are you sure you want to reset the game?'))
    {
        location.reload();
        }
}

