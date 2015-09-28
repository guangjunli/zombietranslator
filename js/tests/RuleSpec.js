define(['Replacer', 'Rule'], function(Replacer, Rule) {

    describe("Rule 1", function() {

	it("should replace ab with c", function() {
	    var abReplacer = new Replacer(/ab/g, 'c');
	    var cReplacer = new Replacer(/c/g, 'ab');

	    //Rule rule1 = new Rule('ab to c', abReplacer, cReplacer);
	    rule1 = new Rule('ab to c', abReplacer, cReplacer);
	    expect(rule1.zombify('ababad')).toEqual('ccad');
	});


	it("zombie followed by unzombie should yield the original text", function() {
	    var abReplacer = new Replacer(/ab/g, 'c');
	    var cReplacer = new Replacer(/c/g, 'ab');

	    //Rule rule1 = new Rule('ab to c', abReplacer, cReplacer);
	    rule1 = new Rule('ab to c', abReplacer, cReplacer);
	    var originalText = 'ababad';
	    var zombieText = rule1.zombify(originalText);
	    var unzombieText = rule1.unzombify(zombieText);
	    expect(unzombieText).toEqual(originalText);
	});
    });
});
