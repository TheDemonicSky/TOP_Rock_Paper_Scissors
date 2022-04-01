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
	switch(playerSelection, computerSelection) {
		// All the playerSelection == rock cases
		case playerSelection == 'rock', computerSelection == 'paper':
			console.log('Computer Wins');
			break;
		case playerSelection == 'rock', computerSelection == 'scissors':
			console.log('Player Wins');
			break;
		case playerSelection == 'rock', computerSelection == 'rock':
			console.log('Draw');
			break;

		// All the playerSelection == paper cases
		case playerSelection == 'paper', computerSelection == 'paper':
			console.log('Draw');
			break;
		case playerSelection == 'paper', computerSelection == 'scissors':
			console.log('Computer Wins');
			break;
		case playerSelection == 'paper', computerSelection == 'rock':
			console.log('Player Wins');
			break;

		//All the playerSelection == scissors cases
		case playerSelection == 'scissors', computerSelection == 'paper':
			console.log('Player Wins');
			break;
		case playerSelection == 'scissors', computerSelection == 'scissors':
			console.log('Draw');
			break;
		case playerSelection == 'scissors', computerSelection == 'rock':
			console.log('Computer Wins');
			break;
	}
}

const playerSelection = 'rock'
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));