window.addEventListener('load', () => {
  alert("Bienvenue dans l'univers de Letry_147 ! 🎧🎮");
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
sections.forEach(section => observer.observe(section));
