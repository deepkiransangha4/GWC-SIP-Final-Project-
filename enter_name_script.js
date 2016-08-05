function saveName(){
	var elem = document.getElementById("name");
	
	
	sessionStorage.yourname = elem.value;
	
	sessionStorage.friendship_points = 0

	console.log(sessionStorage.yourname);
} 


function add_3_shells(){
		sessionStorage.friendship_points +=3;
		console.log(sessionStorage.friendship_points);
}

function add_2_shells(){
		sessionStorage.friendship_points +=2;
		console.log(sessionStorage.friendship_points);
}

function add_1_shells(){
		sessionStorage.friendship_points +=1;
		console.log(sessionStorage.friendship_points);
}
function draw_shells(){
			console.log(sessionStorage.friendship_points);
	
	for (i = 0; i < sessionStorage.friendship_points; i++){
		var shell_pic = document.createElement("img"); 
		
		shell_pic.setAttribute('src', 'octopus1.png');
		document.body.appendChild(shell_pic);
}}
	
