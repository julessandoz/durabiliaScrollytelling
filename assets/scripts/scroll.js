console.log('onScroll')

const showMarkers = true;

// activate scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// activate motionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

// Définition des timelines





// SECTION 1------------------------------------------------------------------------------------------------------------------------------------



// ANIMATION ICONE DURABILIA-----------------------------------------------------------




let tl = gsap.timeline({});
let tlScroll = gsap.timeline({});
let tlAvatar = gsap.timeline({});
tlScroll.add('start');
tlAvatar.add('anime');

let floatIcon = gsap.to(".durabilia-icon", {
  y: -20,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
  })


// from opacity 0 to 1 and scale 1 to 0
tlScroll.to(".durabilia-icon", {
    scrollTrigger: {
        trigger: "#section-1",  
        start: "top+=5 top",
        end: "+=10",
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

// FIN ANIM DURABILIA---------------------------------------------------


//CREATION DE l'AVATAR-------------------------------------------------
// creation canvas et petit triangle
// create a new SVG.js canvas
let draw = SVG().addTo('.avatarContainer');

// make draw full with and height, position absolute and z-index 2
draw.size('1000', '600').style('position: absolute; z-index: 2;');

// create a triangle
let triangle = draw.polygon('0,50 25,0 50,50').fill('#FFEBC3').stroke({ width: 3, color: '#EED4A0' })


// create a <g> element to hold the eyes
let avatarGroup = draw.group().addClass('avatar');

// create the left eye
let leftEye = draw.rect(10, 10).radius(5).fill('#000000').move(47, 110);

// create the right eye
let rightEye = draw.rect(10, 10).radius(5).fill('#000000').move(23, 110);


// add the eyes to the <g> element
avatarGroup.add(leftEye);
avatarGroup.add(rightEye);
avatarGroup.move(11, 19);
avatarGroup.add(triangle);

avatarGroup.move(300,200)

// change leftEye z-index to 4
leftEye.front();
// and triangle to back
triangle.back();

// create an arc path with id "motionPath" at avatarGroup position
let motionPath = draw.path("M 50 50 A 50 50 0 0 1 150 50").id("motionPath").move(avatarGroup.x(), avatarGroup.y()).fill('none').stroke('none');
avatarGroup.opacity(0);

// ANIMATION AVATAR-------------------------------

// add to tlScroll an animation to make the avatarGroup appear and move
tlAvatar.to(avatarGroup.node, {
  scrollTrigger: {
      trigger: "#section-1",
      start: "top+=165 top",
      end:"top+=160 top",

      scrub: 1,
      // markers: true,
      // pin content with lots of pinSpacing
      pin: true,
      pinSpacing: true,
      //toggleActions: "play reverse play reverse"
  },
// move x and y randomly, rotate slightly, and scale up


  duration: 1,
  opacity: 1,
  scale: 1.2,
  ease: "power1.inOut"
}, 'anime');


// define the path
const path = {
  path: "#motionPath",
  align: "#motionPath",
  autoRotate: true,
  start: 0,
  end: 1
};


let motionPath2 = draw.path('M50,100 C50,150 150,150 150,100 S250,50 350,100').id('motionPath2').move(avatarGroup.x(), avatarGroup.y()).fill('none').stroke('none');

const path2 = {
  path: "#motionPath2",
  align: "#motionPath2",
  autoRotate: true,
  start: 0,
  end: 1
};



tlAvatar.to(avatarGroup.node, {
  scrollTrigger: {
      trigger: "#section-1",
      start: "top+=260 top",
      end:"top+=290 top",
      scrub: 1,
      // markers: true,
      // pin content with lots of pinSpacing
      // pin: true,
      // pinSpacing: true,
      toggleActions: "play reverse play reverse"
  },
  duration: 3,
  opacity: 1,
  scale: 1.2,
  ease: "power1.inOut",
  // add path and rotateX
  motionPath: path2,

}, 'anime');

tlAvatar.to(avatarGroup.node, {
  scrollTrigger: {
      trigger: "#section-1",
      start: "top+=320 top",
      end:"top+=380 top",
      scrub: 1,
      // markers: true,
      // pin content with lots of pinSpacing
      // pin: true,
      // pinSpacing: true,
      toggleActions: "play reverse play reverse",


  },
  duration: 6,

  ease: "power1.inOut",
  // add path and rotateX
y: 200,

}, 'anime');


//FIN ANIM AVATAR--------------------------------------------




// SECTION 2---------------------------------------------------------------------


// create timeline with scrolltrigger



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section-2',
    start: 'top top',
    end: '+=2000',
    scrub: 1,
    // markers: true,
    // pin content with lots of pinSpacing
    pin: true,
    pinSpacing: true,
    //toggleActions: "play reverse play reverse"
  }
});

