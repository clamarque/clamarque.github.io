(function($){
	$('.addPanier').click(function(event){
		event.preventDefault();
		$.getJSON($(this).attr('href'),function(data){
if(data.error){
alert(data.message);
}else{
if(confirm(data.message+'. Voulez-vous consulter Votre panier?')){
location.href = 'panier.php';
			}else {
				$('#total').empty().append(data.total);
				$('#count').empty().append(data.count);

			}
		}
		});
		return false;
		
	});
})(jQuery);