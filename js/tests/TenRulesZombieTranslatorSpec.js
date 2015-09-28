define(['Replacer', 'Rule', 'TenRulesZombieTranslator'], function(Replacer, Rule, TenRulesZombieTranslator) {
    describe("10 Rules Zombie Translator", function() {
	//ZombieTranslator translator;
	var translator;
	beforeEach(function() {
	    translator = new TenRulesZombieTranslator();

	});

	it('should replace lower-case "r" at the end of words with "rh"', function() {
	    expect(translator.zombify('better')).toEqual('brrttrrrh');
	});

	it('should replace an "a" or "A" by itself with "hra"', function() {
	    expect(translator.zombify('throw a ball')).toEqual('thRRrrrRrw hra bhrall');
	});


	xit('should capitalize starts of sentences', function() {
	    expect(translator.zombify('first. second. Third')).toEqual('first. Srrcond. Third');//TODO f-->F
	});

	it('should capitalize starts of sentences', function() {
	    expect(translator.zombify('first. second. Third? fourth')).toEqual('frrRrRRst. SrrcrrrRrnd. ThrrRrRRd? FrrrRrrrrrRrRRth');//TODO f-->F
	});

	it('should replace e or E with rr', function() {
	    expect(translator.zombify('Elephant')).toEqual('rrlrrphhrant');
	});

    });


    describe("10 Rules Zombie Translator - sample tests", function() {
	//ZombieTranslator translator;
	var translator;
	beforeEach(function() {
	    translator = new TenRulesZombieTranslator();

	});

	it('Terror -> TrrRRRRrrrRrrh', function() {
	    expect(translator.zombify('Terror')).toEqual('TrrRRRRrrrRrrh');
	});

        it('JaZahn -> JhraZhrahn', function() {
	    expect(translator.zombify('JaZahn')).toEqual('JhraZhrahn');
	});

        it('petty -> prrtty', function() {
	    expect(translator.zombify('petty')).toEqual('prrtty');
	});

        it('pretty -> pRRrrtty', function() {
	    expect(translator.zombify('pretty')).toEqual('pRRrrtty');
	});
        it('brains -> bRRhrarrRrns', function() {
	    expect(translator.zombify('brains')).toEqual('bRRhrarrRrns');
	});


	it('f. second', function() {
	    expect(translator.zombify('f. second? t')).toEqual('f. SrrcrrrRrnd? T');
	});

        it('r by itself', function() {
	    expect(translator.zombify('r')).toEqual('rh');
	});
    });

});
