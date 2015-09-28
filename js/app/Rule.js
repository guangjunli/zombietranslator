define(['Replacer'], function(Replacer) {
    var Rule = function(description, zombifyReplacer, unzombifyReplacer) {
	this.description = description;
	this.zombifyReplacer = zombifyReplacer;
	this.unzombifyReplacer = unzombifyReplacer;
    };


    Rule.prototype.zombify = function(text) {
	return this.zombifyReplacer.replaceIn(text);
    };

    Rule.prototype.unzombify = function(text) {
	return this.unzombifyReplacer.replaceIn(text);
    };

    return Rule;
});
