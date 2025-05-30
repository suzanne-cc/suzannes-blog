function openVideo() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');
  
  iframe.src = "https://www.youtube.com/embed/Yyah49_Oz78";
  modal.style.display = "block";
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');
  
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    closeVideo();
  }
};