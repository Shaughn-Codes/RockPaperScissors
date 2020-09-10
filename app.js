let usrScore = 0;
let compScore = 0;
const usrScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];

}

function convertToWord(letter) {
  if (letter === "r" ) return "Rock";
  if (letter === "p" ) return "Paper";
  if (letter === "s" ) return "Scissors";



}

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
