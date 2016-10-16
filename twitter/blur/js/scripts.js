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

	$('.tweet').mousedown(function() {
		var tweet = $(this);
	    timeoutId = setTimeout(function(){
	    	tweet.addClass(active);
	    }, 500);
	}).bind('mouseup mouseleave', function() {
	    clearTimeout(timeoutId);
	});

	function longClickHandler(e){
		e.preventDefault();
		$("body").append("<p>You longclicked. Nice!</p>");
	}

	$("p a").longclick(250, longClickHandler);

});