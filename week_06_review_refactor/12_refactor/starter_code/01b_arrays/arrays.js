var firstName = "fred"; // variable holding a string

// VS

var stuff = ["first", "second", "third"]; 
/* variable holding an array of strings */

// Declare an empty array
var listOfItems = [];

// Declare the same array with items in it
var listOfItems = ["baseball", "football", "basketball", 21];
//listOfItems is a variables
//it contains an array

//We can access the items in an array by an index number
//The index number starts with 0
//Let's access the first item
//We use 0 inside of brackets to get the 1st item

console.log('The first item is ' + listOfItems[0]);
//this should output "baseball"
//we can mix and match any type of items that we store
//a string, number, or boolean
console.log('The fourth item is '+ listOfItems[3]);
//this should output "basketball"

// how many items are in the list
// use the method .length on the array
console.log('The list of items has ' + listOfItems.length + ' items');

// we can also loop over the list of items
// use forEach to iterate over each item
listOfItems.forEach(function(item, index){
	console.log('Item #' + (index) + ' is ' + item);
});

// this barely touches on all that arrays can do
// for more info
// http://www.w3schools.com/js/js_arrays.asp
// https://gamealchemist.wordpress.com/2013/05/01/lets-get-those-javascript-arrays-to-work-fast/
// http://eloquentjavascript.net/04_data.html

