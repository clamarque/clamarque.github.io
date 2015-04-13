$(document).ready(function(){
    $('#mySearch').on('submit', function (){
       
        $(".load").show();
       
        //if((".load").show())
            $("body").css({'background':'rgba(0,0,0,0.8)'});
            $("#MycakeMovies").css({'background':'rgba(0,0,0,0.8)'});
        
        var $this = $(this)
         var search = $('#q').val();
        if(search ==='') {
            alert('Veuillez mettre un nom !'); 
            $(".load").hide();
             $("#MycakeMovies").css({'background':'#3F4C58'});
        }
            else {
            $.ajax({
                url: 'Search.php',
                type: 'POST',
                data: $this.attr(),
                sucess: function(html) {
                    $(".page_Movies--list").append(html);
                }
            });
$(".load").hide();
                
        }
            return false;
        });
    
});