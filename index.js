function game() {
	let compScore = 0;
	let playerScore = 0;
	for (let i = 0; i < 5; i++) {
		const playerSelection = playerInput();
		const computerSelection = computerPlay();
		console.log(`Computer Chose ${computerSelection}`);
		let roundWinner = playRound(playerSelection, computerSelection);
		if (roundWinner == 'computer') {
			compScore++;
		} else if (roundWinner == 'player') {
			playerScore++;
		};
	};
	if (compScore > playerScore) {
		console.log(`The computer won with a score of ${compScore}/5`);
	} else if (compScore < playerScore) {
		console.log(`The player won with a score of ${playerScore}/5`);
	} else {
		console.log('Draw')
	}
};

function computerPlay() {
	let randomInt = Math.floor((Math.random() * 3) + 1);
	let computerChoice;
	if (randomInt == 1) {
		computerChoice = 'rock';
	} else if (randomInt == 2) {
		computerChoice = 'paper';
	} else if (randomInt == 3) {
		computerChoice = 'scissors';
	}
	return(computerChoice);
}

function playRound(playerSelection, computerSelection) {
	let winner;
	// All the playerSelection == rock cases
	if (playerSelection == 'rock' && computerSelection == 'paper') {
		winner = 'computer';
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		winner = 'player';
	} else if (playerSelection == 'rock' && computerSelection == 'rock') {
		winner = 'draw';
	}

	// All the playerSelection == paper cases
	else if (playerSelection == 'paper' && computerSelection == 'paper') {
		winner = 'draw';
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		winner = 'computer';
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		winner = 'player';
	}

	//All the playerSelection == scissors cases
	else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		winner = 'player';
	} else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
		winner = 'draw';
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		winner = 'computer';
	}

	else {
		console.log('Not a valid input');
	}

	return(winner);
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playerInput() {
	let playerInput = window.prompt('Rock, Paper or Scissors');
	let playerSelection = playerInput.toLowerCase();
	return(playerSelection);
}

game();