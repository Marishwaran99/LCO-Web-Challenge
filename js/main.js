$(document).ready(function() {
	$('.nav__btn').click(function(e) {
		$('.nav__links').toggleClass('active');
		e.stopPropagation();
	});
	$(document).click(function() {
		if ($('.nav__links').hasClass('active')) {
			$('.nav__links').removeClass('active');
		}
	});
	$('.nav__link').click(function() {
		$('.nav__link').removeClass('active');
		$(this).addClass('active');
		$('.nav__links').removeClass('active');
	});
	$('.carousel').slick({
		slidesToShow : 3,
		dots         : true,
		centerMode   : false,
		autoplay     : false,
		arrows       : true,
		loop         : false,
		responsive   : [
			{
				breakpoint : 1024,
				settings   : {
					slidesToShow   : 3,
					slidesToScroll : 3,
					infinite       : true,
					dots           : true
				}
			},
			{
				breakpoint : 600,
				settings   : {
					slidesToShow   : 2,
					slidesToScroll : 2
				}
			},
			{
				breakpoint : 480,
				settings   : {
					slidesToShow   : 1,
					slidesToScroll : 1
				}
			}
		]
	});
});
