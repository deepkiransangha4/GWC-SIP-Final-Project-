function printName(){
	var elem = document.getElementById("test");
	elem.innerHTML = "Your name is: "+window.name+" "+sessionStorage.yourname;
}

function setAvatar(){
	sessionStorage.friendship_points = 0
	
	if (sessionStorage.avatar == 1){
		document.getElementById("avatar").src = "green_avatar.png";
	}else if (sessionStorage.avatar == 2){
		document.getElementById("avatar").src = "yellow_avatar.png";
	}else{
		document.getElementById("avatar").src = "purple_avatar.png";

	}
}