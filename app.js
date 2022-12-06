import projects from "./assets/projects.js";

const projectsContainer = document.querySelector(".project-cards");

const tl = gsap.timeline();

tl.from(".name", {
  x: -100,
  opacity: 0,
  duration: 0.8,
})
  .from(
    ".job",
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    "-=.3"
  )
  .from(".job-2", {
    x: -100,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    ".job-1",
    {
      x: -100,
      opacity: 0,
      duration: 0.2,
    },
    "-=.2"
  )
  .from(".btn-1", {
    y: 100,
    opacity: 0,
    duration: 0.3,
  })
  .from(
    ".btn-2",
    {
      y: 100,
      opacity: 0,
      duration: 0.3,
    },
    "-=.2"
  );

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
  },
  y: 150,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});
gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact-page",
    start: "top center",
  },
  y: 150,
  opacity: 0,
  stagger: 0.2,
  duration: 1.3,
});

projects.map((item) => {
  console.log(item);
});

const printProjects = () => {
  projects.map((item) => {
    projectsContainer.innerHTML += `
        <article class="project-card">
            <div class="imageContainer">
              <img src="${item.image}" alt="" />
            </div>
            <div class="project-details">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
            </div>
            <div class="project-links">
              <a href="${item.github}">Github</a>
              <a href="${item.live}">Live site</a>
            </div>
        </article>
    
    `;
  });
};
printProjects();
