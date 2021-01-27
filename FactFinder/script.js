var f = document.querySelector('form');
var fb = document.querySelector("#factbox");


//add event listeners (x5) here:
f.fact1.addEventListener("click", factOne)
f.fact2.addEventListener("click", factTwo)
f.fact3.addEventListener("click", factThree)
f.fact4.addEventListener("click", factFour)
f.fact5.addEventListener("click", factFive)

//functions all below here:

function factOne(){
	
	fb.innerHTML = "<h4>In 1989, during a barter between Pepsi and the government of the Soviet Union, Pepsi became a middleman for selling a large number of warships for scrap.</h4>";
	//fact output;
	
}//end of factOne

function factTwo(){
	
	fb.innerHTML = "<h4>This picture contains a bowl of soup.</h4><img src='images/pexels-photo-750827.jpeg' alt='Soup'>";
	//fact output;
	
}//end of factTwo

function factThree(){
	
	fb.innerHTML = "<h4>Charles Lindberg wasn't actually the first person to fly across the Atlantic - that honour befel to englishmen John Alcock and Arthur Brown.</h4><img src='images/istockphoto-156705680-170667a.jpg' alt='John Alcock and Arthur Brown'>";
	//fact output;
	
}//end of factThree

function factFour(){
	
	fb.innerHTML = "<h4>An aquarium is actually a submarine for fish.</h4>";
	//fact output;
	
}//end of factFour

function factFive(){
	
	fb.innerHTML = "<h4>This final week of the quarter is going to kill me... maybe.</h4>";
	//fact output;
	
}//end of factFive