const getHamburger = document.getElementById("hamburger"),
  getBackground = document.getElementsByClassName("background")[0],
  getSlotter = document.getElementById("slotter"),
  getClose = document.getElementById("close");

//initial state

getSlotter.style.display = "none";
getClose.style.display = "none";

getHamburger.addEventListener("click", () => {
  getHamburger.style.display = "none";
  getBackground.style.display = "block";
  getBackground.style.width = "100vw";
  getBackground.style.height = "100vh";

  getSlotter.style.display = "flex";
  getClose.style.display = "block";
});
getClose.addEventListener("click", () => {
  getHamburger.style.display = "block";
  getBackground.style.display = "block";
  getBackground.style.width = "0.01vw";
  getBackground.style.height = "0.01vh";
  getSlotter.style.display = "none";
  getClose.style.display = "none";
});
