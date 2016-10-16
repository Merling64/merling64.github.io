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

	$('.tweet_options button').mouseup(function(){
		alert($(this).attr('data-action'));
		$('.tweet').removeClass('active');
		$('.timeline').removeAttr('style');
	});



});

$(function(){
	$( ".tweet" ).bind( "taphold", tapholdHandler );

	function tapholdHandler( event ){
	$(this).addClass( "active" );
	$('.timeline').css('overflow','hidden');
	}
});