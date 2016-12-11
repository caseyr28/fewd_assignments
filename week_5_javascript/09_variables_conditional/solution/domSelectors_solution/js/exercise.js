/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to 
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */
 function changeBlue(){
 	$("p").css("color", "blue");
 }
 $("#button1").click(changeBlue);
 


/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

function myName(){
	$("h2").text("Ryan");
}

 $("#button1").click(myName);



/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 */
function changeItem(){
	$(".falseFact").text("True Fact");
}

 $("#button1").click(changeItem);


/**
 * Question 4: 
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

function changeBackground(){
	$("body").css("background-color", "pink");
}

 $("#button2").click(changeBackground);



/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
function changeH2(){
	$("h2").css("color", "green");
}

 $("#button2").click(changeH2);


/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
function changeBlockquote(){
	$("blockquote").html("<span>no quote</span>")
}

 $("#button2").click(changeBlockquote);


/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */
function changeh1(){
	$("header h1").text("jQuery Ninja");
}

 $("#button3").click(changeh1);


/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */


/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */





