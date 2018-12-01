//INDEX.HTML
anime({
	targets: '#lineDrawing .lines path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1500,
	delay: function (el, i) {
		return i * 250
	},
	direction: 'alternate',
	loop: false,
	opacity: [
		{ value: '0', delay: '4500', easing: 'linear', duration: '500' }
	],
});
var fadeButton = anime({
	targets: '#enterButton',
	opacity: 1,
	zIndex: 10,
	duration: 500,
	delay: 5000,
	easing: 'linear',
});
//HOME.HTML
//Background and sections animation
anime({
	targets: 'div.mainBoy',
	opacity: ['0', '1'],
	elasticity: 0,
	duration: 500,
});
anime({
	targets: '#rightsection',
	translateY: ['-100vh', '0'],
	delay: 250,
});