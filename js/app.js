import anime from 'animejs';


const ball = document.querySelector('.ball');


anime({
	targets: ball,
	translateX: [
		{ value: 100, duration: 1200 },
		{ value: 0, duration: 800 }
	],
	rotate: '1turn',
	duration: 2000,
	loop: true
});
