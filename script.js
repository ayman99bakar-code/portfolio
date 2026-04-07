const projects = [
  { name: "Project 1", desc: "My first project", speed: 0.01, radius: 120, angle: 0, link:'https://ayman99bakar-code.github.io/Image-gallery/' },
  { name: "Project 2", desc: "My second project", speed: 0.008, radius: 160, angle: 1, link:'https://ayman99bakar-code.github.io/Image-gallery/'},
  { name: "Project 3", desc: "My third project", speed: 0.006, radius: 200, angle: 2, link:'https://ayman99bakar-code.github.io/Image-gallery/'},
  { name: "Project 4", desc: "My fourth project", speed: 0.009, radius: 240, angle: 3, link:'https://ayman99bakar-code.github.io/Image-gallery/'},
  { name: "Project 5", desc: "My fifth project", speed: 0.007, radius: 280, angle: 4, link:'https://ayman99bakar-code.github.io/Image-gallery/'}
];

const container = document.getElementById("orbit-container");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// CREATE PLANETS
var num = 0;
projects.forEach((p) => {
  
  const el = document.getElementById("el" + num);
  p.el = el;
  num += 1;
  el.addEventListener("click", () => {
    document.getElementById("project-info").innerHTML = `
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <button onclick="window.open('${p.link}', '_blank')">
  Open Project
</button>
    `;
  });
  el.addEventListener("mouseenter", () => paused = true);
  el.addEventListener("mouseleave", () => paused = false);
});
let paused = false;
function animate() {
  if (!paused) {
    projects.forEach((p) => {
      p.angle += p.speed;

      const x = centerX + Math.cos(p.angle) * p.radius;
      const y = centerY + Math.sin(p.angle) * p.radius;

      p.el.style.left = x + "px";
      p.el.style.top = y + "px";
    });
  }

  requestAnimationFrame(animate);
}
animate();
projects.forEach((p) => {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");
  orbit.style.width = p.radius * 2 + "px";
  orbit.style.height = p.radius * 2 + "px";
  container.appendChild(orbit);
});
document.getElementById("sun").addEventListener("click", () => {

  document.getElementById("project-info").innerHTML = `
    <h2>About Me</h2>
    <p>
      My name is Ayman Bakkar and I'm a web developer who enjoys building interactive and visually engaging experiences.
      I focus on using JavaScript and CSS to create dynamic, user-friendly interfaces.
    </p>
    <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
    <p><strong>Contact:</strong> ayman99bakar@gmail.com</p>
  `;
});