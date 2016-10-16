//
//
//

$(document).ready(function(){

	$('.timeline').scroll(function(){
		if($('.timeline').scrollTop() > 100){
			$('.header,.timeline').addClass('scroll');
		}else{
			$('.header,.timeline').removeClass('scroll');
		}
	});

});

$(function(){
	alert('hey');
	$( ".tweet" ).bind( "taphold", tapholdHandler );

	function tapholdHandler( event ){
	$(this).addClass( "active" );
	}
});