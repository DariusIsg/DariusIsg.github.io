var currentPlayer = 1;	//current plyer 1 or 2
var plays = 0;	//number of turns or plays
var wins = 0;	//shows if the game has been won yet
var board = document.querySelector("#board");	//pointer to the form
var popup = document.querySelector("#popup");	//pointer to the form

board.b1.addEventListener("click",takeTurn);
board.b2.addEventListener("click",takeTurn);
board.b3.addEventListener("click",takeTurn);
board.b4.addEventListener("click",takeTurn);
board.b5.addEventListener("click",takeTurn);
board.b6.addEventListener("click",takeTurn);
board.b7.addEventListener("click",takeTurn);
board.b8.addEventListener("click",takeTurn);
board.b9.addEventListener("click",takeTurn);

function takeTurn() {
	if(wins == 0){
		if(currentPlayer == 1 && this.value == ""){
			this.value = "X";
			this.style.color = "red";
			currentPlayer++;
			plays++;
			if(plays >=5){
				checkWin();
			}//if
		}
		else if(currentPlayer == 2 && this.value == ""){
			this.value = "O";
			this.style.color = "blue";
			currentPlayer--;
			plays++;
			if(plays >=5){
				checkWin();
			}
		}
	}
	console.log("plays = " + plays);
}

function checkWin() {

	if(board.b1.value == board.b2.value && board.b1.value == board.b3.value && board.b1.value != ""){
		winner = board.b1.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b4.value == board.b5.value && board.b4.value == board.b6.value && board.b4.value != ""){
		winner = board.b4.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b7.value == board.b8.value && board.b7.value == board.b9.value && board.b7.value != ""){
		winner = board.b7.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b1.value == board.b4.value && board.b1.value == board.b7.value && board.b1.value != ""){
		winner = board.b1.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b2.value == board.b5.value && board.b2.value == board.b8.value && board.b2.value != ""){
		winner = board.b2.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b3.value == board.b6.value && board.b3.value == board.b9.value && board.b3.value != ""){
		winner = board.b3.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b1.value == board.b5.value && board.b1.value == board.b9.value && board.b1.value != ""){
		winner = board.b1.value;
		announceWin(winner);
		wins++;
	}
	else if(board.b3.value == board.b5.value && board.b3.value == board.b7.value && board.b3.value != ""){
		winner = board.b3.value;
		announceWin(winner);
		wins++;
	}
	else if(plays == 9){
		winner = null;
		announceWin(winner);
		wins++;
	}
	
}//checkWin

function announceWin(winner) {
	if(currentPlayer == 2 && winner == "X"){
		document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="x button" id="x"><h2>X player is the winner!</h2>';
		document.querySelector("#x").addEventListener("click",hidePopup);
	
	}//if
	if(currentPlayer == 1 && winner == "O"){
	document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="x button" id="x"><h2>O player is the winner!</h2>';
	document.querySelector("#x").addEventListener("click",hidePopup);
	}
	document.querySelector("#container").style.display = "flex";
}

document.querySelector("#x").addEventListener("click",hidePopup);

function hidePopup(){
		document.querySelector("#container").style.display = "none";
}

//alert("the current player is " + currentPlayer);