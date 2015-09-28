define(['Replacer', 'Rule', 'ZombieTranslator'], function(Replacer, Rule, ZombieTranslator) {

    describe("Zombie translator individual rule tests", function() {
	var translator;
	beforeEach(function() {
	    translator = new ZombieTranslator();
	});

	describe('rule #1, lower-case "r" at the end of words replaced with "rh"', function() {
	    
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #1, lower-case "r" at the end of words replaced with "rh"',
			     new Replacer(/r\b/g, 'rh'), new Replacer(/rh\b/g, 'r')));
	    });

	    it("should replace ar with arh", function() {
		expect(translator.zombify('ar')).toEqual('arh');
	    });

	    it("should not replace arc with arhc", function() {
		expect(translator.zombify('ar')).not.toBe('arhc');
	    });

	    it("round trip should work with char", function() {
		expect(translator.unzombify(translator.zombify('char'))).toBe('char');
	    });

	    it("round trip should NOT work with drh due to the unzombify rule, where rh is mapped to r blindly", function() {
		expect(translator.unzombify(translator.zombify('drh'))).not.toBe('drh');
	    });
	});

	describe('rule #2, an "a" or "A" is replaced with "hra"', function() {
	    
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #2, an "a" or "A" is replaced with "hra"',
			     new Replacer(/a/ig, 'hra'), new Replacer(/hra/g, 'a')));
	    });

	    it("should replace haha with hhrahhra", function() {
		expect(translator.zombify('haha')).toEqual('hhrahhra');
	    });

	    it("should not have modified dog", function() {
		expect(translator.zombify('dog')).toBe('dog');
	    });

	    it("round trip should work with char", function() {
		expect(translator.unzombify(translator.zombify('char'))).toBe('char');
	    });

	    it("round trip does NOT work with Apple", function() {
		expect(translator.unzombify(translator.zombify('Apple'))).toBe('apple');
	    });

	    it("round trip does match with Apple ignoring case", function() {
		expect(translator.unzombify(translator.zombify('Apple'))).toMatch(/Apple/i);
	    });
	});


	describe('rule #3, the starts of sentences are capitalised', function() {
	    
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #3, the starts of sentences are capitalised',
			     new Replacer(/([.!?] )([a-z])/g, function(match, punc, word) {
				 return punc + word.toUpperCase()}),
			     new Replacer(/([.!?] )([A-Z])/g, function(match, punc, word) {
				 return punc + word.toLowerCase()})));
	    });

	    it("should replace a. b with a. B", function() {
		expect(translator.zombify('a. b')).toEqual('a. B');
	    });

	    it("should replace a. b? d with a. B? D", function() {
		expect(translator.zombify('a. b? d')).toBe('a. B? D');
	    });

	    it("round trip should work with a. b? d", function() {
		expect(translator.unzombify(translator.zombify('a. b? d'))).toBe('a. b? d');
	    });

	    it("round trip should work with a. B? D ignoring case", function() {
		expect(translator.unzombify(translator.zombify('a. B? D'))).toMatch(/a\. B\? D/i);
	    });
	});
	
	describe('rule #4, "e" or "E" is replaced by "rr"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #4, "e" or "E" is replaced by "rr"',
			     new Replacer(/e/ig, 'rr'), new Replacer(/rr/g, 'e')));
	    });

	    it("should replace her with hrrr", function() {
		expect(translator.zombify('her')).toEqual('hrrr');
	    });

    	    it("should replace Element with rrlrrmrrnt", function() {
		expect(translator.zombify('Element')).toEqual('rrlrrmrrnt');
	    });

	    it("should not have modified dog", function() {
		expect(translator.zombify('dog')).toBe('dog');
	    });

	    it("round trip should work with 'her'", function() {
		expect(translator.unzombify(translator.zombify('her'))).toBe('her');
	    });

	    it("round trip should work with 'Epic' ignoring case", function() {
		expect(translator.unzombify(translator.zombify('Epic'))).toMatch(/Epic/i);
	    });

	});

	
	describe('rule #5, "i" or "I" is replaced by "rrRr"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #5, "i" or "I" is replaced by "rrRr"',
			     new Replacer(/i/ig, 'rrRr'), new Replacer(/rrRr/g, 'i')));
	    });

	    it("should replace his with hrrRrs", function() {
		expect(translator.zombify('his')).toEqual('hrrRrs');
	    });

    	    it("should replace Internet rrRrnternet", function() {
		expect(translator.zombify('Internet')).toEqual('rrRrnternet');
	    });

	    it("round trip should work with 'his'", function() {
		expect(translator.unzombify(translator.zombify('his'))).toBe('his');
	    });

	    it("round trip should work with 'Int' ignoring case", function() {
		expect(translator.unzombify(translator.zombify('Int'))).toMatch(/Int/i);
	    });

	});

	describe('rule #6, "o" or "O" is replaced by "rrrRr"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #6, "o" or "O" is replaced by "rrrRr"',
			     new Replacer(/o/ig, 'rrrRr'), new Replacer(/rrrRr/g, 'o')));
	    });

	    it("should replace vow with vrrrRrw", function() {
		expect(translator.zombify('vow')).toEqual('vrrrRrw');
	    });

    	    it("should replace hold with hrrrRrld", function() {
		expect(translator.zombify('hold')).toEqual('hrrrRrld');
	    });

	    it("round trip should work with 'vow'", function() {
		expect(translator.unzombify(translator.zombify('vow'))).toBe('vow');
	    });

	    it("round trip should work with 'Old' ignoring case", function() {
		expect(translator.unzombify(translator.zombify('Old'))).toMatch(/Old/i);
	    });

	});

	describe('rule #7, "u" or "U" is replaced by "rrrrRr"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #7, "u" or "U" is replaced by "rrrrRr"',
			     new Replacer(/u/ig, 'rrrrRr'), new Replacer(/rrrrRr/g, 'u')));
	    });
	    
	    it("should replace up with rrrrRrp", function() {
		expect(translator.zombify('up')).toEqual('rrrrRrp');
	    });

    	    it("should replace Us with rrrrRrs", function() {
		expect(translator.zombify('Us')).toEqual('rrrrRrs');
	    });

	    it("round trip should work with 'us'", function() {
		expect(translator.unzombify(translator.zombify('us'))).toBe('us');
	    });

	    it("round trip should work with 'U-turn' ignoring case", function() {
		expect(translator.unzombify(translator.zombify('U-turn'))).toMatch(/U-turn/i);
	    });

	});

	describe('rule #8, "r" or "R" is replaced by "RR"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #8, "r" or "R" is replaced by "RR"',
			     new Replacer(/r/ig, 'RR'), new Replacer(/RR/g, 'r')));
	    });
	    
	    it("should replace rug with RRug", function() {
		expect(translator.zombify('rug')).toEqual('RRug');
	    });

    	    it("should replace Red with RRed", function() {
		expect(translator.zombify('Red')).toEqual('RRed');
	    });

	    it("round trip should work with 'read'", function() {
		expect(translator.unzombify(translator.zombify('read'))).toBe('read');
	    });

	    it("round trip should work with 'Read' ignoring case", function() {
		expect(translator.unzombify(translator.zombify('Read'))).toMatch(/Read/i);
	    });

	});


	describe('rule #9, "1" is replaced by "2"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #9, "1" is replaced by "2"',
			     new Replacer(/1/g, '2'), new Replacer(/2/g, '1')));
	    });
	    
	    it("should replace 101 with 202", function() {
		expect(translator.zombify('101')).toEqual('202');
	    });

    	    it("should keep 385 as 385", function() {
		expect(translator.zombify('385')).toBe('385');
	    });

	    it("round trip should work with '1010' ", function() {
		expect(translator.unzombify(translator.zombify('1010'))).toMatch(/^1010$/);
	    });

	});
	
	describe('rule #10, "2" is replaced by "1"', function() {
	    beforeEach(function() {
		translator.addRule(
		    new Rule('rule #10, "2" is replaced by "1"',
			     new Replacer(/2/g, '1'), new Replacer(/1/g, '2')));
	    });
	    
	    it("should replace 202 with 101", function() {
		expect(translator.zombify('202')).toEqual('101');
	    });

    	    it("should keep 385 as 385", function() {
		expect(translator.zombify('385')).toBe('385');
	    });

	    it("round trip should work with '2020' ", function() {
		expect(translator.unzombify(translator.zombify('2020'))).toMatch(/^2020$/);
	    });

	});

    });
});
