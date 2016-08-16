$(function() {
    $('.carousel').carousel({
        interval: 4000,
        pause: false,
        // after it gets to the last slide, it will stop there.
        // wrap: false,
        // keyboard: false
    });
});

$(window).ready(function(){
//    var topBtn = document.getElementById('return-top');
    var topBtn = $('.return-top');

    $(window).scroll(function(){
        var scrollHeight = $(this).scrollTop();
        if (scrollHeight >= document.documentElement.clientHeight) {
            $('.return-top').fadeIn();
            topBtn.css('display', 'flex');
            topBtn.css('display', '-webkit-flex');
        }
        else {
            $('.return-top').fadeOut();
        }
        
        $(this).bind()
    });
    
    $('.return-top').click(function(){
        $('body, html').stop().animate({scrollTop:0}, 'slow');
    });
});