let bgTl = gsap.timeline({});
bgTl.add('play');


// SLIDE 1------------------------

// take bg-text-1 text and repeat it on a line
// let bgText1 = document.querySelector('.bg-text-1');

// for (let i = 0; i < 6; i++) {
//   let bgText1Clone = bgText1.cloneNode(true);
//   bgText1Clone.classList.add('bg-text-1-clone');
//   bgText1.parentNode.appendChild(bgText1Clone);
//   // move the clone to the right
//   bgText1Clone.style.left = i * 420 + 'px';
//   // add the clone to the timeline
//   bgTl.fromTo(bgText1Clone, {x: -6000}, {
//     x:1600,
//     scale: 1,
//     duration: 10,
//     repeat: -1, 
//     ease: "none",

//   }, 'play');

// }

gsap.set('.infiniterapper',{xPercent:-50,yPercent:-50})
gsap.set('#no02',{y:50})


// clone .box 5 times and add to #no01


// get screen size as boxWidth


var boxWidth = 250,
    totalWidth = boxWidth * 7,  //  * n of boxes
    no01 = document.querySelectorAll("#no01 .box"),
    no02 = document.querySelectorAll("#no02 .box"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction){
  gsap.set(which, {
    x:function(i) {
      return i * boxWidth;
    }
  });
  var action = gsap.timeline()
  .to(which,  {
  x: direction,
  modifiers: {
    x: x => mod(parseFloat(x)) + "px"
  },
    duration:time, ease:'none',
    repeat:-1,
  });
  return action
}

var master = gsap.timeline({paused:true})
.add(marquee(no01, 15, dirFromLeft))
.add(marquee(no02, 20, dirFromRight),0)

// =============================

var action = gsap.timeline({defaults: {duration: 1, ease:'none'},
  scrollTrigger: {
    trigger: "#section-2",
    //scrub: 0.5,
    start: 'top top',
    end: "bottom top",
    onEnter: isActive => master.play(),
    onLeave: isActive => master.pause(),
    onLeaveBack: isActive => master.pause(),
    onEnterBack: isActive => master.play(),
    markers:true
  }})





tl2.add('start');


