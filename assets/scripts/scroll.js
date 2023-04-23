

// init project
console.log('onScroll')

const showMarkers = true;

// activate scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// activate motionPathPlugin
gsap.registerPlugin(MotionPathPlugin);



let floatIcon = gsap.to(".durabilia-icon", {
  y: -20,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
  })



  // let floatAvatar = gsap.to(".avatar", {
  //   y: "-=20",
  //   duration: 1,
  //   ease: "power1.inOut",
  //   yoyo: true,
  //   repeat: -1,
  //   })

  //   let tlAvatar = gsap.timeline({
  //     // floatAvatar on enter
  //     onEnter: () => floatAvatar.play(),
  //   });

  //   tlAvatar.add('anime');


//CREATION DE l'AVATAR-------------------------------------------------
// creation canvas et petit triangle
// create a new SVG.js canvas
let draw = SVG().addTo('.avatarContainer');

// make draw full with and height, position absolute and z-index 2
// draw.size('1920', '100%').style('position: absolute; z-index: 2;');

// draw at full size
draw.size('100%', '100%').style('position: absolute; z-index: 2;');

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

// ANIMATION AVATAR=======================================================




// add to tlScroll an animation to make the avatarGroup appear and move


// define the path
const path = {
  path: "#motionPath",
  align: "#motionPath",
  autoRotate: true,
  start: 0,
  end: 1
};


let motionPath2 = draw.path('M50,100 C50,150 150,150 150,100 S250,50 350,100').id('motionPath2').move(avatarGroup.x(), avatarGroup.y()).fill('none').stroke('none');


// // get the end point of the existing path
const pathLength = motionPath2.length();
const end = motionPath2.pointAt(pathLength);

// define the new curved path
const curvedPath = draw.path(`M${end.x},${end.y} C${end.x + 100},${end.y + 50} ${end.x + 200},${end.y - 50} ${end.x + 300},${end.y}`).id('motionPath3').fill('none').stroke('none');

// animate the avatar along the new curved path


// another path


const path2 = {
  path: "#motionPath2",
  align: "#motionPath2",
  autoRotate: true,
  start: 0,
  end: 1
};

const path3 = {
  path: "#motionPath3",
  align: "#motionPath3",
  autoRotate: true,
  start: 0,
  end: 1
};








//FIN ANIM AVATAR==========================================================



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
}, 'start')

// ANIM AVATAR
.to(avatarGroup.node, {
  scrollTrigger: {
    trigger: "#section-1",
    start: "top+=260 top",
    end: "top+=290 top",
    scrub: 1,
    toggleActions: "play reverse play reverse"
  },
  duration: 3,
  opacity: 1,
  scale: 1.2,
  ease: "power1.inOut",
  motionPath: path2
}, "start+=1")

.to(avatarGroup.node, {
  duration: 1,
  y:'+=20',
  ease: "power1.inOut",
repeat:-1,
yoyo:true,
}, "start+=2");


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



// DEFILEMENT TEXTE EN BACKGROUND

let boxWidth = 700,
    totalWidth = boxWidth * 7,  //  * n of boxes
    no01 = document.querySelectorAll("#no01 .box"),
    no02 = document.querySelectorAll("#no02 .box"),
    no03 = document.querySelectorAll("#no03 .box"),
    no04 = document.querySelectorAll("#no04 .box"),
    no05 = document.querySelectorAll("#no05 .box"),
    no06 = document.querySelectorAll("#no06 .box"),
    no07 = document.querySelectorAll("#no07 .box"),
    no08 = document.querySelectorAll("#no08 .box"),
    no09 = document.querySelectorAll("#no09 .box"),
    no10 = document.querySelectorAll("#no10 .box"),

    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

// move #no05 to bottom
gsap.set("#no05", {y: 600});
let mod = gsap.utils.wrap(0, totalWidth);

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
  })
  // set opacity depending on the one reching right
  return action
}

