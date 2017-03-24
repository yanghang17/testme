function onshows(id) {
	if (id !== indexs) {document.getElementById("index").style.display = "none"};
	if (id !== about) {document.getElementById("about").style.display = "none"};
	if (id !== photos) {document.getElementById("photos").style.display = "none"};
	if (id !== live) {document.getElementById("live").style.display = "none"};
	if (id !== contact) {document.getElementById("contact").style.display = "none"};
	document.getElementById(id).style.display = "block"	
}
