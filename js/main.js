  /*-- Circle JavaScript
    ================================================== --*/
(function ($) {

    $('input.round').wrap('<div class="round" />').each(function () {
        var $input = $(this);
        var $div = $input.parent();
        var min = $input.data('min');
        var max = $input.data('max');
        var ratio = ($input.val() - min) / (max - min);
        var color = $input.data('color') ? $input.data('color') : "rgba(33,33,33,0.6)";

        var $circle = $('<canvas width="150px" height="150px"/>');
        var $color = $('<canvas width="150px" height="150px"/>');
        $div.append($circle);
        $div.append($color);
        var ctx = $circle[0].getContext('2d');

        // On dessine le cercle blanc avec ombre porté
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, 2 * Math.PI);
        ctx.lineWidth = 3; //epaisseur
        ctx.strokeStyle = "rgba(225,255,255,0.3)"
        ctx.shadowOffsetX = 2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(0,0,0,0.1)";
        ctx.stroke();


        // On dessine le cercle de couleur
        var ctx = $color[0].getContext('2d');
        ctx.arc(75, 75, 50, -1 / 2 * Math.PI, ratio * 2 * Math.PI - 1 / 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.stroke();




    })

})(jQuery);

  /*-- Grid Portfolio JavaScript
    ================================================== --*/
/*
$('ul.nav-pills li a').click(function (e) {
    $('ul.nav-pills li.active').removeClass('active')
    $(this).parent('li').addClass('active')
})

$(window).load(function () {
    var $container = $('.grid-wrapper');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.grid-controls li a').click(function () {
        $('.grid-controls .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});
*/

  /*-- Scroll To JavaScript
    ================================================== --*/
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
  /*-- Scroll CSS JavaScript
    ================================================== --*/
 $(document).ready(function(){
    $(window).scroll(function(){
        var y = $(window).scrollTop();
 
        if( y > 400 )
        {
            $(".navbar").css({'background-color':'#009688'});
            //$(".navbar .navbar-nav > li > a").css({'color':'#333'});
            $(".nav li.current a, .nav li.current a:hover, .nav li a:hover, .nav li a:focus").css({'background': 'transparent','color': '#1abc9c'}); 
            //$('#navbar').animate({ 'height': '60'}, {duration : 200, queue : false});
        } else {
            $(".navbar").css({'background-color':'transparent', 'border-bottom':'none'});
            $(".navbar .navbar-nav > li > a").css({'color':'#FFF'});
            $(".nav li.current a, .nav li.current a:hover, .nav li a:hover, .nav li a:focus").css({'background': 'transparent','color': '#1abc9c'});
            
            //$('#navbar').animate({ 'height': '51'}, {duration : 200, queue : false});

        }
 
        $('#result').html(y);
    });
})
 
 
 /*-- Show Div JavaScript
    ================================================== --*/
 
$(document).ready(function(){
    $("#skill-up").click(function(){
        $(".showSkill").hide("slow");
        $("#skill-up").hide();
        $("#skill-down").show();
    });
    $("#skill-down").click(function(){
        $(".showSkill").show("slow");
        $("#skill-down").hide();
        $("#skill-up").show();
    });
});