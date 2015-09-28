define(['Replacer'], function(Replacer) {
    describe("Replacer", function() {
	it("should replace abc with de", function() {
	    var abcReplacer = new Replacer(/abc/g, 'de');
	    expect(abcReplacer.replaceIn('abcabc')).toEqual('dede');
	});
    });
});
