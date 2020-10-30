const tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#background",
        start: "top top",
        scrub: 1
    }
});

const element = gsap.utils.toArray('.parallax').forEach(element => {
    const depth = element.dataset.depth;
    const shifting = -(depth * (element.offsetHeight* 1.5));
    tl.to(element, {
        y: shifting,
        ease:"none"
    },0)
    .to('#overlay', {
        opacity: 0,
        ease:"none"
    },0)
});

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#contents",
        start: "top center",
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('.images',{
    stagger: .3,
    opacity: 0,
    delay: .1,
    duration: .8,
    ease: 'Expo.easeInOut'
})

.from('.images #img1',{
    stagger: .1,
    opacity: 0,
    duration: .8,
    ease: 'Expo.easeInOut'
})

.from('.images #img2',{
    stagger: .1,
    opacity: 0,
    duration: .8,
    ease: 'Expo.easeInOut'
})

.from('.images #img3',{
    stagger: .1,
    opacity: 0,
    duration: .8,
    ease: 'Expo.easeInOut'
})

.from('.images #img4',{
    stagger: .1,
    opacity: 0,
    duration: .8,
    ease: 'Expo.easeInOut'
})

.from('#contents p',{
    y:10,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})