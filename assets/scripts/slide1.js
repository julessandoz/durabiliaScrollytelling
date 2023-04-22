
let tlScroll = gsap.timeline({});
tlScroll.add('start');

// from opacity 0 to 1 and scale 1 to 0
tlScroll.to(".durabilia-icon", {
    scrollTrigger: {
        trigger: "#section-1",  
        start: "top+=1% top",
        end: "+=10%",
        scrub: 1,
        // markers: true,
        // pin content with lots of pinSpacing
        pin: true,
        pinSpacing: true,
        onEnter: () => floatIcon.pause(),

        //toggleActions: "play reverse play reverse"
    },
    // x:-180,
    opacity: 1,
    scale: 0.5,
    duration: 1,
    ease: "power1.inOut"
}, 'start');


        // ANIMATION TEXT--------------------------


tlScroll.to(".logo-text", {
  scrollTrigger: {
      trigger: "#section-1",  
      start: "top+=15 top",
      end: "+=150",
      scrub: 1,
      // markers: true,
      // pin content with lots of pinSpacing
      pin: true,
      pinSpacing: true,

      //toggleActions: "play reverse play reverse"
  },
  // x:-180,
opacity:1,
  ease: "power1.inOut"
}, 'start');