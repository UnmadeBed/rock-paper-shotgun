// 1.Create function called 'computerPlay that randomly returns either 'rock', 'paper', or 'shotgun'. Test with console.log().
function computerPlay() {
	//array of available hands to play
	const hand = ['rock', 'paper', 'shotgun'];
	// chosen hand using random int function to access random index of hand array.
	return hand[getRndInteger(0, 2)];
}

// Random int generator helper function
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const computerSelection = computerPlay();

// 2. Write function 'playRound' that takes two params 'playerSelection' and 'computerSelection', and then returns a string that declares the winner of the round like so: "You lose! Paper beats Rock.". NOTE: You are returning this result, not console.logging them. Make the playerSelection param case-insensitive.
// function playRound(playerSelection, computerSelection) {
//   prompt('')
// }

// 3. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.At this point you should be using console.log() to display the results of each round and the winner at the end.

// 4.
