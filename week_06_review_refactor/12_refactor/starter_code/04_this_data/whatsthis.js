
function playGame(){
	//use the keyword this inside of our jquery selector
	//to see what this is pointing to

	var selectedButton = $(this);
	console.log('selected element', selectedButton);
	// what we can see is that this is a strange object
	// in the console.  Essentially, it is the button itself
	// that we selected, passed into here

	// we can select attributes off the button or
	// use the html5 "data" method to select our 
	// instrument choice

	// the data method slices out of the name anything before
	// the first dash, so that you can use multiple data elements on 
	// a single html element
	var instrument = $(this).data('instrument');
	console.log('selected instrument', instrument);

	// build the rest of the program
}

// we are reacting to one of the 3 buttons that have been clicked
// we don't yet know which button was clicked
// but we can find out in the playGame function
$('.chooser').click(playGame);