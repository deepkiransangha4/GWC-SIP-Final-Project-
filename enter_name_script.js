function saveName(){
	var elem = document.getElementById("name");
	
	
	sessionStorage.yourname = elem.value;
	
	
	console.log(sessionStorage.yourname);
}