const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const music = document.getElementById("bg-music");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML =
    "<h1 style='text-align:center;margin-top:20%;color:#ff2e63;'>YAYYY 💗 I KNEW IT 😍</h1>";
});

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
