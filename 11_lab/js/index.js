//rock paper sissors

//we need a variable for player one and the bot player

var playerOne = 0;
var botPlayer = 0;

//we need variables to hold the actual score
var playerScore = 0;
var botScore = 0;

//we need to have variables for each players score

var choices = ["rock", "paper", "scissors"];

//we need to assign the clicked choice to the player
$(".choice").click(function(){
	playerOne = $(this).attr("id");
	botPlayer = choices[Math.floor(Math.random() * choices.length)];
	compareScore(playerOne, botPlayer);
});

//we need a function to compare rock, paper and siccors to understand which beats which
function compareScore(playerOne, botPlayer){

	console.log(playerOne, botPlayer);

//rock and paper
	if(playerOne == "rock" && botPlayer == "paper") {
		//paper beats rock so botPlayer wins
		$("#botScore").text(botScore++);
		$("#resultText").text("You lose, sucka!!");


		} else if 
			(playerOne == "paper" && botPlayer == "rock") {
				//paper beats rock so player one wins
				$("#playerScore").text(playerScore++);
				$("#resultText").text("Bam! You Win!");

//rock and scissors

		} else if 
			(playerOne == "scissors" && botPlayer == "rock") {
				//rock beats scissors do bot wins
				$("#botScore").text(botScore++);
				$("#resultText").text("You lose, sucka!!");

		} else if
			(playerOne == "rock" && botPlayer == "scissors") {
				//rock beats scissors so player one wins
				$("#playerScore").text(playerScore++);
				$("#resultText").text("Bam! You Win!");


//paper and scissors

		} else if 
			(playerOne == "paper" && botPlayer == "scissors") {
				//rock beats scissors do bot wins
				$("#botScore").text(botScore++);
				$("#resultText").text("You lose, sucka!!");

		} else if
			(playerOne == "scissors" && botPlayer == "paper") {
				//rock beats scissors so player one wins
				$("#playerScore").text(playerScore++);
				$("#resultText").text("Bam! You Win!");



		} else if 
			(playerOne == botPlayer){
				//if its a tie, show tie
				$("#resultText").text("It's a Tie!");

		} else{
			$("#resultText").text("Hmm, something went wrong...")
		}

}
//we need a function to see if the 2 are the same variable (i.e. rock - rock)

//we need a function to take the result of the comparison function and apply it to the score

