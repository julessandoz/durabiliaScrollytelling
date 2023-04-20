console.log('onScroll')

const showMarkers = false;

// activate scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Définition des timelines

let tlScroll = gsap.timeline({});
tlScroll.add('start');



// Zoom sur suisse-----------------

tlScroll.from(".section-4-item", {
    scrollTrigger: {
        trigger: "#section-4",
        
         start: "top bottom",
         end: "+=200",
        scrub: 1,
        markers: showMarkers,
        toggleActions: "play reverse play reverse"
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
        markers: showMarkers,
        //toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
}, 'start');




// section 4--------------------------------------------
// Add animations to the timeline

let tlCard4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-4",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false
      }
    }
  );
  

tlCard4.to(".collab-container", {
    opacity: 1,
    duration: 0.5
  })


//   section 5----------------------------------------------------------
  let tlCard5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-4",
      start: "bottom top",
      endTrigger: "#section-6",
      end: "top top",
      scrub: true,
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        tlCard5.to("#logo-durabilia", {
          opacity: 1,
          scale: 1,
          duration: 0.5
        });
      },
      onLeave: () => {
        tlCard5.to("#logo-durabilia", {
          opacity: 0,
          scale: 0,
          duration: 0.5
        });
      }
    }
  });


        // logo anim---------------
// Create a timeline for the logo animation
var tlLogo = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-5",
        start: "top top", // Account for the height of the spacer element
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false
    }
});

// Add an animation to the timeline
tlLogo.to("#logo-durabilia", {
    // opacity: 1,
    scale: 1.2,
    duration: 0.5,
    ease: "power1.inOut"
});


//   // Create another timeline for section-5
// var tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-5",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//       pin: true,
//       pinSpacing: false
//     }
//   });
  
//   // Add animations to the timeline
//   tl2.to("#logo-durabilia", {
//     opacity: 1,
//     scale: 1,
//     duration: 0.5
//   });
  

// text reveal sur section 10-----------------

// animate section 10
// tlScroll.from(".section-10-item", {
//     scrollTrigger: {
//         trigger: "#section-10",
//         start: "top center",
//         end: "+=200",
//         scrub: 1,
//         markers: showMarkers,
//         //toggleActions: "play reverse play reverse"
//     },
//     opacity: 0,

//     duration: 1,
//     stagger: 0.5,
//     ease: "power1.inOut"
// }, 'start');



gsap.utils.toArray(".section-10-item").forEach((section, index) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "+=100",
            scrub: 1,
            markers: showMarkers,
            //toggleActions: "play reverse play reverse"
        },
        backgroundColor: "#000",
        color: "#fff",
        duration: 0.2,
        ease: "power1.inOut",
        delay: index * 0.1, // Stagger the animations
        scale: 1,
 
    });

    //  REVERT TO INITIAL STATE AFTER
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "bottom center",
            end: "+=250",
            scrub: 1,
            markers: showMarkers,
            //toggleActions: "play reverse play reverse"
        },
        backgroundColor: "var(--color-primary)",
        color:"var(--color-quinary)",
        duration: 0.2,
        opacity: 0.5,
        ease: "power1.inOut",
        // scale: 0.1 // Scale down the card
    });
});


  
//   const salesPoints = document.querySelector(".sales-points-container");
  
//   ScrollTrigger.create({
//     trigger: salesPoints,
//     start: "top center",
//     onEnter: () => {
//       gsap.to(".card-container", {
//         scale: 1,
//         duration: 1,
//         ease: "none"
//       });
//       ScrollTrigger.create({
//         trigger: ".card-container",
//         start: "top top",
//         end: "+=100%",
//         pin: true,
//         pinSpacing: false
//       });
//     },
//     onLeaveBack: () => {
//       gsap.to(".card-container", {
//         scale: 0,
//         duration: 1,
//         ease: "none"
//       });
//     }
//   });