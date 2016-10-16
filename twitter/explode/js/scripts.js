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

	$('.tweet_options button').on('touchend',function(){
		if($(this).hasClass('icon-heart') && $(this).hasClass('active')){
			$(this).removeClass('active');
			$('.tweet').removeClass('active');
			$('.timeline').removeAttr('style');
			return false;
		}

		$(this).addClass('active');
		$('.tweet').removeClass('active');
		$('.timeline').removeAttr('style');
	});


	$('.tweet').on('click',function(){
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