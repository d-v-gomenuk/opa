function setSettings() {		
	if (Modernizr.localstorage) {
		var favcolor = document.getElementById('favcolor').value;
		localStorage.setItem('bgcolor', favcolor);
	} else {
		alert('Увы и ах, но будущего нет.');
	}
}		
function applySetting() {
	if (localStorage.length != 0) {
		document.body.style.backgroundColor = localStorage.getItem('bgcolor');
		document.getElementById('favcolor').value = localStorage.bgcolor;
	} else {
		document.body.style.backgroundColor = '#FFFFFF';
		document.getElementById('favcolor').value = '#FFFFFF';
	}
}
function clearSettings() {
	localStorage.removeItem("bgcolor");
	document.body.style.backgroundColor = '#FFFFFF';
	document.getElementById('favcolor').value = '#FFFFFF';
	window.addEventListener('storage', storageEventHandler, false);
	function storageEventHandler(event) {
		applySetting();
	}
}
