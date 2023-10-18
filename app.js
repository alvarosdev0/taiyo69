const nacho = document.querySelector(".boton1");
const homero = document.querySelector(".boton2");
const tigresa = document.querySelector(".tigresa");
const casarodante = document.querySelector(".casarodante");

let track = document.createElement('audio');

nacho.addEventListener('click', () => {
   window.location.href = "/gato/gato.html";
});

homero.addEventListener('click', () => {
   window.location.href = "/perro/perro.html";
});

tigresa.addEventListener('click', () => {
	track.src = "audios/pum.mp3";
	track.load();
	track.play();

	casarodante.classList.toggle("casarodanteactiva");
	tigresa.classList.toggle("tigresa360");
	setTimeout(yano, 3000);
});

const yano = () => {
	tigresa.classList.toggle("tigresa360");
}