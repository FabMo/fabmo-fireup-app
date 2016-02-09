
$("#call-c3").click(function(evt) {
	fabmo.runSBP('C3,');
});
$("#call-c2").click(function(evt) {
    fabmo.runSBP('C2,');
});
$("#nav-showdro").click(function(evt) {
  fabmo.showDRO();
});
$("#nav-hidedro").click(function(evt) {
  fabmo.hideDRO();
});
$("#dash-info").click(function(evt) {
  fabmo.notify('info', 'Heads Up!');
});
$("#dash-success").click(function(evt) {
  fabmo.notify('success', 'Great Job!');
});
$("#dash-warning").click(function(evt) {
  fabmo.notify('warning', 'Uh Oh!');
});
$("#dash-error").click(function(evt) {
  fabmo.notify('error', 'Epic Fail!');
});

$("#dash-launch-job-manager").click(function(evt) {
  fabmo.launchApp('job-manager');
});
