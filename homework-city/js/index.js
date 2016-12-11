//citipix js

//we need an input element, id, value
//we need a button

//on button click, run a function to change the background beased on the input
$("#submit-btn").click(changeBackground);


//define that function that runs when the button is clicked
//get that city name input from the input element
function changeBackground(){
	event.preventDefault();

	var cityInput = $("#city-type").val();

	console.log(cityInput);


	//"New York" or "New York city" or "NYC"
	if (cityInput == "NYC" || cityInput == "New York City" || cityInput == "New York"){
		//make the background of the page nyc.jpg
		$("body").css("background-image", "url(images/nyc.jpg)");
	} else if 
		//"San francisco" or "SF" or "Bay Area"
		(cityInput == "SF" || cityInput == "San Francisco" || cityInput == "Bay Area"){
		//make the background of the page sf.jpg
		$("body").css("background-image", "url(images/sf.jpg)");

	} else if 
		//"Austin" or "ATX"
		(cityInput == "ATX" || cityInput == "Austin"){
		//make the background of the page austin.jpg
		$("body").css("background-image", "url(images/austin.jpg)");

	} else if 
		//"Sydney" or "SYD"
		(cityInput == "SYD" || cityInput == "Sydney"){
		//make the background of the page sydney.jpg
		$("body").css("background-image", "url(images/sydney.jpg)");


	} else if 
		//"LA" or "LAX" of "Los Angeles"
		(cityInput == "LA" || cityInput == "LAX" || citiInput == "Los Angeles"){
		//make the background of the page austin.jpg
		$("body").css("background-image", "url(images/la.jpg)");
	
	} else {
		//if cityInput does not equal any of the above, make it show the default background
		$("body").css("background-image", "url(images/citipix_skyline.jpg)")
	}

}