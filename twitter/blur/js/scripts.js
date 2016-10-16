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

	$(document).on('taphold','.tweet',function(){
		alert('hey');
	});

});