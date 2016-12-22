$(document).ready(function(){

	$(".hamburger").removeClass("is-active");

	function openMenu(){
		var navVisible = $("nav").css("display");
		console.log(this);
		$("nav").fadeToggle("slow");


		$(this).toggleClass("is-active");


	}



	$(".hamburger").click(openMenu);

});