Array.prototype.choice = function() {
	var i = floor(random(this.length));
	return this[i];
}

var api = "http://api.wordnik.com:80/v4/words.json/search/";
var params = "?caseSensitive=true&minCorpusCount=1&maxCorpusCount=25&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&skip=1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var paragraphs = [];

function process(word) {
	var word = textfield.value();
	var p = createP('');
	p.class("text");
	paragraphs.push(p);

	for (var i = 0; i < word.length; i++) {
		var c = word.charAt(i);
		var div = createDiv("");
		div.parent(p);
		askWordnik(div, c);
	}

	function askWordnik(elmnt, c) {
		var url = api + c + params;
		loadJSON(url, gotData);

		function gotData(data) {
			var words = data.searchResults;
			var word = pickWord(words);

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
			//elmnt.class("firstletter");
		}
	}
}

function clearAll() {
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].remove();
	}
	paragraphs = [];
}

function pickWord(words) {
	var wordobj = random(words);
	return wordobj.word;
}