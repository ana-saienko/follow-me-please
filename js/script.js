var image = document.getElementsByClassName('footer__parallax-img');
new simpleParallax(image, {
	scale: 1.1,	
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
	orientation: 'down'
});

var image = document.getElementsByClassName('parallax-img');
new simpleParallax(image, {
	scale: 1.1,	
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});