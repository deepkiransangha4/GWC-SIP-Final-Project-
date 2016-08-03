function saveName(){
	var elem = document.getElementById("name");
	var name = elem.value;
	console.log(name);
	document.getElementById("printName").innerHTML = "Your name is "+name;
}