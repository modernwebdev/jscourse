jQuery(document).ready(function($) {

	$('a[href="#sheldure"], .contact, a[href="#tour"]').click(function() {

		$('.overlay').animate({
	  	opacity: 1
	  }, 200 );

		$('.overlay').css({
			display: 'block'
		});

		$('.modal').css({
			transform: 'translateY(-500px)',
			display: 'block'
		});

	  $('.modal').animate({
	  	opacity: 1,
	    top: '+500px',
	  }, 400 );

	});


	$('.close').click(function() {

		$('.overlay').animate({
	  	opacity: 0
	  }, 200 );

		$('.overlay').css({
	  	display: 'none'
	  }, 200 );


	  $('.modal').animate({
	  	opacity: 0,
	    top: '-500px'
	  }, 400 );

	});


});