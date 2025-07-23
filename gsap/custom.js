gsap.registerPlugin(ScrollTrigger);

const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    gsap.to(element, { 
        duration: 1, 
        opacity: 1,
        x: 0,
        color: 'red',
        scrollTrigger: {
            trigger: element,
            start: "top 50%",
            markers: true,
        }
    }); 
}); 

const spacers = document.querySelectorAll('.spacer');
spacers.forEach(spacer => {
    gsap.to(spacer, { 
        backgroundColor: 'blue',
        duration: 1, 
        opacity: 0.5,
        scrollTrigger: {
            trigger: spacers,
            start: "top 50%",
            scrub:0.2,
        }
    }); 
});

gsap.to(".box", {
    x:800,
    scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2,
    },
});