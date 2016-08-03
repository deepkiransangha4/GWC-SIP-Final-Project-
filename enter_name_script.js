function saveName(){
	var elem = document.getElementById("name");
	var yourname = elem.value;
	window.name = elem.value;
	console.log(yourname);
	console.log(window.name);
}