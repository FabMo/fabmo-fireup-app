$("#tab-config").click(function(evt) {
	$('#config-system-config').text(JSON.stringify(cfg));
});


fabmo.getConfig(function(err, cfg) {
	$('#config-system-config').text(JSON.stringify(cfg));
});

