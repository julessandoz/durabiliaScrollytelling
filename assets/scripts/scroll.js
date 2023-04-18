console.log('onScroll')


// activate scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// add scrollTrigger to #section-4 from opacity 0 toopacity 1
// gsap.to("#section-4", {
//     scrollTrigger: {
//         trigger: "#section-4",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: 1,

//     },
//     opacity: 1,
//     duration: 1,
//     ease: "none"
// });

// gsap.fromTo("#section-4", {
//     scrollTrigger: {
//         trigger: "#section-4",
//         start: "top top",
//         end: "+=200",
//         scrub: 1,
//         markers: true,
//         toggleActions: "play reverse play reverse"
//     },
//     x: -2000,
//     duration: 1,
// // easing power 1 is linear
// }, {
//     x:0,
//     duration: 1,
//     ease: "none"
// });


// gsap.fromTo("#section-4", {
//     scrollTrigger: {
//         trigger: "#section-4",
//         start: "top middle",
//         end: "+=200",
//         scrub: true,
//         markers: true,
//         toggleActions: "play reverse play reverse"
//     },
//     x: -2000,
// // easing power 1 is linear
// }, {
//     x:0,
//     duration: 1,
//     ease: "none"
// });

gsap.from("#section-4", {
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
        ease: "power1.inOut"
        });