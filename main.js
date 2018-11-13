'use strict';

// Clock
const displayTime = () => {
	const currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	if (hours > 24) {
		hours -= 24;
	}

	if (hours === 0) {
		hours = 24;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	const clockDiv = document.getElementById('zegar');
	clockDiv.innerText = `${hours}:${minutes}:${seconds}`;
};
displayTime();
setInterval(displayTime, 1000);

// Dynamically change text in div
const me = () => {
	sq5.textContent = 'I am a Software Engineer, building scalable platforms for Paysafe. Currently living in Hyderabad, India. My interests range from coding to entrepreneurship. I am also interested in soccer, cycling, and innovation.';
};
const contact = () => {
	sq5.textContent = 'You can get in touch with me at antrix190@gmail.com';
};
const projects = () => {
	sq5.textContent = 'Take a look at my projects https://www.github.com/antrix190';
};

// Load every time
me();
