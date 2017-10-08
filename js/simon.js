(function(){
	"use strict";
	
	var div1 = $(".div1" );
	var div2 = $(".div2" );
	var div3 = $(".div3" );
	var div4 = $(".div4" );
	
	var button1 = $(".button1");
	var button2 = $(".button2");
	var button3 = $(".button3");
	var button4 = $(".button4");
	
	div1.css("display", '');
	div2.css("display", 'none');
	div3.css("display", 'none');
	div4.css("display", 'none');
	
	var anim = false;
	var active = div1;
	var selected = button1;
	button1.addClass("menuClicked")
	
	
	var link = function(target_div, target_button){
	  target_button.on('click', 
			function(e) {
				if (!anim && active != target_div) {
					selected.removeClass("menuClicked");
					target_button.addClass("menuClicked");
					selected = target_button;
					swap(active, target_div);
				}
			}	
	  )
	}
	
	link(div1, button1);
	link(div2, button2);
	link(div3, button3);
	link(div4, button4);
	
	var swap = function(div1, div2) {
		anim = true;
		div1.fadeOut( 200 , function() {
			div2.fadeIn(200, function() {
				active = div2;
				anim = false;
			}); 
	
		});
	}
})()