let master = gsap.timeline({})
.add(marquee(no01, 15, dirFromLeft))
.add(marquee(no02, 20, dirFromRight),0)
.add(marquee(no03, 25, dirFromLeft),0)
.add(marquee(no04, 25, dirFromLeft),0)
.add(marquee(no05, 25, dirFromLeft),0)
.add(marquee(no06, 25, dirFromLeft),0)
.add(marquee(no07, 25, dirFromLeft),0)
.add(marquee(no08, 25, dirFromLeft),0)
.add(marquee(no09, 25, dirFromLeft),0)
.add(marquee(no10, 25, dirFromLeft),0)
var action = gsap.timeline({defaults: {duration: 1, ease:'none'}})
// =============================




// SECTION 1------------------------------------------------------------------------------------------------------------------------------------



// ANIMATION ICONE DURABILIA-----------------------------------------------------------

let tl = gsap.timeline({});






// SECTION 2---------------------------------------------------------------------





// TIMELINE SECTION 2
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




// select cloudContainer
let cloudContainer = document.querySelector('.cloudCanvas');

// append a svg canvas with multiple white circles svg.js
let drawClouds = SVG().addTo(cloudContainer).size('100%', '100%');

// create a group

// create circles with random position and size nested in the group
for (let i = 0; i < 20; i++) {
  let cloudGroup = drawClouds.group();
  // create circles with random position and size nested in the group
  for (let i = 0; i < 20; i++) {
  let cloud = cloudGroup.circle(100).fill('#c0c3c4').move(Math.random() * 200, Math.random() * 100).radius(Math.random() * 140);
  cloudGroup.add(cloud);
  // add class to group
  cloudGroup.addClass('cloudGroup');
  // add class with index
  cloudGroup.addClass('cloudGroup-' + i);
// add to group
  }
  // move cloudgroup x
  cloudGroup.y(Math.random() * 1000);
  // move x to -100
  cloudGroup.x(Math.random() * 20);
  // cloudGroup.x(Math.random() * 200);


// place randomly on left or right
if (Math.random() > 0.5) {
  cloudGroup.cx(Math.random() * 1500);
} else {
  cloudGroup.cx(Math.random() * -1500);
  

}
}

// MINISLIDE 1------------------------

tl2.to('.text-1', {
  x:0,
  opacity: 1,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
}, 'start')

// on lance l'opacité du text-bg ici
.to('#no01', {
  opacity: 1,
  duration: 1,

  ease: "power1.inOut"
  }, 'start')

 

// add another animation after this one to fade it out
.from('#no01', {
  y:300,
  scale: 1.2,
  duration: 1,
  ease: "power1.inOut",

  }, 'start')
tl2.to('.text-1', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
}, 'start+=1')


.to('#no01', {
  opacity: 0,
  duration: 1,

  ease: "power1.inOut"
  }, 'start+=1')

  .from('.cloudGroup', {
    x:0,
    opacity: 0,
    scale: 1,
    duration: 1,

    ease: "power1.inOut"
    }, 'start+=1'
    )

  .to('.cloudCanvas', {
    opacity: 1,
    duration: 1,

    ease: "power1.inOut"
    }, 'start+=1'
  )
  .to(avatarGroup.node, {
    duration: 3,
    opacity: 1,
    scaleX: -1.2,
    ease: "power1.inOut",
    motionPath: path3
    // x:"+=300",
  }, "start+=2")
  .to('.cloudGroup', {
    x: 2000,
    duration: 1,
    ease: "power1.inOut",
    stagger: 0.1,
    opacity: 0,

    }, 'start+=2'
  )

// FIN MINISLIDE 1------------------------


// MINISLIDE 2------------------------


