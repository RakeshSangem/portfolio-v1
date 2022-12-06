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
              <a href="${item.github}">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                 <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
                GitHub
              </a>
              <a href="${item.live}">
                <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/>
                </svg>
                Live site
              </a>
            </div>
        </article>
    
    `;
  });
};
printProjects();
