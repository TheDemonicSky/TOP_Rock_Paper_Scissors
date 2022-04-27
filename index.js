let computerScore = 0;
let playerScore = 0;

function scoreKeep(winner) {
	if (winner == 'computer') {
		computerScore++;
	} else if (winner == 'player') {
		playerScore++;
	}
	if (playerScore == 5 || computerScore == 5) {
		console.log(`${winner} is the first to reach 5 points!`);
		computerScore = 0;
		playerScore = 0;
	}
	scoreDisplay();
}

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

function playRound(playerSelection) {
	let winner;
	computerSelection = computerPlay();
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

	console.log(winner);
	scoreKeep(winner);
}

function scoreDisplay() {
	const scores = document.querySelector('#scores');

	const content = document.createElement('div');
	content.classList.add('content');
	content.textContent = `Computer: ${computerScore} Player: ${playerScore}`;

	scores.appendChild(content);
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
	playRound('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
	playRound('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
	playRound('scissors');
});