tl2.to('.text-2', {
  // x:-180,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start+=3')

.from('#no02', {
  y:300,
  scale: 1.2,
  duration: 1,
  ease: "power1.inOut"
  }, 'start+=3')

.to('#no02', {
  opacity: 1,
  duration: 1,
  ease: "power1.inOut"
  }, 'start+=3')


tl2.to('.text-2', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
  
}, 'start+=4')
.to('#no02', {
  opacity: 0,
  duration: 1,
  ease: "power1.inOut"
  }, 'start+=4');

// FIN MINISLIDE 2------------------------
// MINISLIDE 3------------------------

tl2.to('.text-3', {
  // x:-180,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start+=5')
.to('#no03', {
  opacity: 1  ,
  duration: 1,
  ease: "power1.inOut"
  }, 'start+=5')


tl2.to('.text-3', {
  x:0,
  opacity: 0,
  scale: 1,
  duration: 1,

  ease: "power1.inOut"
  
}, 'start+=6')

.to('#no03', {
  opacity: 0,
  duration: 1,
  ease: "power1.inOut"
  }, 'start+=6');

// MINISLIDE 4------------------------
// element-earth at center of screen

const planet = document.getElementById("planet");
  const images = [];
  const totalImages = 69;
  const imageFolderPath = "./assets/images/planet/earth-";
  
    for (let i = 0; i <= totalImages; i++) {
        images.push(imageFolderPath + i + ".png");
    }

tl2.to('.element-earth', {
  x:500,
  opacity: 1,
  scale: 1.2,
  duration: 1,
  zIndex:0,
  ease: "power1.inOut"
}, 'start+=7')

.to(['#no04', '#no05'], {
  opacity: 1,
}, 'start+=7')

.to('.element-earth', {
  scrollTrigger: {
    normalizeScroll: {
        momentum: self => Math.min(20, self.velocityY*2),
      },
    onUpdate: (scrollTrigger) => {
      let progress = scrollTrigger.progress*3;
      let imageIndex = Math.floor(progress * (totalImages+1));
      let currentImageIndex = 0;
        currentImageIndex = imageIndex;
        currentImageIndex>=images.length? currentImageIndex=images.length-1:currentImageIndex;
        let imageSrc = images[currentImageIndex];
        planet.src = imageSrc;
    },
  },
}, 'start+=9')

// hide avatar
.to(avatarGroup.node, {
  // x:"+=600",
  xPercent:+600,
  scaleX: -1.2,
  ease: "power1.inOut",
}, "start+=7");





// SECTION 3----------------------------------------------------------------------------------------------------------------------

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section-3',
    start: 'top top',
    end: '+=300%',
    scrub: 1,
    // markers: true,
    // pin content with lots of pinSpacing
    pin: true,
    pinSpacing: true,
    //toggleActions: "play reverse play reverse"
  }
});



// create timeline with scrolltrigger



