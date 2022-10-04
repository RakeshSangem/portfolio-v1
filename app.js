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
    duration: .6
})
.from('.job-1', {
    x: -100,
    opacity: 0,
    duration: .6
}, '-=.2')
.from('.btn-1', {
    y: 100,
    opacity: 0,
    duration: .5
})
.from('.btn-2', {
    y: 100,
    opacity: 0,
    duration: .5
}, '-=.2')


gsap.from('.project-card', {
    scrollTrigger: {
        trigger: ".project-card",
        start: "top center"
    },
    y: -150,
    opacity: 0,
    stagger: .2,
    duration: .5
})