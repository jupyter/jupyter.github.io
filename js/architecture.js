var div5 = $(".div5" );
var div6 = $(".div6" );
var div7 = $(".div7" );

var button5 = $(".button5");
var button6 = $(".button6");
var button7 = $(".button7");

div5.css("opacity", 1.0);
div6.css("opacity", 0.0);
div7.css("opacity", 0.0);

var anim = false;
var active = div5;
var selected = button5;
button5.addClass("menuClicked")

button5.on("click", function(e) {
	if (!anim && active != div5) {
		selected.removeClass("menuClicked");
		button5.addClass("menuClicked");
		selected = button5;
		swap(active, div5);
	}
});
button6.on("click", function(e) {
	if (!anim && active != div6) {
		selected.removeClass("menuClicked");
		button6.addClass("menuClicked");
		selected = button6;
		swap(active, div6);
	}
});
button7.on("click", function(e) {
	if (!anim && active != div7) {
		selected.removeClass("menuClicked");
		button7.addClass("menuClicked");
		selected = button7;
		swap(active, div7);
	}
});

var swap = function(div5, div6) {
	anim = true;
	div5.fadeTo( 200 , 0, function() {
	  	div6.fadeTo(200, 1, function() {

			active = div6;
			anim = false;
	  	}); 

	});
}

