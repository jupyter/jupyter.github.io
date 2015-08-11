$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $(".navbar").addClass("transparent");
        // $(".navbar").stop().animate({opacity: 0});
        console.log("scrolled down");
    }
    else {
        $(".navbar").removeClass("transparent");
        // $(".navbar").stop().animate({opacity: 1});
        console.log("scrolled top");
    }
});
console.log("a")