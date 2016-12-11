//code to convert

//conversion
//Multiply by 9, then divide by 5, then add 32

//create a var to store the faranheight temp

//find selector for celcius temp, and assign the value to the var
function getCurrenttemp(num){
	return num * 9 / 5 + 32;
}
//create the function that will do the math on the value entered
function convertTemp(){

	//create a var to store the celcius temp
	var celciusTemp = $("#temp_celcius").val();

	celciusTemp = parseInt(celciusTemp);
	var farenheightTemp  = getCurrenttemp(celciusTemp);

	//return the conversion for celcius to temp

	console.log(celciusTemp);
	//output farenheight temp onto the page
}

//click convert button and run the temp conversion
$("#submit").click(convertTemp);



