$(document).ready(function() {
	$('.team__wrapper').slick({
		slidesToShow   : 3,
		slidesToScroll : 1,
		asNavFor       : '.team__wrapper',
		dots           : true,
		arrows         : false
	});
});
