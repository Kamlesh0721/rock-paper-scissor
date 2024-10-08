// Rock : 0 | Paper : 1 | Scissor : 2
const scoreBoard = {
    win: 0,
    loose: 0,
    tie: 0,
    win_streak: 0,
  };

  let winning_streak = false;
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  function calcResult(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
      return -1;
    } else if (
      (computerChoice === "rock" && userChoice === "paper") ||
      (computerChoice === "paper" && userChoice === "scissor") ||
      (computerChoice === "scissor" && userChoice === "rock")
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  function playGame(computerChoice, userChoice) {
    let result = calcResult(computerChoice, userChoice);
    let textResult="";
    if (result === -1) {
      scoreBoard.tie = scoreBoard.tie + 1;
      winning_streak = false;
      textResult="tie";
    } else if (result === 0) {
      scoreBoard.loose = scoreBoard.loose + 1;
      winning_streak = false;
      scoreBoard.win_streak = 0;
      textResult="Loose";
    } else {
      scoreBoard.win = scoreBoard.win + 1;
      scoreBoard.win_streak = scoreBoard.win_streak + 1;
      textResult="Win";
    }

    updateScoreBoard(textResult);
  }

    
  function updateScoreBoard(textResult) {
    document.getElementById("win-score").textContent = scoreBoard.win;
    document.getElementById("loose-score").textContent = scoreBoard.loose;
    document.getElementById("tie-score").textContent = scoreBoard.tie;
    document.getElementById("win-streak").textContent =
      scoreBoard.win_streak;

    document.getElementById("result").textContent=textResult;
  }