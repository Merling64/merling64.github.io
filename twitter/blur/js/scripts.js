//
//
//

$(document).ready(function(){

	$(".tweet").on("taphold",function(){
		$(this).addClass('active');
		$('body').css('overflow','hidden');
	});
	
});