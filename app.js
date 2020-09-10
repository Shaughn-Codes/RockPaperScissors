
/*
Using constant vars for all my divs and span
values so we dont have to call them many times.
User Score and Computer Score are not constant because
they need to be update during the game.

*/


let usrScore = 0;
let compScore = 0;
const usrScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');



/*
This function store an array that represents
Rock(r) Paper(p) and Scissors(s)
then we call the math class to to randomize through the array
so it can call the computers choice
*/
function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];

}

/*
This functions converts the basic letters
into what they actually represent

*/

function convertToWord(letter) {
  if (letter === "r" ) return "Rock";
  if (letter === "p" ) return "Paper";
  if (letter === "s" ) return "Scissors";



}

/*
This functions is in charge of the winning operation
for the player. It up dates the players score each time they win.
it also displays a small tag to notify what the player chose and
what the compuer chose. As well as calling a "green glow" class that
glows green around the players selection when they win the round.
*/


function win(userChoice, computerChoice) {
  usrScore++;
  usrScore_span.innerHTML = usrScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord} . YOU WIN!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout( () => userChoice_div.classList.remove("green-glow") , 500);


}

/*
This functions is in charge of the losing operation
for the player. It up dates the computers score each time the player loses.
it also displays a small tag to notify what the player chose and
what the compuer chose. As well as calling a "red glow" class that
glows red around the players selection when they lose the round.
*/

function lose(userChoice, computerChoice) {
  compScore++;
  usrScore_span.innerHTML = usrScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallCompWord} . YOU LOST.. :(`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout( () => userChoice_div.classList.remove("red-glow") , 500);


}

function draw(userChoice,computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(computerChoice)}${smallCompWord} . ITS A DRAW!`;
  setTimeout(function () { userChoice_div.classList.remove("green-glow") }, 500);
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout( () => userChoice_div.classList.remove("gray-glow") , 500);

}


/*
This function is in charge of all the potential outcomes
of the match by using a switch statement and calling the
proper function.

*/
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
            win(userChoice, computerChoice);
            break;
    case "rp":
    case "ps":
    case "sr":
            lose(userChoice, computerChoice);
            break;
    case "rr":
    case "pp":
    case "ss":
          draw(userChoice, computerChoice);
          break;

  }

}


function main() {
rock_div.addEventListener('click', () =>  game("r"));

paper_div.addEventListener('click', () => game("p"));


scissors_div.addEventListener('click', () => game("s"));
}

main();
