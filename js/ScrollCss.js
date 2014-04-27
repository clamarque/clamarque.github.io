 $(document).ready(function(){
    $(window).scroll(function(){
        var y = $(window).scrollTop();
 
        if( y > 500 )
        {
            $(".navbar-default").css({'background-color':'rgb(255,255,255)'});
            $(".navbar-default .navbar-nav > li > a").css({'color':'#000'});
            //$('#navbar').animate({ 'height': '60'}, {duration : 200, queue : false});
        } else {
            $(".navbar-default").css({'background-color':'transparent'});
            $(".navbar-default .navbar-nav > li > a").css({'color':'#FFF'});
            //$('#navbar').animate({ 'height': '51'}, {duration : 200, queue : false});

        }
 
        $('#result').html(y);
    });
})