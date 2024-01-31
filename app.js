const nacho = document.querySelector(".boton1");
const homero = document.querySelector(".boton2");
const tigresa = document.querySelector(".tigresa");
const casarodante = document.querySelector(".casarodante");
const dorito = document.querySelector(".dorito");
const bum = document.querySelector(".bum");
const nuez = document.querySelector(".nuez")
const afeitadora = document.querySelector(".afeitadora");

let track = document.createElement('audio');
nuez.addEventListener('click', () => {
	track.src = "audios/thinkfast.m4a";
	track.load();
	track.play();

	document.querySelector(".thinkfast").classList.toggle("screamer-active");
	setTimeout(yano3, 5300);
});

nacho.addEventListener('click', () => {
   window.location.href = "/gato/gato.html";
});

homero.addEventListener('click', () => {
   window.location.href = "/perro/perro.html";
});

document.querySelector(".hotline__title").addEventListener('click', () => {
	track.src = "audios/pum.mp3";
	track.load();
	track.play();

	casarodante.classList.toggle("casarodanteactiva");
	tigresa.classList.toggle("tigresa360");
	dorito.classList.toggle("dorito360");
	bum.classList.toggle("bum-active");
	afeitadora.classList.toggle("afeitadora360");
	setTimeout(yano, 3000);
});

document.querySelector(".eresmrc").addEventListener('click', () => {
	document.querySelector(".main").classList.toggle("maininvertido");
	document.querySelector(".main2").classList.toggle("main2invertido");
});

const yano = () => {
	tigresa.classList.toggle("tigresa360");
	dorito.classList.toggle("dorito360");
	bum.classList.toggle("bum-active");
	afeitadora.classList.toggle("afeitadora360");
}

const yano2 = () => {
	document.querySelector(".vladi").classList.toggle("screamer-active");
}

const yano3 = () => {
	document.querySelector(".thinkfast").classList.toggle("screamer-active");
}
