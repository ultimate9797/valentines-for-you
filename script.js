function yes() {
  alert("YAY! I love you ❤️");
}

const no = document.getElementById("no");
no.addEventListener("mouseover", () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "vw";
  no.style.top = Math.random() * 80 + "vh";
});
