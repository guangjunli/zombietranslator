define([], function() {
    var Replacer = function(fromRegex, toText) {
	this.fromRegex = fromRegex;
	this.toText = toText;
    };

    Replacer.prototype.replaceIn = function(text) {
	return text.replace(this.fromRegex, this.toText);
    };

    return Replacer;
});
