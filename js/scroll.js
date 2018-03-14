$(document).ready(function() {
    if (window.outerWidth < 768) {
                $('.navbar').removeClass('jupyterlab-navbar');
                $('.tab').addClass('tab-black');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
    }
    else {
        $('.navbar').addClass('jupyterlab-navbar');
        $('.tab').addClass('tab-white');
        document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
        $('.icon-bar').addClass('white-icon-bar');
    }
    $(window).bind('resize', function() {
        if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
            if (window.outerWidth < 768) {
                $('.navbar').removeClass('jupyterlab-navbar');
                $('.tab').addClass('tab-black');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
            else {
                $('.navbar').addClass('jupyterlab-navbar');
                $('.tab').removeClass('tab-black');
                document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                $('.icon-bar').addClass('white-icon-bar');
            }
        }
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 0});

            // For jupyterlab Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
                $('.navbar').removeClass('jupyterlab-navbar');
                $('.tab').addClass('tab-black');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
        }
        else {
            $(".navbar").removeClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 1});

            // For jupyterlab Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
                if (window.outerWidth < 768) {
                    $('.navbar').removeClass('jupyterlab-navbar');
                }
                else {
                    console.log(window.location.pathname);
                    $('.navbar').addClass('jupyterlab-navbar');
                    $('.tab').removeClass('tab-black');
                    $('.tab').addClass('tab-white');
                    document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                    $('.icon-bar').addClass('white-icon-bar');
                }
            }
        }
    });
});
