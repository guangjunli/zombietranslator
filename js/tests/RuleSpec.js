define(['Replacer', 'Rule'], function(Replacer, Rule) {

    describe("Rules", function() {

	it("should yield the same original text when zombie followed by unzombie", function() {
	    var abReplacer = new Replacer(/ab/g, 'c');
	    var cReplacer = new Replacer(/c/g, 'ab');

	    var rule1 = new Rule('ab to c', abReplacer, cReplacer);
	    var originalText = 'ababad';
	    var zombieText = rule1.zombify(originalText);
	    var unzombieText = rule1.unzombify(zombieText);
	    expect(unzombieText).toEqual(originalText);
	});

	it("should not be instantiated when zombie or unzombie is not a Replacer function", function() {
	    var abReplacer = new Replacer(/ab/g, 'c');

	    expect(function() {
		var abcReplacer = new Replacer(/abc/g, 'c');
    		var rule1 = new Rule('ab to c', 'not-replacer', abcReplacer);
		abcReplacer.replaceIn('abc');
	    }).toThrow();

	    expect(function() {
		var abcReplacer = new Replacer(/abc/g, 'c');
    		var rule1 = new Rule('ab to c', abcReplacer, 'not-replacer');
		abcReplacer.replaceIn('abc');
	    }).toThrow();

	});
	
    });
});
