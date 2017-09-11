Array.prototype.choice = function() {
	var i = floor(random(this.length));
	return this[i];
}

var paragraphs = [];

function process(word) {
	var text = textinput.value();
	var words = splitTokens(text, ' .,:;!@#$%&*()\n');

	var p = createP('');
	p.class("text");
	paragraphs.push(p);

	for (var i = 0; i < word.length; i++) {
		var c = word.charAt(i);
		var div = createDiv("");
		div.parent(p);
		askForText(div, c);
	}

	function askForText(elmnt, c) {
		var pickWords = [];
		for (var i = 0; i < words.length; i++) {
			if (words[i].charAt(0) === c) {
				pickWords.push(words[i]);
			}
		}

		var word = pickWords.choice();

		if (!select("#highlight").checked()) {
			elmnt.html(word);
		} else {
			for (var i = 0; i < word.length; i++) {
				var span = createSpan(word.charAt(i));
				span.parent(elmnt);
				if (i == 0) {
					span.class("firstletter");
				}
			}
		}
	}
}

function clearAll() {
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].remove();
	}
	paragraphs = [];
}