tl2.to('.text-1', {
  x:0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start')

// on lance l'opacité du text-bg ici
// .to('.bg-text-1', {
//   opacity: 1,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start')


// add another animation after this one to fade it out
tl2.to('.text-1', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start+=1')

// .to('.bg-text-1', {
//   opacity: 0,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start+=1')

// FIN SLIDE 1------------------------


// SLIDE 2------------------------


tl2.to('.text-2', {
  // x:-180,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start+=2')

// .to('.bg-text-2', {
//   opacity: 1,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start+=2')


tl2.to('.text-2', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
  
}, 'start+=3')
// .to('.bg-text-2', {
//   opacity: 0,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start+=3');

// FIN SLIDE 2------------------------
// SLIDE 3------------------------

tl2.to('.text-3', {
  // x:-180,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start+=4')
// .to('.bg-text-3', {
//   opacity: 1  ,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start+=4')


tl2.to('.text-3', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
  
}, 'start+=5')
// .to('.bg-text-3', {
//   opacity: 0,
//   duration: 1,
//   ease: "power1.inOut"
//   }, 'start+=5');






















gsap.utils.toArray(".section-10-item").forEach((section, index) => {
  gsap.to(section, {
      scrollTrigger: {
          trigger: section,
          start: "bottom+=600 center",
          end: "+=200",
          scrub: 1,
          // markers: showMarkers,
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
          // markers: showMarkers,
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

























































// // Zoom sur suisse-----------------

// tlScroll.from(".section-4-item", {
//     scrollTrigger: {
//         trigger: "#section-4",
        
//          start: "top bottom",
//          end: "+=200",
//         scrub: 1,
//         // markers: showMarkers,
//         toggleActions: "play reverse play reverse"
//         },
//         //opacity: 0,
//         x: -2000,
//         duration: 1,
//         stagger: 0.5,
//         ease: "power1.inOut"
//         }, 'start');


// // animation logo durabilia-----------------

// tlScroll.from("#logo-durabilia", {
//     scrollTrigger: {
//         trigger: "#section-5",
//         start: "top center",
//         end: "+=200",
//         scrub: 1,
//         // markers: showMarkers,
//         //toggleActions: "play reverse play reverse"
//     },
//     opacity: 0,
//     duration: 1,
//     ease: "power1.inOut"
// }, 'start');




// // section 4--------------------------------------------
// // Add animations to the timeline

// let tlCard4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#section-4",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         // pin: true,
//         pinSpacing: false
//       }
//     }
//   );
  

// tlCard4.to(".collab-container", {
//     opacity: 1,
//     duration: 0.5
//   })


// //   section 5----------------------------------------------------------
//   let tlCard5 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-4",
//       start: "bottom top",
//       endTrigger: "#section-6",
//       end: "top top",
//       scrub: true,
//       pin: true,
//       pinSpacing: false,
//       onEnter: () => {
//         tlCard5.to("#logo-durabilia", {
//           opacity: 1,
//           scale: 1,
//           duration: 0.5
//         });
//       },
//       onLeave: () => {
//         tlCard5.to("#logo-durabilia", {
//           opacity: 0,
//           scale: 0,
//           duration: 0.5
//         });
//       }
//     }
//   });


//         // logo anim---------------
// // Create a timeline for the logo animation
// var tlLogo = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#section-5",
//         start: "top top", // Account for the height of the spacer element
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//         pinSpacing: false
//     }
// });

// // Add an animation to the timeline
// tlLogo.to("#logo-durabilia", {
//     // opacity: 1,
//     scale: 1.2,
//     duration: 0.5,
//     ease: "power1.inOut"
// });



// // section 6 7 8

// // fade in section-6 content on enter and fade out on leave
// let tlCard6 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-6",
//       start: "top top",
//       end: "center top",
//       scrub: true,
//       pin: false,
//       pinSpacing: false,
//       markers: showMarkers,
//     }
//   });

//   tlCard6.to("#section-6", {
//     opacity: 0,
//     duration: 0.5


//   })



//   //  pin section 7 when scrolling
// let tlCard7 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-7",
//       start: "top top",
//       end: "bottom top",
//       // scrub: true,
//       pin: false,
//       pinSpacing: true
//     }
//   });

// // pin section 8 when scrolling
// let tlCard8 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-8",
//       start: "top top",
//       end: "bottom top",
//       // scrub: true,
//       pin: true,
//       pinSpacing: false
//     }
//   });


// add animation on section-6
// let tlCard6 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section-6",
//       start: "top top",
//       end: "center top",
//       scrub: true,
//       pinSpacing: false,
//       markers: showMarkers,
//     }
//   });

//   tlCard6.fromTo(".community", {opacity: 0}, {
//     opacity: 1,
//     duration: 0.5
//   })




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

