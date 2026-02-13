const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
 const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("container").innerHTML =
"<h1 style='text-align:center;margin-top:20%;color:#ff2e63;'>YAYYY 💗 I KNEW IT 😍</h1>";
;
const music = document.getElementById("bg-music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });
