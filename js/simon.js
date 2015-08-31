var div1 = $(".div1" );
var div2 = $(".div2" );
var div3 = $(".div3" );
var div4 = $(".div4" );

var button1 = $(".button1");
var button2 = $(".button2");
var button3 = $(".button3");
var button4 = $(".button4");

div1.css("opacity", 1.0);
div2.css("opacity", 0.0);
div3.css("opacity", 0.0);
div4.css("opacity", 0.0);

var anim = false;
var active = div1;
var selected = button1;
button1.addClass("menuClicked")

button1.on("click", function(e) {
	if (!anim && active != div1) {
		selected.removeClass("menuClicked");
		button1.addClass("menuClicked");
		selected = button1;
		swap(active, div1);
	}
});
button2.on("click", function(e) {
	if (!anim && active != div2) {
		selected.removeClass("menuClicked");
		button2.addClass("menuClicked");
		selected = button2;
		swap(active, div2);
	}
});
button3.on("click", function(e) {
	if (!anim && active != div3) {
		selected.removeClass("menuClicked");
		button3.addClass("menuClicked");
		selected = button3;
		swap(active, div3);
	}
});
button4.on("click", function(e) {
	if (!anim && active != div4) {
		selected.removeClass("menuClicked");
		button4.addClass("menuClicked");
		selected = button4;
		swap(active, div4);
	}
});

var swap = function(div1, div2) {
	anim = true;
	div1.fadeTo( 200 , 0, function() {
	  	div2.fadeTo(200, 1, function() {

			active = div2;
			anim = false;
	  	}); 

	});
}

