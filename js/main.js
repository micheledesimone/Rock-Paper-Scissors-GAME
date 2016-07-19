// choose between ROCK PAPER & SCISSORS
// display your result
// choose a random result for the PC
// display his result
// declare the winner

/*jshint devel:true */

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function showImg(id) {

	if (id.className === "hide") {
		id.className = "";
	} else {
		id.className = "hide";
	}
}

function game() {

	//set all the images hide
	var allImages = document.querySelectorAll("img");

	for (var i = 0; i< allImages.length; i++) {
		allImages[i].className = "hide";
	}

	//How the computer makes his random choice
	var computerChoice = Math.random();

	if (computerChoice <= 0.34) {
		computerChoice = "rock-pic2";
	} else if(computerChoice > 0.34 && computerChoice <= 0.67) {
		computerChoice = "paper-pic2";
	} else {
		computerChoice = "scissors-pic2";
	}

	var userChoice = this.attributes["data-img"].value;
	// var picUser = document.getElementById(userChoice);
	// var picComp = document.getElementById(computerChoice);

	//call the function to display the result
	showImg(document.getElementById(userChoice));
	showImg(document.getElementById(computerChoice));


	//satement to declaire the winner
	var result = document.getElementById("winner");

	if (userChoice.length === computerChoice.length) {
        result.innerHTML = "The result is a tie!";
        
    } else if (userChoice === "rock-pic1") {
    
        if (computerChoice === "scissors-pic2") {
            result.innerHTML = "rock wins";
        } else {
            result.innerHTML =  "paper wins";
        }
        
    } else if (userChoice === "paper-pic1") {
        
        if (computerChoice === "rock-pic2") {
            result.innerHTML =  "paper wins";
        } else {
            result.innerHTML =  "scissors wins";
        }
    }  else if (userChoice === "scissors-pic1") {
        
        if (computerChoice === "rock-pic2") {
            result.innerHTML =  "rock wins";
        } else {
            result.innerHTML =  "scissors wins";    
        }
    }
	
}

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);



