$( document ).ready(function(){
	//setting a variable
	var total = 0;
	
	function doMath(){
		var buttonId = $(this).attr("id");
		var operation = $(this).data("operation");
		switch (operation) {
		    case "+":
		        total = total + parseInt(buttonId);
		        break;
		    case "-":
		        total = total - parseInt(buttonId);
		        break;
		    case "reset":
		        total = 0;
		        break;
			}
		$('#result').text(total);
	}

	//when a button is clicked, do math
	$(".math").click(doMath);

});