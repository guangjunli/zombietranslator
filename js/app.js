requirejs.config({
    baseUrl: 'js/app',
    paths: {
        jquery: '../vendors/jquery.min',
        bootstrap: '../vendors/bootstrap.min',

    },
    shim: {
        bootstrap: ["jquery"]
    }
});

requirejs(['jquery', 'TenRulesZombieTranslator'], function($, TenRulesZombieTranslator) {

    $(function() {
	var tenRulesZombieTranslator = new TenRulesZombieTranslator();

	$('#english').on("keyup", function() {
	    $('#zombie').val(tenRulesZombieTranslator.zombify($('#english').val()));
	});

    });

});
