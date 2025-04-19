
function initPage() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    startTyping();
  }, 1500);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play();
  else music.pause();
}

function startTyping() {
  const text = "Lasya Sistla";
  let i = 0;
  const typewriter = document.getElementById("typewriter");
  const interval = setInterval(() => {
    typewriter.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 150);
}
