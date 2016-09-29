//
//
// SCRIPTS
//
//

function animate(){
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},1000);

	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},2000);

	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},3000);

	setTimeout(function(){
		$('.newsletter').removeClass('active');
	},4000);

	setTimeout(function(){
		$('.newsletter').removeClass('centered');
		$('.footer').removeClass('active');
	},5000);

	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},5500);
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},5700);
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},5900);
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},6100);
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},6300);
	setTimeout(function(){
		$('.animation_container').addClass('active');
		$('body').addClass('active');
	},7000);

	setTimeout(function(){
		$('.loremblock:eq(0)').fadeIn();
	},7000);
	setTimeout(function(){
		$('.loremblock:eq(1)').fadeIn();
	},7200);
	setTimeout(function(){
		$('.loremblock:eq(2)').fadeIn();
	},7400);
	setTimeout(function(){
		$('.loremblock:eq(3)').fadeIn();
	},7600);
	setTimeout(function(){
		$('.loremblock:eq(4)').fadeIn();
	},7800);
	setTimeout(function(){
		$('.loremblock:eq(5)').fadeIn();
	},8000);
}

$(document).ready(function(){
	$('.animation').click(function(){
		animate();
		$(this).addClass('playing');
	});
});