const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

function yesClicked() {
  response.innerText = "YAY!!! 💕 I knew you’d say yes 😍";
  confettiEffect();
}

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function confettiEffect() {
  document.body.style.background =
    "linear-gradient(135deg, #ff9a9e, #fad0c4)";
}
