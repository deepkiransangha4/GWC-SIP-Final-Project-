function saveName(){
	var elem = document.getElementById("name");
	
	
	sessionStorage.yourname = elem.value;
	
	
	console.log(sessionStorage.yourname);
} 

var friendship_points = 0

function add_5_points(){
		friendship_points +=5
}

function add_10_points(){
		friendship_points +=10
}