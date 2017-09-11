var textfield;
var submit;
var clear;

function setup() {
	noCanvas();
	textfield = select("#word");
	submit = select("#submit");
	clear = select('#clear');
	clear.mousePressed(clearAll);
	submit.mousePressed(handleInput);
}

function handleInput() {
	process(textfield.value());
}