$(document).ready(function(){

	//setting a variable
	var numberTotal = 0;

	//when a button is clicked do math

	//button0 zeroes out the number
		//get the button via jquert, set the click
		$("#zero").click(zeroClick);


	//buttin +5 adds 5
		//get the button via jquert, set the click
		$("#add5").click(add5Click);

		function add5Click(){
			numberTotal = numberTotal + 5;
			$("#result").text(numberTotal);
		}

	//button +10 adds 10
		//get the button via jquery, set the click

		$("#add10").click(add10Click);

		function add10Click(){
			numberTotal = numberTotal + 10;

			$("#result").text(numberTotal);
		}


	//buttin -1 subtracts 1
		//get the button via jquert, set the click

		$("#sub1").click(sub1Click);

		function sub1Click(){
			numberTotal = numberTotal - 1;

			$("#result").text(numberTotal);
		}

	//function for zero button
		//make value zero
		function zeroClick(){
			//make value 0
			numberTotal = 0;
			$("#result").text(numberTotal);
		}


});