var area = document.getElementById("main");
var button = document.createElement('div');
	button.innerHTML = '<button>Hello</button>';
	area.insertAdjacentElement('afterbegin', button);
