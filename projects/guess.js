$(document).ready(function() {
		setInterval(function(){
			fade();
		},200);
		function fade(){
			$("#textDiv").fadeToggle(200);
		}
	});