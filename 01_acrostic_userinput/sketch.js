var wordinput;
var textinput;
var submit;
var clear;
var spam;
var sample;
var dropZone;

function preload() {
	spam = loadStrings("spam.txt");
}

function setup() {
	noCanvas();
	wordinput = select("#word");
	textinput = select("#textinput");
	submit = select("#submit");
	clear = select('#clear');
	sample = select('#sample');
	clear.mousePressed(clearAll);
	submit.mousePressed(handleInput);
	sample.mousePressed(useSample);
	dropZone = select("#drop_zone");
	dropZone.dragOver(highlight);
	dropZone.drop(gotFile, unHighlight)

	spam = join(spam, "\n");
}

function highlight() {
	dropZone.style("background-color", "#AAA");
}

function unHighlight() {
	dropZone.style("background-color", "#FFF");
}

function gotFile(file) {
	textinput.value(file.data);
}

function useSample() {
	textinput.value(spam);
}

function handleInput() {
	process(wordinput.value());
}