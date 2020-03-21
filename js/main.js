$(document).ready(function() {
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
