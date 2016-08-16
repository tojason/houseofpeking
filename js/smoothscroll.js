$(document).ready(function () {

    $('#middle').css('display', 'none');
    $('#middle').fadeIn(1500);


    $('.link').click(function (event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }

    $('a[href^="#"]:not([href="#"])').click(function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // this.hash reads href attr of this
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 'slow');
                return false;
            }
        }
        e.preventDefault();
    });



    //    var navOffset = $('#nav-wrap').offset().top
    //    $(window).scroll(function() {
    //        var scrollPos = jQuery(window).scrollTop();
    //        
    //        if (scrollPos >= navOffset) {
    //            $("#nav-wrap").addClass("fixed col-lg-offset-3");
    //            $("#navigationmenu").addClass("nav-scroll");
    //            
    //        } else {
    //            $("#nav-wrap").removeClass("fixed fixed col-lg-offset-3");
    //            $("#navigationmenu").removeClass("nav-scroll");
    //        }
    //    });
});