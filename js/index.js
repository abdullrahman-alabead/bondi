// Declare Elements to Animate
let features = document.querySelectorAll(".feature");
let section = document.querySelector(".features");
let projects = document.querySelectorAll(".our-work .box");
let laptop = document.querySelectorAll(".about img")[1];
let members = document.querySelectorAll(".team-mem");
let icons = document.querySelectorAll(".tech-icon")

window.addEventListener("scroll", () => {
  let duration = 0.4;
  // Aniamte features Section
  if (window.scrollY >= (section.offsetTop / 3) * 2) {
    for (let i = 0; i < features.length; i++) {
      features[i].style.animation = `fadeInTop ${duration}s forwards`;
      duration += 0.4;
    }
  }
  if (window.scrollY < (section.offsetTop / 3) * 2) {
    for (let i = 0; i < features.length; i++) {
      features[i].style.animation = `fadeOutDown ${duration}s`;
      duration += 0.4;
    }
  }
  // Animate Our-Work Section
  if (window.scrollY >= document.querySelector(".our-work").offsetTop - 150) {
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.animation = `fadeInTop ${duration / 2}s forwards`;
      duration += 0.4;
    }
  }
  if (window.scrollY < document.querySelector(".our-work").offsetTop - 150) {
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.animation = `fadeOutDown ${duration / 2}s`;
      duration += 0.4;
    }
  }
  // Animate About Section
  if (window.scrollY >= document.querySelector(".about").offsetTop) {
    laptop.style.animation = `fadeInTop 1s forwards`;
  }
  if (window.scrollY < document.querySelector(".about").offsetTop) {
    laptop.style.animation = `fadeOutDown 1s `;
  }
  // Aniamte Team Section
  if (window.scrollY >= document.querySelector(".team").offsetTop) {
  let duration = 0.4;

    for (let i = 0; i < members.length; i++) {
      members[i].style.animation = `fadeInRight ${duration}s forwards`;
      duration += 0.4;
    }
  }
  if (window.scrollY < (document.querySelector(".team").offsetTop / 3) * 2) {
  let duration = 0.4;

    for (let i = 0; i < members.length; i++) {
      members[i].style.animation = `fadeOutLeft ${duration}s`;
      duration += 0.4;
    }
  }
  
});
