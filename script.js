const audio = document.getElementById("background-music");
const musicBtn = document.getElementById("music-btn");
let playing = false;

// Cargar el audio (muteado primero)
audio.volume = 0;
audio.play().catch(() => console.log("Esperando interacción del usuario..."));

// Primer interacción: activar sonido
function enableAudio() {
  audio.volume = 1;
  audio.play();
  playing = true;
  musicBtn.textContent = "⏸️";
  // Eliminar listeners para no repetir
  document.body.removeEventListener("click", enableAudio);
  document.body.removeEventListener("touchstart", enableAudio);
}
document.body.addEventListener("click", enableAudio);
document.body.addEventListener("touchstart", enableAudio);

// Botón manual
musicBtn.addEventListener("click", () => {
  if (playing) {
    audio.pause();
    musicBtn.textContent = "🎵";
  } else {
    audio.play();
    musicBtn.textContent = "⏸️";
  }
  playing = !playing;
});

function countdown() {
  const eventDate = new Date("September 19, 2025 20:30:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "🎉 ¡Ya comenzó la fiesta!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
setInterval(countdown, 1000);

