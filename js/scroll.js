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
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("navbar-scroll");
        // $(".navbar").stop().animate({opacity: 0});
        console.log("scrolled down");
    }
    else {
        $(".navbar").removeClass("navbar-scroll");
        // $(".navbar").stop().animate({opacity: 1});
        console.log("scrolled top");
    }
});