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
	sq5.textContent = 'Nazywam się Milan Muzalewski i pochodzę z Polski. Mam 14 lat i uczęszczam do trzeciej klasy gimnazjum w małej miejscowości pod Poznaniem.';
};
const contact = () => {
	sq5.textContent = 'Skontaktuj się ze mną przez e-mail: example@example.com';
};
const projects = () => {
	sq5.textContent = 'Tutaj będą moje projekty';
};

// Load every time
me();
