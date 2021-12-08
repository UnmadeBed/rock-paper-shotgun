// 1.Create function called 'computerPlay that randomly returns either 'rock', 'paper', or 'shotgun'. Test with console.log().

// Random int generator helper function
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
	//array of available hands to play
	const hand = ['rock', 'paper', 'shotgun'];
	// hand chosen using random int function to access random index of hand array.
	return hand[getRndInteger(0, 2)];
}

// 2. Write function 'playRound' that takes two params 'playerSelection' and 'computerSelection', and then returns a string that declares the winner of the round like so: "You lose! Paper beats Rock.". NOTE: You are returning this result, not console.logging them. Make the playerSelection param case-insensitive.
function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection == 'rock' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'shotgun') ||
		(playerSelection == 'shotgun' && computerSelection == 'rock')
	) {
		return 'loss';
	} else if (
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'shotgun' && computerSelection == 'paper') ||
		(playerSelection == 'rock' && computerSelection == 'shotgun')
	) {
		return 'win';
	} else {
		return 'draw';
	}
}

// 3. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.At this point you should be using console.log() to display the results of each round and the winner at the end.
let playerScore = 0;
let computerScore = 0;

function game() {
	for (let i = 0; i < 5; i++) {
		// 1. prompt user to choose hand.
		let playerSelection = prompt(
			'Please choose rock, paper, or shotgun:'
		).toLowerCase();
		// 2. call computerPlay function to determine computer hand.
		let computerSelection = computerPlay();
		// 3. compare hands and decide on winner of round by calling playRound function and passing both hands in.
		let round = playRound(playerSelection, computerSelection);

		if (round == 'win') {
			playerScore += 1;
			console.log(
				`Congrats! ${playerSelection} beats ${computerSelection}`,
				playerScore,
				computerScore
			);
		} else if (round == 'loss') {
			computerScore += 1;
			console.log(
				`Oops. ${computerSelection} beats ${playerSelection}`,
				playerScore,
				computerScore
			);
		} else {
			console.log("It's a tie", playerScore, computerScore);
		}
	}
	if (playerScore > computerScore) {
		console.log('Congrats! You won this game!');
	} else if (computerScore > playerScore) {
		console.log('Sorry, you lost this round!');
	} else if (playerScore == computerScore) {
		console.log("It's a draw!");
	}
}
