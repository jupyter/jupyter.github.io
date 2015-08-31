$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $(".navbar").addClass("transparent");
        // $(".navbar").stop().animate({opacity: 0});
    }
    else {
        $(".navbar").removeClass("transparent");
        // $(".navbar").stop().animate({opacity: 1});
    }
});
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("navbar-scroll");
        // $(".navbar").stop().animate({opacity: 0});
    }
    else {
        $(".navbar").removeClass("navbar-scroll");
        // $(".navbar").stop().animate({opacity: 1});
    }
});