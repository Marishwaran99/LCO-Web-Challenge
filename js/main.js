var nav_btn = document.querySelector('.nav__btn');
var nav_links = document.querySelector('.nav__links');
var nav_link_list = document.querySelectorAll('.nav__link');
var main_body = document.querySelector('main');
document.addEventListener(
	'touchstart',
	function(e) {
		e.preventDefault();
	},
	{ passive: true }
);
nav_btn.addEventListener('click', function() {
	console.log('hello');
	nav_links.classList.toggle('active');
});
main_body.addEventListener('click', function() {
	console.log('hello');
	nav_links.classList.remove('active');
});
for (let i = 0; i < nav_link_list.length; i++) {
	nav_link_list[i].addEventListener('click', function() {
		removeActive();
		nav_link_list[i].classList.add('active');
		nav_links.classList.remove('active');
	});
}

function removeActive() {
	for (let i = 0; i < nav_link_list.length; i++) {
		nav_link_list[i].classList.remove('active');
	}
}
