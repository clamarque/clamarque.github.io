
/*$(document).ready(function(){
    $('#mySearch').on('submit', function (){
        
  var data = $(this).serialize();
  $.ajax({
         url: "Controller/insertController.php",
        type: 'POST',
        data: $('#mySearch').serialize(),
         success: function(data){
              alert("Data Save: ");
         },
      error : function(data) { alert('ERROR') }
});
 });
 });
*/

     function insert()
    {
         event.preventDefault();  // Empêcher le rechargement de la page.
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET","./Controller/insertController.php?filmcode="+document.getElementById("filmcode").value,false);
        xmlhttp.send(null);
        alert(xmlhttp.responseText);
       // alert("Votre film/series a été ajouté !");
        //document.getElementById("d1").innerHTML=xmlhttp.responseText;
    }
      function insertSeries()
    {
         event.preventDefault();  // Empêcher le rechargement de la page.
       /* var xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET","./Controller/insertSeriesController.php?filmcode="+document.getElementById("filmcode").value,false);
        xmlhttp.send(null);
        alert(xmlhttp.responseText);
       // alert("Votre film/series a été ajouté !");
        //document.getElementById("d1").innerHTML=xmlhttp.responseText;*/
    }