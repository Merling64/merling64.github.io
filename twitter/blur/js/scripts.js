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

	var onlongtouch; 
	var timer;
	var touchduration = 500; //length of time we want the user to touch before we do something

	touchstart() {
	    timer = setTimeout(onlongtouch, touchduration); 
	}

	touchend() {

	    //stops short touches from firing the event
	    if (timer)
	        clearTimeout(timer); // clearTimeout, not cleartimeout..
	}

	onlongtouch = function() { 
		alert('hey');
	}

});