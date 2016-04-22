/**
 * Created by Sona Unusyan on 4/21/2016.
 */
$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 400,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10,
        pager: false,
        controls: false,
        auto: true,
        pause: 3000,
        moveSlides: 1,
        autoHover:true
    });

    $(".pop").click(function () {
        $(".overlay, #form").fadeIn();
        center();
    });

    $(".overlay,.close").click(function () {
        $(".overlay,#form").fadeOut();
    });

    function center() {
        var form = $("#form");
        var width = $(window).width() / 2 - (form.width() + 30) / 2;
        var heigth = $(window).height() / 2 - (form.height() + 40) / 2;
        form.css({
            "left": width,
            "top": heigth
        });
        return false;
    }
});