function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// // Typed JS
// var typed = new Typed(".typewriter", {
//   strings: ["Data Scientist", "Data Analyst"],
//   typeSpeed: 70,
//   backSpeed: 70,
//   backDelay: 1000,
//   loop: true,
// })