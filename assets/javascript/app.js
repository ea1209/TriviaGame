$(document).ready(function(){
  

$("#start").on("click",start);
$("#submit").on("click",submit);

var time = 11;
var right = 0;
var wrong = 0; 

function start () {
time = 11;
counter = setInterval(timer,1000);

}



function timer () {

time--
$("#time").html("Time Remaining: " + time);

	if (time === 0)	{
		clearInterval(counter);
	}
}

function submit () {

	$("#right").html("Right: " + right);
	$("#wrong").html("Wrong: " + wrong);

	console.log($('input[name="q1"]:checked')[0].nextSibling.innerText);
	console.log($('input[name="q2"]:checked')[0].nextSibling.innerText);
	console.log($('input[name="q3"]:checked')[0].nextSibling.innerText);
	console.log($('input[name="q4"]:checked')[0].nextSibling.innerText);
	console.log($('input[name="q5"]:checked')[0].nextSibling.innerText);
	
	if ($('input[name="q1"]:checked')[0].nextSibling.innerText === "Derick Rose") {

		right ++; 

	}

	else {
		wrong --; 
	}
}


//Finish Submit
//add right and wrong section
//add right and wrong counter
//add an if statement for each question 

})