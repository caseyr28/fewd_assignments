$(document).ready(function(){

	//when button is clicked compare the numbers
	//output symbol
	function compareNumbers(){
		var first = $("#a").val();
		var second = $("#b").val();
		//compare the two and output accordingly
		if (first > second) {
			$("#comparison").text(">");
			} else if (first < second) {
				$("#comparison").text("<");
			} else if (first === second) {
				$("#comparison").text("===");
			}
		}

	}

	$("#submit").click(compareNumbers);


});