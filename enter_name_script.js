function saveName(){
	var elem = document.getElementById("name");
	
	
	sessionStorage.yourname = elem.value;
	
	
	console.log(sessionStorage.yourname);
} 

var friendship_points = 0

function add_3_shells(){
		friendship_points +=3
}

function add_2_shells(){
		friendship_points +=2
}

function add_1_shells(){
		friendship_points +=1
}

for (i = 0; i < friendship_points; i++){
	var img = document.createElement("<img src='octopus1.png'>");
}
	