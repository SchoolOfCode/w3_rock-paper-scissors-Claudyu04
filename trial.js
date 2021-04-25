// let userChoice = "";
// let userChoice = prompt("Choose rock, paper, or scissors");
// let playagain = "Y";
// let computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if (computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }
// choice1 = userChoice;
// choice2 = computerChoice;
// while (playagain == "Y") {
//     function compare(choice1, choice2) {
//         if (choice1 == choice2) {
//             return ("It's a tie!");
//         }
//         if (choice1 == "rock") {
//             if (choice2 == "scissors") {
//                 return ("You win!");
//             } else {
//                 return ("computer wins!");
//             }
//         }
//         if (choice1 == "paper") {
//             if (choice2 == "rock") {
//                 return ("you win!");
//             } else {
//                 return ("computer wins!");
//             }
//         }
//         if (choice1 == "scissors") {
//             if (choice2 == "rock") {
//                 return ("computer wins!");
//             } else {
//                 return ("you win!");
//             }
//         }
//     }
//     document.write(compare(choice1, choice2));
//     document.write("<br>");
//     playagain = prompt("Do you want to play again, Y or N");
//     userChoice = prompt("Choose rock, paper, or scissors");
// }

// let playerMove = prompt ('Have a guess at Rock , Paper or Scissors:');
// let moves = ['Rock', 'Paper', 'Scissors'];
// let computerMove = moves[Math.floor(Math.random()*3)];
// console.log (computerMove);

// let userChoice = prompt ('Have a guess at Rock , Paper or Scissors:');
// let computerChoice = Math.random();

// if (computerChoice < 0.34){
//     computerChoice = "Rock";
// } else if (computerChoice <= 0.67){
//     computerChoice = "Paper";
// }else {
//     computerChoice = "Scissors"
// }
// console.log (computerChoice);

let playerMove = prompt ("Choose between rock,paper, scissors");
let moves = ['rock','paper', 'scissors'];
let computerMove = moves[Math.floor(Math.random() * 3)];
console.log(computerMove);
function checkWinner (playerMove, computerMove){
    if (playerMove === "rock" && computerMove === "scissors"){
        return 1;
    }
    if (playerMove === "rock" && computerMove === "rock"){
        return 0;
    }
    if (playerMove === "rock" && computerMove === "paper"){
        return -1;
    }
    if (playerMove === "paper" && computerMove === "scissors"){
        return -1;
    }
    if (playerMove === "paper" && computerMove === "rock"){
        return 1;
    }
    if (playerMove === "paper" && computerMove === "paper"){
        return 0;
    }
    if (playerMove === "scissors" && computerMove === "scissors"){
        return 0;
    }
    if (playerMove === "scissors" && computerMove === "rock"){
        return -1;
    }
    if (playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
}
let result = checkWinner(playerMove, computerMove);
console.log(result);
alert(result);

// let compScore = 0;
// let playerScore = 0;
// let rounds = 1;
// let compare = function(choice1, choice2){
//     if (choice1 === choice2){
//         return("The result is a tie!");
//     }
//     if(choice1 === "rock"){
//         if(choice2 === "scissors"){
//             playerScore++;
//             return("rock wins");
//         }
//         else{
//             compScore++;
//             return("paper wins");
//         }
//     }
//     if(choice1 === "paper"){
//         if(choice2 === "rock"){
//             playerScore++;
//             return ("paper wins");
//         }
//         else {
//             compScore++;
//             return ("scissors wins");
//         }
//     }
//     if(choice1 === "scissors"){
//         if(choice2 === "rock"){
//             compScore++;
//             return ("rock wins");
//         }
//         else {
//             playerScore++;
//             return ("scissors wins");
//         }
//     }
// };
// while(playerScore < 2 && compScore < 2 && rounds < 4){
//     console.log("** ROUND" + " " + rounds + " **\n");
//     let userChoice = prompt("Do you choose rock, paper or scissors?");
//     if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
//         console.log("You did not chose rock, paper or scissors!");
//     }
//     else {
//         console.log("You chose" + " " + userChoice);
//         let computerChoice = Math.random();
//         if (computerChoice <= 0.33){
//             computerChoice="rock";
//             console.log("The computer chose" + " " + computerChoice);
//         }
//         else if (computerChoice >= 0.67) {
//             computerChoice="scissors";
//             console.log("The computer chose" + " " + computerChoice);
//         }
//         else {
//             computerChoice="paper";
//             console.log("The computer chose" + " " + computerChoice);
//             }
//         console.log("\n" + compare(userChoice, computerChoice));
//     }
//     console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );
//     rounds++;
// }
// if (playerScore > compScore){
//     console.log("*******************\nYou win!\n*******************");
// }
// else if (playerScore < compScore){
//     console.log("*******************\nComputer wins!\n*******************");
// }
// else {
//     console.log("*******************\nIt's a gremlin tie!\n*******************");
// }