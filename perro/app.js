const slider = document.querySelector("#duration_slider");
const play = document.querySelector("#play");
const present = document.querySelector("#present");
const total = document.querySelector("#total");

let timer;
let track = document.createElement('audio');
let playing_song = false;

const range_slider = () => {
	let position = 0;

	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}

	if (track.ended) {
		play.innerHTML = '<i class="fa-solid fa-play"></i>';
	}
}

const reset_slider = () => {
	slider.value = 0;
}

const loadsong = () => {
	reset_slider();
	track.src = "audios/chingcheng.mp3";
	track.load();
	timer = setInterval(range_slider , 1000);
}
loadsong();

const justplay = () => {
	if (playing_song == false) {
		playsong();
	} else {
		pausesong();
	}
}

const playsong = () => {
	track.play();
	playing_song = true;
	play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

const pausesong = () => {
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

const change_duration = () => {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

const song_time_update = () => {
		let curmins = Math.floor(track.currentTime / 60);
		let cursecs = Math.floor(track.currentTime - curmins * 60);

		let durmins = Math.floor(track.duration / 60);
		let dursecs = Math.floor(track.duration - durmins * 60);

	if (dursecs < 10) {
		dursecs = "0" + dursecs;
	}
	if (durmins < 10) {
		durmins = "0" + durmins;
	}
	if (curmins < 10) {
		curmins = "0" + curmins;
	}
	if (cursecs < 10) {
		cursecs = "0" + cursecs;
	} else {
		present.textContent = "00" + ":" + "00";
		total.textContent = "00" + ":" + "00";
	}

	if (isNaN(durmins)) {
		present.textContent = "00" + ":" + "00";
		total.textContent = "00" + ":" + "00";
	} else {
		present.textContent = curmins + ":" + cursecs;
		total.textContent = durmins + ":" + dursecs;
	}	

}

const song_time_default = () => {
	present.textContent = "00" + ":" + "00";
	total.textContent = "00" + ":" + "00";
}

track.addEventListener('timeupdate', song_time_update);
slider.addEventListener('onload', song_time_default);