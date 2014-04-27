(function($){

	$('input.round').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min) / (max - min);
		var color = $input.data('color') ? $input.data('color') :  "rgba(33,33,33,0.6)";

		var $circle = $('<canvas width="150px" height="150px"/>');
		var $color = $('<canvas width="150px" height="150px"/>');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		// On dessine le cercle blanc avec ombre porté
		ctx.beginPath();
		ctx.arc(75,75,50,0,2*Math.PI);
		ctx.lineWidth = 3; //epaisseur
		ctx.strokeStyle = "rgba(225,255,255,0.3)"
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur = 6;
		ctx.shadowColor="rgba(0,0,0,0.1)";
		ctx.stroke();


		// On dessine le cercle de couleur
		var ctx = $color[0].getContext('2d');
		ctx.arc(75,75,50,-1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI );
		ctx.lineWidth = 3;
		ctx.strokeStyle = color;
		ctx.stroke();



		
	})

})(jQuery);