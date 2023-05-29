// javascript
// https://youtu.be/xE6Q7Eb8tnw
export function setSourceOne() {
  document.getElementById("laser-1").style.display = "inline";
  document.getElementById("laser-2").style.display = "none";
}

export function setSourceTwo() {
  document.getElementById("laser-1").style.display = "none";
  document.getElementById("laser-2").style.display = "inline";
}

export function startAnimation(time) {
  document.getElementById("animation").style.display = "none";
  document.getElementById("move").style.animation = "";

  document.getElementById("move").style.animation =
    "slide 1s ease forwards infinite";

  setTimeout(function () {
    document.getElementById("move").style.animation = "";
    document.getElementById("animation").style.display = "inline";
  }, time);
}
