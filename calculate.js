function display(button_value) {
	document.getElementById("display").value += button_value;
}

function clear_all() {
	document.getElementById("display").value = "";
}

function delete_key() {
	let display_value = document.getElementById("display").value;
	document.getElementById("display").value = display_value.slice(0, -1);
}

function calculate() {
	try {
		let result = eval(document.getElementById("display").value);
		document.getElementById("display").value = result;
	} catch (error) {
		window.alert("Invalid input");
	}
}
