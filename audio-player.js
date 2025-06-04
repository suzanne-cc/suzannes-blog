const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "⏸";
  } else {
    audio.pause();
    playButton.textContent = "▶";
  }
}

playButton.addEventListener("click", togglePlay);

audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percentage || 0;
});

progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

audio.addEventListener("ended", () => {
  playButton.textContent = "▶";
  progressBar.value = 0;
});
