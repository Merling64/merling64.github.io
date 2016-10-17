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

		$('.open_options').each(function(){
			var button = $(this);
			setTimeout(function(){button.next().removeClass('active');},0);
			setTimeout(function(){button.next().next().removeClass('active');},50);
			setTimeout(function(){button.next().next().next().removeClass('active');},100);
			setTimeout(function(){button.fadeIn();},100);
		});
	});

	$('.open_options').click(function(){
		var button = $(this);
		setTimeout(function(){button.next().addClass('active');},0);
		setTimeout(function(){button.next().next().addClass('active');},50);
		setTimeout(function(){button.next().next().next().addClass('active');},100);
		setTimeout(function(){button.fadeOut();},100);
	});

	$('.option_button').click(function(){
		$(this).addClass('clicked');
		$('.open_options').each(function(){
			var button = $(this);
			setTimeout(function(){button.next().removeClass('active');},1010);
			setTimeout(function(){button.next().next().removeClass('active');},1050);
			setTimeout(function(){button.next().next().next().removeClass('active');},1200);
			setTimeout(function(){button.fadeIn();},1200);
		});
	});
});