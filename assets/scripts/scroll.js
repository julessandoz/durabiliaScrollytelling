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
        
         start: "top bottom",
         end: "+=200",
        scrub: 1,
        // markers: true,
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
        // markers: true,
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
        // pin: true,
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



// section 6 7 8

// add animation on section-6
let tlCard6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-6",
      start: "top top",
      end: "center top",
      scrub: true,
      pinSpacing: false,
      markers: true,
    }
  });

  tlCard6.fromTo(".community", {opacity: 0}, {
    opacity: 1,
    duration: 0.5
  })




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
//         markers: true,
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
            start: "bottom+=600 center",
            end: "+=200",
            scrub: 1,
            markers: true,
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
            start: "bottom+=600 center",
            end: "+=350",
            scrub: 1,
            markers: true,
            //toggleActions: "play reverse play reverse"
        },
        backgroundColor: "#ddd",
        color:"#000",
        duration: 0.2,
        opacity: 0.5,
        ease: "power1.inOut",
        // scale: 0.1 // Scale down the card
    });
});


// SECTION 9------------------------------------------------  
// CARRES SDG

// const section = document.querySelector("#section-10");
// const spacer = document.createElement("div");
// spacer.style.height = '3900px';
// // section.parentNode.appendChild(spacer, section);

// // start gsap animation on section-9
let tlCard9 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-9",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: true,
      pinnedContainer: '.sect9-cont',
      
    }
  });




//   FLOATING BLOCKS ANIMATION
gsap.utils.toArray(".sdg-block").forEach((section, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 50%",
      scrub: true
    }
  });
  tl.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    yoyo: true,
    delay: index * 0.1,
  });


    // gsap.to(section, {
    //     // create a random y position
    //     y: "random(-5, 5, 1)",
    //     duration: 3,
    //     ease: "power1.inOut",
    //     delay: index * 0.1, // Stagger the animations
    //     scale: 1,
    //     repeat: -1,
    //     yoyo: true,

    // });

});


// make a from 0 opacity and -30 x position when reaching #section-9


// make .sdg-blocks dissapear randomly on scroll




// PARTICULES CARREES!!

// Create a full size canvas, set it to absolute and append it to section-9
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
document.querySelector("#section-9").appendChild(canvas);

// Create a canvas context
const ctx = canvas.getContext("2d");


function drawSquare(x, y, width, height, color) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  // add littleSquare class to all squares
  ctx.fillStyle = color;
// add random blur value
  ctx.filter = `blur(${Math.random() * 12}px)`;

  ctx.fill();
}



// draw multiple square with random size up until 40
for (let i = 0; i < 10; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const width = Math.random() * 40;
  // const height = Math.random() * 40;
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  drawSquare(x, y, width, width, color);

}


// create  red little square with svg.js and append them to canvas with class .littlesquares





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