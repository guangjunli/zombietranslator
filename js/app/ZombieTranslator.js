define(['Rule'], function(Rule) {
    var ZombieTranslator = function() {
	this.rules = [];
    };

    ZombieTranslator.prototype.addRule = function(rule) {
	this.rules.push(rule);
    };

    ZombieTranslator.prototype.zombifyChainingRules = function(text) {
	var result = text;
	//for (rule in this.rules) { <== for iterating through keys of object
	var ruleCount = this.rules.length;
	for (var i=0; i<ruleCount; i++) {
	    var rule = this.rules[i];
	    //console.log(typeof rule);
	    result = rule.zombify(result);
	    //console.log("after applying rule " + rule.description + ": " + result);
	}
	return result;
    };

    ZombieTranslator.prototype.zombifyWithoutOverlappingRules = function(text) {

	function replaceSegment(remainingRules, resultToBeMatched) {

	    //console.log('result to match "' + resultToBeMatched + '"');

	    var currentRule = remainingRules.shift();

	    if (currentRule === undefined) {
		//console.log("no rule left, returning " + resultToBeMatched);
		return resultToBeMatched;
	    }

	    var lastMatchIndex;
	    var lastMatchLength;

	    var replacementText = '';
	    resultToBeMatched.replace(currentRule.zombifyReplacer.fromRegex, function() {
		var currentMatchLength = arguments[0].length;
		var currentMatchIndex = arguments[arguments.length-2];//<== lengt typo caused big trouble!!!

		if (currentMatchIndex >= lastMatchIndex + lastMatchLength) {

		}
		//unmatched part before the match
		var unmatchedIndex = 0;
		if (lastMatchLength) {
		    unmatchedIndex = lastMatchIndex + lastMatchLength;
		}
		//console.log('ci ' + currentMatchIndex + ' cl ' + currentMatchLength + ' pi ' + lastMatchIndex + ' pl ' + lastMatchLength);

		var unmatchedBefore = resultToBeMatched.substring(unmatchedIndex, currentMatchIndex);

		//console.log('unmatched before "' + unmatchedBefore + '"');

		//console.log('rep 1 "' + replacementText + '"');
		replacementText = replacementText + replaceSegment(remainingRules.slice(), unmatchedBefore);
    		//console.log('rep 2 "' + replacementText + '"');

		if (typeof currentRule.zombifyReplacer.toText === 'function') {
		    replacementText = replacementText + currentRule.zombifyReplacer.toText.apply(null, arguments);
		} else {
		    replacementText = replacementText + currentRule.zombifyReplacer.toText;
		}
		//console.log('rep 3 "' + replacementText + '"');

		lastMatchLength = currentMatchLength;
		lastMatchIndex = currentMatchIndex;

	    });

	    //last unmatch
	    var unmatchedAfter = resultToBeMatched.substring(lastMatchIndex + lastMatchLength);
	    replacementText = replacementText + replaceSegment(remainingRules.slice(), unmatchedAfter);

	    //console.log('rep 4 "' + replacementText + '"');
	    return replacementText;
	};

	return replaceSegment(this.rules.slice(), text);
    };

    ZombieTranslator.prototype.zombify = ZombieTranslator.prototype.zombifyWithoutOverlappingRules;
    
    return ZombieTranslator;
});
