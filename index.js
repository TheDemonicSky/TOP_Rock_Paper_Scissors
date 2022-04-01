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
	// All the playerSelection == rock cases
	if (playerSelection == 'rock' && computerSelection == 'paper') {
		console.log('Computer Wins');
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		console.log('Player Wins');
	} else if (playerSelection == 'rock' && computerSelection == 'rock') {
		console.log('Draw');
	}

	// All the playerSelection == paper cases
	else if (playerSelection == 'paper' && computerSelection == 'paper') {
		console.log('Draw');
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		console.log('Computer Wins');
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		console.log('Player Wins');
	}

	//All the playerSelection == scissors cases
	else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		console.log('Player Wins');
	} else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
		console.log('Draw');
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		console.log('Computer Wins');
	}

	else {
		console.log('Not a valid input');
	}
}

let playerInput = window.prompt('Rock, Paper or Scissors');
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();
console.log(`Computer Chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));