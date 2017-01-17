
var output = document.Calculator.display.value;
var cleared = true;
var evaluated = false;

function numBtn(a) {

	if(evaluated) {
		btnClear();
		console.log('evaluated is true')
	}

	if(('' === output) && (a == '0') && cleared) {
		console.log('Display is clear!')
		return;
	}

	else {
		evaluated = false;
		cleared = false;
		document.Calculator.display.value += a;
	}
}

function division () {
	evaluated = false;
	document.Calculator.display.value +='/';
}

function multiplication () {
	evaluated = false;
	document.Calculator.display.value +='*';
}

function subtraction () {
	evaluated = false;
	document.Calculator.display.value +='-';
}

function addition () {
	evaluated = false;
	document.Calculator.display.value +='+';
}

function equals () {
	evaluated = true;
	document.Calculator.display.value = eval(document.Calculator.display.value);
	console.log('answer is: ' + document.Calculator.display.value);
}

function btnClear () {
	cleared = true;
	document.Calculator.display.value = "";
}