tl3
    .add('start')
    .to(avatarGroup.node, {
      // x:"+=600",
      yPercent:+700,
      scaleX: -1.2,
      ease: "power1.inOut",
    }, "start")
    
    .to('.info-container-1', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start')

    .to('#no06', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start')


    .from('#no06', {
        y: 300,
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut"
    }, 'start')

    .to('.info-container-1', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=1')

    .to('#no06', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=1')



    .from('#no07', {
        y: 300,
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=2')


    .to('#no07', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=2')

    .to('.info-container-2', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=2')
    .to(avatarGroup.node, {
      // x:"+=600",
      xPercent:-700,
      scaleX: 1.2,
      ease: "power1.inOut",
    }, "start+=2")


    .to('.info-container-2', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=3')

    .to('#no07', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=3')

    .from('#no08', {
        y: 300,
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=4')


    .to('#no08', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=4')

    .to('.info-container-3', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=4')

    .to('.info-container-3', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }, 'start+=5');


  


// SECTION 4----------------------------------------------------------------------------------------------------------------------
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const overlay = card.querySelector('.card-overlay');

  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = 1;
    card.style.transform = 'scale(1.2)';
    card.style.zIndex= '6';
  });

  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = 0;
    card.style.transform = 'scale(1)';
    card.style.zIndex= '1';
  });
});


// SECTION 9----------------------------------------------------------------------------------------------------------------------  
// CARRES SDG
// Select the SDG blocks container
const sdgContainer = document.querySelector('.sdg-blocks-container');

// Select all the SDG blocks
const sdgBlocks = sdgContainer.querySelectorAll('.sdg-block');

// Loop through each SDG block
sdgBlocks.forEach((sdgBlock) => {
  // Select the SDG overlay
  const sdgOverlay = sdgBlock.querySelector('.sdg-overlay');

  // Hide the overlay initially
  sdgOverlay.style.display = 'none';

  // Add event listeners for mouseenter and mouseleave events
  sdgBlock.addEventListener('mouseenter', () => {
    // Show the overlay on mouseenter
    sdgOverlay.style.display = 'block';
    sdgOverlay.style.transform = 'scale(1.2)';
    sdgOverlay.style.zIndex= '6';
  });

  sdgBlock.addEventListener('mouseleave', () => {
    // Hide the overlay on mouseleave
    sdgOverlay.style.display = 'none';
    sdgOverlay.style.transform = 'scale(1)';
    sdgOverlay.style.zIndex= '1';
  });
});




// timeline section-4
let tlCard4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-4",
    start: "top center",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: true,

  }
});




tlCard4
tlCard4.add('start')
.from('#no09', {
  y: 0,
  scale: 1.2,
  duration: 1,
  ease: "power1.inOut"
}, 'start')


.to('#no09', {
  opacity: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start')











// SECTION 9----------------------------------------------------------------------------------------------------------------------

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
tlCard9
.add('start')
.from('#no10', {
  y: 0,
  scale: 1.2,
  duration: 1,
  ease: "power1.inOut"
}, 'start')
.to('#no10', {
  opacity: 1,
  duration: 1,
  ease: "power1.inOut"
}, 'start')



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








// gsap.utils.toArray(".section-10-item").forEach((section, index) => {
//   gsap.to(section, {
//       scrollTrigger: {
//           trigger: section,
//           start: "bottom+=600 center",
//           end: "+=200",
//           scrub: 1,
//           // markers: showMarkers,
//           //toggleActions: "play reverse play reverse"
//       },
//       backgroundColor: "#000",
//       color: "#fff",
//       duration: 0.2,
//       ease: "power1.inOut",
//       delay: index * 0.1, // Stagger the animations
//       scale: 1,

//   });

//   //  REVERT TO INITIAL STATE AFTER
//   gsap.to(section, {
//       scrollTrigger: {
//           trigger: section,
//           start: "bottom+=600 center",
//           end: "+=350",
//           scrub: 1,
//           // markers: showMarkers,
//           //toggleActions: "play reverse play reverse"
//       },
//       backgroundColor: "#ddd",
//       color:"#000",
//       duration: 0.2,
//       opacity: 0.5,
//       ease: "power1.inOut",
//       // scale: 0.1 // Scale down the card
//   });
// });


















// function animateText(selector, bgSelector, start) {
//   const tl = gsap.timeline({paused:true});

//   tl.to(selector, {
//     x:0,
//     opacity: 1,
//     scale: 1,
//     duration: 1,
//     ease: "power1.inOut"
//   }, start)

//   // Fade in the text-bg
//   .to(bgSelector, {
//     opacity: 1,
//     duration: 1,
//     ease: "power1.inOut"
//   }, start)

//   // Add another animation after this one to fade it out
//   .from(bgSelector, {
//     y:300,
//     scale: 1.2,
//     duration: 1,
//     ease: "power1.inOut"
//   }, start)

//   // Fade out the text and text-bg
//   .to(selector, {
//     x:0,
//     opacity: 0,
//     scale: 1,
//     duration: 1,
//     ease: "power1.inOut"
//   }, `${start}+=1`)

//   .to(bgSelector, {
//     opacity: 0,
//     duration: 1,
//     ease: "power1.inOut"
//   }, `${start}+=1`);

//   return tl;
// }



// tl2.add('start');


// animateText('.text-1', '#no01', 'start').play();
// animateText('.text-2', '#no02', 'start+=2').play();
// animateText('.text-3', '#no03', 'start+=4').play();




































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

