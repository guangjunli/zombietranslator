define(['Replacer'], function(Replacer) {
    
    describe("Regex Replacer", function() {
	describe("with various replacement text", function() {
	    it("should replace abc with de", function() {
		var abcReplacer = new Replacer(/abc/g, 'de');
		expect(abcReplacer.replaceIn('abcabc')).toEqual('dede');
	    });

	    it("should replace null with 'null'", function() {
		var abcReplacer = new Replacer(/abc/g, null);
		expect(abcReplacer.replaceIn('abc')).toEqual('null');
	    });

	    it("should replace undefined with 'undefined'", function() {
		var abcReplacer = new Replacer(/abc/g, undefined);
		expect(abcReplacer.replaceIn('abc')).toEqual('undefined');
	    });

	    it("should have defined result even with undefined replacement text", function() {
		var abcReplacer = new Replacer(/abc/g, undefined);
		expect(abcReplacer.replaceIn('abc')).not.toBe(undefined);
	    });

    	    it("should return undefined for uninitialized replacement text", function() {
		var unInitialized;
		var abcReplacer = new Replacer(/abc/g, unInitialized);
		expect(abcReplacer.replaceIn('abc')).toEqual('undefined');
	    });

	    it("should work with number as well", function() {
		var abcReplacer = new Replacer(/abc/g, 35);
		expect(abcReplacer.replaceIn('abc')).toBe('35');
	    });
	});


	describe("with various Regex inputs", function() {
	    it("null regex should not perform replacement", function() {
		var nullReplacer = new Replacer(null, 'de');
		expect(nullReplacer.replaceIn('abcabc')).not.toEqual('dede');
		expect(nullReplacer.replaceIn('abcabc')).toBe('abcabc');
	    });

	    it("undefined regex should not perform replacement", function() {
		var regex;
		var nullReplacer = new Replacer(regex, 'de');
		expect(nullReplacer.replaceIn('abcabc')).not.toEqual('dede');
		expect(nullReplacer.replaceIn('abcabc')).toBe('abcabc');
	    });

	    it("non-regex should be converted to local regex match", function() {
		var nonRegexReplacer = new Replacer('abc', 'de');
		expect(nonRegexReplacer.replaceIn('abc')).toBe('de');
		expect(nonRegexReplacer.replaceIn('abcabc')).not.toBe('dede');
		expect(nonRegexReplacer.replaceIn('abc-abc')).toBe('de-abc');
	    });
	});
	
	describe("with various text to be replaced", function() {
	    it("null text should throw error", function() {
		expect(function() {
		    var abcReplacer = new Replacer(/abc/g, 'de');
		    abcReplacer.replaceIn(null);
		}).toThrow();
	    });

	    it("undefined text should throw error", function() {
		expect(function() {
		    var abcReplacer = new Replacer(/abc/g, 'de');
		    var unInit;
		    abcReplacer.replaceIn(unInit);
		}).toThrow();
	    });


	    it("number should throw error", function() {
		expect(function() {
		    var abcReplacer = new Replacer(/abc/g, 'de');
		    abcReplacer.replaceIn(35);
		}).toThrow();
	    });
	});
    });
});
