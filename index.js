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