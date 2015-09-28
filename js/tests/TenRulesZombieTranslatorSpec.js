define(['Replacer', 'Rule', 'TenRulesZombieTranslator'], function(Replacer, Rule, TenRulesZombieTranslator) {
    describe("Zombie translator configured with 10 rules - my own tests", function() {
	var translator;
	beforeEach(function() {
	    translator = new TenRulesZombieTranslator();

	});

	it('should replace lower-case "r" at the end of words with "rh"', function() {
	    expect(translator.zombify('better')).toEqual('brrttrrrh');
	    expect(translator.unzombify(translator.zombify('better'))).toMatch('better');
	});

	it('should replace an "a" or "A" by itself with "hra"', function() {
	    expect(translator.zombify('throw a ball')).toEqual('thRRrrrRrw hra bhrall');
	});


	it('should capitalize starts of sentences', function() {
	    expect(translator.zombify('first. second. Third')).toEqual('frrRrRRst. SrrcrrrRrnd. ThrrRrRRd');
	});

	it('should capitalize starts of sentences', function() {
	    expect(translator.zombify('first. second. Third? fourth')).toEqual('frrRrRRst. SrrcrrrRrnd. ThrrRrRRd? FrrrRrrrrrRrRRth');
	});

	it('should replace 123 with 213', function() {
	    expect(translator.zombify('123')).toEqual('213');
	});

	it('round trip should match original text ignoring case', function() {
	    expect(translator.unzombify(translator.zombify('bEtter'))).toMatch(/better/i);
	    expect(translator.unzombify(translator.zombify('Abcedf ;, e a, 31334321'))).toMatch(/Abcedf ;, e a, 31334321/i);
	});
	
    });


    describe("Zombie translator configured with 10 rules - tests from assignment spec", function() {
	var translator;
	beforeEach(function() {
	    translator = new TenRulesZombieTranslator();

	});

	it('Terror -> TrrRRRRrrrRrrh', function() {
	    expect(translator.zombify('Terror')).toEqual('TrrRRRRrrrRrrh');
	    //this is a demo of the imperfection of the rules: r->rh is applied in the unzombify
	    //process while it was never applied with the zombify process
	    expect(translator.unzombify(translator.zombify('Terror'))).not.toMatch(/Terror/i);
	});

        it('JaZahn -> JhraZhrahn', function() {
	    expect(translator.zombify('JaZahn')).toEqual('JhraZhrahn');
	    expect(translator.unzombify(translator.zombify('JaZahn'))).toMatch(/JaZahn/i);
	});

        it('petty -> prrtty', function() {
	    expect(translator.zombify('petty')).toEqual('prrtty');
	    expect(translator.unzombify(translator.zombify('petty'))).toMatch(/petty/i);
	});

        it('pretty -> pRRrrtty', function() {
	    expect(translator.zombify('pretty')).toEqual('pRRrrtty');
	    expect(translator.unzombify(translator.zombify('pretty'))).toMatch(/pretty/i);
	});
        it('brains -> bRRhrarrRrns', function() {
	    expect(translator.zombify('brains')).toEqual('bRRhrarrRrns');
	    //this is a demo of the imperfection of the rules: e->rr is applied in the unzombify
	    //process while it was never applied with the zombify process
	    expect(translator.unzombify(translator.zombify('brains'))).not.toMatch(/brains/i);
	});
    });

});
