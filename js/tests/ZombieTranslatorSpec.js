define(['Replacer', 'Rule', 'ZombieTranslator'], function(Replacer, Rule, ZombieTranslator) {

    describe("Zombie Translator", function() {
	//ZombieTranslator translator;
	var translator;
	beforeEach(function() {
	    translator = new ZombieTranslator();

	    translator.addRule(
		new Rule('rule #1, lower-case "r" at the end of words replaced with "rh"',
			 new Replacer(/r\b/g, 'rh'), new Replacer(/rh\b/g, 'r')));

	    //rule #1
	    translator.addRule(
		new Rule("#1", new Replacer(/[eE]/g, 'rr'), new Replacer(/rr/g, 'e')));

	    translator.addRule(
		new Rule('rule #5, "i" or "I" is replaced by "rrRr"',
			 new Replacer(/i/ig, 'rrRr'), new Replacer(/rrRr/g, 'i')));

	    // 6. "o" or "O" is replaced by "rrrRr"
	    translator.addRule(
		new Rule('rule #6, "o" or "O" is replaced by "rrrRr"',
			 new Replacer(/o/ig, 'rrrRr'), new Replacer(/rrrRr/g, 'o')));

	    // 7. "u" or "U" is replaced by "rrrrRr"
	    translator.addRule(
		new Rule('rule #7, "u" or "U" is replaced by "rrrrRr"',
			 new Replacer(/u/ig, 'rrrrRr'), new Replacer(/rrrrRr/g, 'u')));

	    // 8. "r" or "R' is replaced by "RR"
	    translator.addRule(
		new Rule('rule #8, "r" or "R" is replaced by "RR"',
			 new Replacer(/r/ig, 'RR'), new Replacer(/RR/g, 'r')));

	});

	it("should replace e with rr", function() {
	    expect(translator.zombify('eye')).toEqual('rryrr');
	});

	it("should replace e with rr", function() {
	    expect(translator.zombify('bigfureu')).toEqual('brrRrgfrrrrRrRRrrrrrrRr');
	});

        it('Terror -> TrrRRRRrrrRrrh', function() {
	    expect(translator.zombify('Terror')).toEqual('TrrRRRRrrrRrrh');
	});


    });

});
