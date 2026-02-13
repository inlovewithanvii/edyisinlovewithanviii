const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const music = document.getElementById("bg-music");

// Move No button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes click
yesBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML =
    "<h1 style='text-align:center;margin-top:20%;color:#ff2e63;'>YAYYY 💗 I KNEW IT 😍</h1>";
});

// Music toggle
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Start music on first click
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });
