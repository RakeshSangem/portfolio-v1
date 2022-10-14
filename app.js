const tl = gsap.timeline();

tl.from('.name', {
    x: -100,
    opacity: 0,
    duration: .8
})
.from('.job', {
    x: -100,
    opacity: 0,
    duration: 1
}, "-=.3")
.from('.job-2', {
    x: -100,
    opacity: 0,
    duration: .2
})
.from('.job-1', {
    x: -100,
    opacity: 0,
    duration: .2
}, '-=.2')
.from('.btn-1', {
    y: 100,
    opacity: 0,
    duration: .3
})
.from('.btn-2', {
    y: 100,
    opacity: 0,
    duration: .3
}, '-=.2')

gsap.from('.project-card', {
    scrollTrigger: {
        trigger: ".projects",
        start: "top center"
    },
    y: 150,
    opacity: 0,
    stagger: .2,
    duration: 1
})
gsap.from('.contact-container', {
    scrollTrigger: {
        trigger: ".contact-page",
        start: "top center"
    },
    y: 150,
    opacity: 0,
    stagger: .2,
    duration: 1.3
})
