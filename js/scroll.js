$(document).ready(function() {
    $(window).bind('resize', function() {
        if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
            if (window.outerWidth < 768) {
                $('.navbar').removeClass('jupytercon-navbar');
                $('.tab').addClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
            else {
                console.log(window.location.pathname);
                $('.navbar').addClass('jupytercon-navbar');
                $('.tab').removeClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                $('.icon-bar').addClass('white-icon-bar');   
            }
        }  
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 0});
        
            // For JupyterCon Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
                $('.navbar').removeClass('jupytercon-navbar');
                $('.tab').addClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
        }
        else {
            $(".navbar").removeClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 1});
        
            // For JupyterCon Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
                if (window.outerWidth < 768) {
                    $('.navbar').removeClass('jupytercon-navbar');
                }
                else {
                    console.log(window.location.pathname);
                    $('.navbar').addClass('jupytercon-navbar');
                    $('.tab').removeClass('black-tab');
                    document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                    $('.icon-bar').addClass('white-icon-bar');   
                }
            }
        }
    }); 
});
