//
//
// SCRIPTS
//
//

function animate(){
	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
		$('.step:eq(0)').addClass('active');
	},1000);

	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},2000);

	setTimeout(function(){
		$('.hidden:eq(0)').removeClass('hidden');
	},3000);

	setTimeout(function(){
		$('.newsletter').removeClass('active');
		$('.newsletter').addClass('bordered');
		$('.step:eq(1)').addClass('active');
	},4000);

	setTimeout(function(){
		$('.newsletter').removeClass('centered');
		$('.footer').removeClass('active');
		$('.step:eq(2)').addClass('active');
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
		$('.step:eq(3)').addClass('active');
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
		$('.loremblock p').fadeIn();
		$('.step:eq(4)').addClass('active');
	},8000);
}

$(document).ready(function(){
	var a = $('.animation').html();
	$('.animation').html(a);
	animate();
	setInterval(function(){
		$('.step').removeClass('active');
		$('.animation').html(a);
		animate();
	},12000);
});