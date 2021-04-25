// Score variables
let userScore = 0;
let computerScore = 0;
//storing DOM variables for future use
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const user_id = document.getElementById("user-label");
// get user name printed
function selectText () {
    let userInput = document.getElementById("text").value;
    user_id.innerText = userInput;
  }
// get computer choice
function getComputerMove(){
    let moves = ['rock','paper', 'scissors'];
    let randomNumber= Math.floor(Math.random() * 3);
    return moves[randomNumber];
}
// define win function
// update score and win message
function win(userMove, computerMove) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userMove} beats ${computerMove} . You WIN :) `;
}
// define lose function
function lose(userMove, computerMove) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userMove} loses to ${computerMove} . You LOST :(`;
}
// define draw function
function draw(userMove, computerMove) {
    result_p.innerHTML = `${userMove} the same as  ${computerMove} . It's a TIE `;
}
// check for a winner
function checkWinner(userMove){
    let computerMove = getComputerMove();
    switch (userMove + computerMove){
        //user wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userMove, computerMove);
            break;  
        //user loses
        case "rockpaper":
        case "paperscissors" :
        case "scissorsrock":
            lose(userMove, computerMove);
            break;
        // draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userMove, computerMove);
            break;
    }
}
function playGame() {
// event listeners for each button
rock_div.addEventListener('click', function() {
    checkWinner("rock");
})
paper_div.addEventListener('click', function(){
    checkWinner("paper");
})
scissors_div.addEventListener('click', function(){
    checkWinner("scissors");
})
}
playGame();