console.log('onScroll')


// activate scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Définition des timelines

let tlScroll = gsap.timeline({});
tlScroll.add('start');


// Zoom sur suisse-----------------

tlScroll.from(".section-4-item", {
    scrollTrigger: {
        trigger: "#section-4",
        
         start: "top center",
         end: "+=200",
        scrub: 1,
        markers: true,
        //toggleActions: "play reverse play reverse"
        },
        //opacity: 0,
        x: -2000,
        duration: 1,
        stagger: 0.5,
        ease: "power1.inOut"
        }, 'start');


// animation logo durabilia-----------------

tlScroll.from("#logo-durabilia", {
    scrollTrigger: {
        trigger: "#section-5",
        start: "top center",
        end: "+=200",
        scrub: 1,
        markers: true,
        //toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
}, 'start');



// text reveal sur section 10-----------------

// animate section 10
tlScroll.from(".section-10-item", {
    scrollTrigger: {
        trigger: "#section-10",
        start: "top center",
        end: "+=200",
        scrub: 1,
        markers: true,
        //toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: -2000,
    duration: 1,
    stagger: 0.5,
    ease: "power1.inOut"
}, 'start');

// select all elements and animate background of the element who's on scroll
gsap.utils.toArray(".section-10-item").forEach((section) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "+=50",
            scrub: 1,
            markers: true,
            //toggleActions: "play reverse play reverse"
        },
        backgroundColor: "#000",
        color:"#fff",
        duration: 0.2,
        ease: "power1.inOut"
    });

//  REVERT TO INITIAL STATE AFTER
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "bottom center",
            end: "+=50",
            scrub: 1,
            markers: true,
            //toggleActions: "play reverse play reverse"
        },
        backgroundColor: "#fff",
        color:"#000",
        duration: 0.2,
        ease: "power1.inOut"

    });
});


