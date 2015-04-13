$(".comment").click(function () {
    $(".load").show();
    $.ajax({
        url : "cinema.php",
        success: function(html){
            if(html){
                $("#commments").append(html);               
            }
            $(".load").hide();
        } 
    });
});