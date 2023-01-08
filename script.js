const boutonAnimation = document.getElementById("bouton-animation");
const animation = document.getElementById("animation");

boutonAnimation.addEventListener("click", function() {
  if (animation.style.display === "none") {
    animation.style.display = "block";
  } else {
    animation.style.display = "none";
  }
});

  const boutonModeSombre = document.getElementById("bouton-mode-sombre");
  const corps = document.body;

  boutonModeSombre.addEventListener("click", function() {
    if (corps.classList.contains("sombre")) {
      corps.classList.remove("sombre");
      boutonModeSombre.innerHTML = "🌚";
    } else {
      corps.classList.add("sombre");
      boutonModeSombre.innerHTML = "☀️";
    }
  });
  const button = document.querySelector("button");
// const container = document.querySelector(".container");
const cards = document.querySelectorAll('.cards');

  console.log(button);
  console.log(document.querySelector('.cards'));
  console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {

    for (i = 0; i < 5; i++) {
      cards[i].classList.toggle("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
});