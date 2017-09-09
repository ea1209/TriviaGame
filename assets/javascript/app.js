$(document).ready(function(){
  

$("#start").on("click",start);
$("#submit").on("click",submit);

var time = 31;
var right = 0;
var wrong = 0; 



function start () {
time = 31;
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


	console.log($('input[name="q1"]:checked')[0].nextSibling.innerText);
	console.log($('input[name="q2"]:checked')[0].nextSibling.innerText);


	if ($('input[name="q1"]:checked')[0].nextSibling.innerText === "Kobe Bryant") {

		right ++; 

	}

			else {
			wrong ++; 
			}

	if ($('input[name="q2"]:checked')[0].nextSibling.innerText === "Derick Rose") {

		right ++; 

	}

			else {
			wrong ++; 
			}

	if ($('input[name="q3"]:checked')[0].nextSibling.innerText === "John Salley") {

		right ++; 

	}

			else {
			wrong ++; 
			}

	if ($('input[name="q4"]:checked')[0].nextSibling.innerText === "Amir Johnson") {

		right ++; 

	}

			else {
			wrong ++; 
			}

	if ($('input[name="q5"]:checked')[0].nextSibling.innerText === "Doc Rivers") {

		right ++; 

	}

			else {
			wrong ++; 
			}

	$("#right").html("Right: " + right);
	$("#wrong").html("Wrong: " + wrong);
}


//Finish Submit
//add right and wrong section
//add right and wrong counter
//add an if statement for each question 

})