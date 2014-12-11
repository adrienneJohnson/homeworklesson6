alert("hi")

console.log("hi")

// document ready 
$(document) .ready( function (){

// show

$(".one") .show ();

//hide 

$(".two") .hide ();

//fade

$(".cat") .fadeOut (1000);
$(".cat") .fadeIn (1000);

//slide 

$(".cat") .slideUp (1000);
$(".cat") .slideDown (1000);

//click event

$(".cat") .click ( function () {
	alert("Stop it!");
})

//animate 

$(".painting") .animate ( {
	opacity: 0.25,
	width: "70%",
} , 5000) ;

})

