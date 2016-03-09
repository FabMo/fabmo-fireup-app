
fabmo.getConfig(function(err, cfg) {
	$('#pref-input-cur-zlength').val(cfg.opensbp.variables.current_cutter_Zoffset);
});

$("#pref-save").click(function(evt) {
	
});

/*
$("#job-go").click(function(evt) {
    var cx = validateInput($("#job-input-cx"));
    var cy = validateInput($("#job-input-cy"));
    var d = validateInput($("#job-input-d"));
    var zpullup = validateInput($("#job-input-zpullup"));
    var depth = validateInput($("#job-input-depth"));
    var seg_size = validateInput($("#job-input-segsize"));
    var feedrate = validateInput($("#job-input-feedrate"));
    var passdepth = validateInput($("#job-input-passdepth"));

    code = makeCircle(cx,cy,d,zpullup,depth,seg_size,feedrate, passdepth);
    fabmo.submitJob(code, {filename : 'example-circle.nc',
                                    name : d + '" Diameter Circle',
                                    description : d + '" diameter circle centered at ' + cx + ',' + cy + ' at a depth of ' + depth + '"' 
    })
    evt.preventDefault();
});
*/


/*function updateSpeedsFromEngineConfig() {
    var temp = 0;
    fabmo.getConfig(function(err, data) {
      $('#formatted_movexy_speed').val(data.opensbp.movexy_speed.toFixed(2));
      $('#formatted_movez_speed').val(data.opensbp.movez_speed.toFixed(2));
    // note that jog speeds are handled differently than move speeds (they are from G2 velocity max)
      temp = data.driver.xvm / 60;
      $('#formatted_jogxy_speed').val(temp.toFixed(2));
      temp = data.driver.zvm / 60;
      $('#formatted_jogz_speed').val(temp.toFixed(2));
    });
}
*/
