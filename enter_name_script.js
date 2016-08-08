function saveName(){
	var elem = document.getElementById("name");
	
	
	sessionStorage.yourname = elem.value;
	
	sessionStorage.friendship_points = 0
	


	console.log(sessionStorage.yourname);
} 


function add_3_shells(){
		var score = parseInt(sessionStorage.friendship_points);
		score +=3;
		console.log(score);
		sessionStorage.friendship_points = score;
		
}

function add_2_shells(){
		var score = parseInt(sessionStorage.friendship_points);
		score += 2 ;
		console.log(score);
		sessionStorage.friendship_points = score;
}

function add_1_shell(){
		var score = parseInt(sessionStorage.friendship_points);
		score +=1 ;
		console.log(score);
		sessionStorage.friendship_points = score;
}
function draw_shells(){
			console.log(sessionStorage.friendship_points);
	
	for (i = 0; i < sessionStorage.friendship_points; i++){
		var shell_pic = document.createElement("img"); 
		
		shell_pic.setAttribute('src', 'shell.png');
		shell_pic.setAttribute('style', 'width: 20px');
		document.getElementById("narrow").appendChild(shell_pic);
		//document.body.appendChild(shell_pic);
}}
function sayShells(){
	document.getElementById("shells").innerHTML = "You got "+sessionStorage.friendship_points+" shells!";
}
	
