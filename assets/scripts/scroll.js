// init project
console.log("onScroll");

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
});

/* The code is creating different shapes of avatars using SVG.js library. It creates a canvas and
adds different shapes such as triangle, square, pentagon, hexagon, heptagon, octagon, nonagon,
decagon, and circle. It also adds eyes to each shape and groups them together in a <g> element. It
sets the position of each avatar and sets their opacity to 0. It also creates an arc path with id
"motionPath" at the position of the avatarGroup. */

//CREATION DE l'AVATAR-------------------------------------------------
// creation canvas et petit triangle
// create a new SVG.js canvas
let draw = SVG().addTo(".avatarContainer");

// make draw full with and height, position absolute and z-index 2
// draw.size('1920', '100%').style('position: absolute; z-index: 2;');

// draw at full size
draw.size("100%", "100%").style("position: absolute; z-index: 2;");

// create a triangle
let triangle = draw
  .polygon("0,50 25,0 50,50")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// create a <g> element to hold the eyes
let avatarGroup = draw.group().addClass("avatar");

// create the left eye
let leftEye = draw.rect(10, 10).radius(5).fill("#000000").move(47, 110);

// create the right eye
let rightEye = draw.rect(10, 10).radius(5).fill("#000000").move(23, 110);

// add the eyes to the <g> element
avatarGroup.add(leftEye);
avatarGroup.add(rightEye);
avatarGroup.move(11, 19);
avatarGroup.add(triangle);

avatarGroup.move(300, 200);

// change leftEye z-index to 4
leftEye.front();
// and triangle to back
triangle.back();

// create an arc path with id "motionPath" at avatarGroup position
let motionPath = draw
  .path("M 50 50 A 50 50 0 0 1 150 50")
  .id("motionPath")
  .move(avatarGroup.x(), avatarGroup.y())
  .fill("none")
  .stroke("none");

avatarGroup.opacity(0);

// CREATION DU SQUAREAVATAR-------------------------------------------------
// create a square
let square = draw
  .rect(50, 50)
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });
// add squareBody class to square
square.addClass("squareBody");

// create a <g> element to hold the eyes
let squareAvatarGroup = draw.group().addClass("squareAvatar");

// create the left eye
let squareLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(20, 60);

// create the right eye
let squareRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(50, 60);

// add the eyes to the <g> element
squareAvatarGroup.add(squareLeftEye);
squareAvatarGroup.add(squareRightEye);
squareAvatarGroup.move(11, 19);
squareAvatarGroup.add(square);

squareAvatarGroup.move(300, 200);

// and square to back
square.back();
squareAvatarGroup.opacity(0);
// set .squareAvatar to opacity 0
document.querySelector(".squareAvatar").style.opacity = 0;

// PENTAGONAVATAR-------------------------------------------------
// create a pentagon
let pentagon = draw
  .polygon("0,50 43,29 27,-37 -27,-37 -43,29")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });
// add pentagonBody class to pentagon
pentagon.addClass("pentagonBody");

// create a <g> element to hold the eyes
let pentagonAvatarGroup = draw.group().addClass("pentagonAvatar");

// create the left eye
let pentagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(15, 60);

// create the right eye
let pentagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(35, 60);

// add the eyes to the <g> element
pentagonAvatarGroup.add(pentagonLeftEye);
pentagonAvatarGroup.add(pentagonRightEye);
pentagonAvatarGroup.move(-30, -30);
pentagonAvatarGroup.add(pentagon);

pentagonAvatarGroup.move(300, 200);

pentagon.back();

// HEXAGONAVATAR-------------------------------------------------
// create a hexagon
let hexagon = draw
  .polygon("0,50 43,25 43,-25 0,-50 -43,-25 -43,25")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });
// add hexagonBody class to hexagon
hexagon.addClass("hexagonBody");

// create a <g> element to hold the eyes
let hexagonAvatarGroup = draw.group().addClass("hexagonAvatar");

// create the left eye
let hexagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(15, 60);

// create the right eye
let hexagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(35, 60);

// add the eyes to the <g> element
hexagonAvatarGroup.add(hexagonLeftEye);
hexagonAvatarGroup.add(hexagonRightEye);
hexagonAvatarGroup.move(-20, 10);
hexagonAvatarGroup.add(hexagon);

hexagonAvatarGroup.move(300, 200);

hexagon.back();

// create a heptagon
let heptagon = draw
  .polygon("50,0 33,-47 -17,-51 -50,-25 -50,35 -17,61 43,35")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// add heptagonBody class to heptagon
heptagon.addClass("heptagonBody");

// create a <g> element to hold the eyes
let heptagonAvatarGroup = draw.group().addClass("heptagonAvatar");

// create the left eye
let heptagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(18, 60);

// create the right eye
let heptagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(46, 60);

// add the eyes to the <g> element
heptagonAvatarGroup.add(heptagonLeftEye);
heptagonAvatarGroup.add(heptagonRightEye);
heptagonAvatarGroup.move(-9, -5);
heptagonAvatarGroup.add(heptagon);

heptagonAvatarGroup.move(300, 200);

heptagon.back();

// create an octagon
let octagon = draw
  .polygon("0,50 35,35 50,0 35,-35 0,-50 -35,-35 -50,0 -35,35")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// add octagonBody class to octagon
octagon.addClass("octagonBody");

// create a <g> element to hold the eyes
let octagonAvatarGroup = draw.group().addClass("octagonAvatar");

// create the left eye
let octagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(15, 60);

// create the right eye
let octagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(35, 60);

// add the eyes to the <g> element
octagonAvatarGroup.add(octagonLeftEye);
octagonAvatarGroup.add(octagonRightEye);
octagonAvatarGroup.move(9, 10);
octagonAvatarGroup.add(octagon);

octagonAvatarGroup.move(300, 200);

octagon.back();

// create a nonagon
let nonagon = draw
  .polygon("0,50 31,43 47,24 47,-24 31,-43 0,-50 -31,-43 -47,-24 -47,24 -31,43")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// add nonagonBody class to nonagon
nonagon.addClass("nonagonBody");

// create a <g> element to hold the eyes
let nonagonAvatarGroup = draw.group().addClass("nonagonAvatar");

// create the left eye
let nonagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(12, 60);

// create the right eye
let nonagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(38, 60);

// add the eyes to the <g> element
nonagonAvatarGroup.add(nonagonLeftEye);
nonagonAvatarGroup.add(nonagonRightEye);
nonagonAvatarGroup.move(5, 6);
nonagonAvatarGroup.add(nonagon);

nonagonAvatarGroup.move(300, 200);

nonagon.back();

// create a decagon
let decagon = draw
  .polygon("0,50 24,31 43,0 43,-31 24,-50 0,-60 -24,-50 -43,-31 -43,0 -24,31")
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// add decagonBody class to decagon
decagon.addClass("decagonBody");

// create a <g> element to hold the eyes
let decagonAvatarGroup = draw.group().addClass("decagonAvatar");

// create the left eye
let decagonLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(18, 60);

// create the right eye
let decagonRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(46, 60);

// add the eyes to the <g> element
decagonAvatarGroup.add(decagonLeftEye);
decagonAvatarGroup.add(decagonRightEye);
decagonAvatarGroup.move(5, 12);
decagonAvatarGroup.add(decagon);

decagonAvatarGroup.move(300, 200);

decagon.back();

// create a circle
let circle = draw
  .circle(90)
  .fill("#FFEBC3")
  .stroke({ width: 3, color: "#EED4A0" });

// add circleBody class to circle
circle.addClass("circleBody");

// create a <g> element to hold the eyes
let circleAvatarGroup = draw.group().addClass("circleAvatar");

// create the left eye
let circleLeftEye = draw.rect(10, 10).radius(5).fill("#000000").move(20, 60);

// create the right eye
let circleRightEye = draw.rect(10, 10).radius(5).fill("#000000").move(50, 60);

// add the eyes to the <g> element
circleAvatarGroup.add(circleLeftEye);
circleAvatarGroup.add(circleRightEye);
circleAvatarGroup.move(11, 19);
circleAvatarGroup.add(circle);

circleAvatarGroup.move(300, 200);

circle.back();

// ANIMATION AVATAR=======================================================

/* The code is defining and animating a path for an avatarGroup to appear and move along. It
first defines a path using two different paths, one straight and one curved. It then sets up
animation paths for the avatarGroup to follow along these paths. */

// add to tlScroll an animation to make the avatarGroup appear and move

// define the path
const path = {
  path: "#motionPath",
  align: "#motionPath",
  autoRotate: true,
  start: 0,
  end: 1,
};

let motionPath2 = draw
  .path("M50,100 C50,150 150,150 150,100 S250,50 350,100")
  .id("motionPath2")
  .move(avatarGroup.x(), avatarGroup.y())
  .fill("none")
  .stroke("none");

// // get the end point of the existing path
const pathLength = motionPath2.length();
const end = motionPath2.pointAt(pathLength);

// define the new curved path
const curvedPath = draw
  .path(
    `M${end.x},${end.y} C${end.x + 100},${end.y + 50} ${end.x + 200},${
      end.y - 50
    } ${end.x + 300},${end.y}`
  )
  .id("motionPath3")
  .fill("none")
  .stroke("none");

// animate the avatar along the new curved path

// another path

const path2 = {
  path: "#motionPath2",
  align: "#motionPath2",
  autoRotate: true,
  start: 0,
  end: 1,
};

const path3 = {
  path: "#motionPath3",
  align: "#motionPath3",
  autoRotate: true,
  start: 0,
  end: 1,
};

//FIN ANIM AVATAR==========================================================

/* The code is using the GSAP library to create a timeline animation. It starts by animating a
group of square avatars to fade in with an opacity of 0. Then, it animates a durabilia icon to fade
in and scale down with a scroll trigger that pins the content and pauses a floating icon on enter.
Finally, it animates an avatar group to move along a motion path with a scroll trigger that toggles
the animation on reverse. */
let tlScroll = gsap.timeline({});
tlScroll.add("start").fromTo(
  squareAvatarGroup.node,
  { opacity: 0 },
  {
    opacity: 0,
  }
);

// from opacity 0 to 1 and scale 1 to 0
tlScroll
  .to(
    ".durabilia-icon",
    {
      scrollTrigger: {
        trigger: "#section-1",
        start: "top+=1% top",
        end: "+=10%",
        scrub: 1,
        // pin content with lots of pinSpacing
        pin: true,
        pinSpacing: true,
        onEnter: () => floatIcon.pause(),

        //toggleActions: "play reverse play reverse"
      },
      opacity: 1,
      scale: 0.5,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  // ANIM AVATAR
  .to(
    avatarGroup.node,
    {
      scrollTrigger: {
        trigger: "#section-1",
        start: "top+=260 top",
        end: "top+=290 top",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
      duration: 3,
      opacity: 1,
      scale: 1.2,
      ease: "power1.inOut",
      motionPath: path2,
    },
    "start+=1"
  );

// ANIMATION TEXT--------------------------

tlScroll.to(
  ".logo-text",
  {
    scrollTrigger: {
      trigger: "#section-1",
      start: "top+=15 top",
      end: "+=150",
      scrub: 1,
      // pin content with lots of pinSpacing
      pin: true,
      pinSpacing: true,

      //toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    ease: "power1.inOut",
  },
  "start"
);

// DEFILEMENT TEXTE EN BACKGROUND

/**
 * The function creates a marquee effect using GSAP to move a series of boxes horizontally in a loop.
 * @param which - "which" refers to the HTML elements that are being animated/moved in the marquee
 * function. In this case, there are 12 different sets of elements (no01 - no12) that are being
 * selected using document.querySelectorAll().
 * @param time - The time parameter in the marquee function refers to the duration of the animation in
 * seconds. It determines how long it takes for the elements to move across the screen.
 * @param direction - The direction parameter determines the direction in which the marquee animation
 * will move. It can be set to either "+=" or "-=" followed by the total width of all the boxes
 * combined. "+=" will move the boxes from left to right, while "-=" will move them from right to left.
 * @returns The `marquee` function is returning a timeline that animates the specified elements to move
 * in the specified direction for the specified time, with a repeating animation. The `master` timeline
 * is a collection of all the `marquee` timelines for each set of elements, with each timeline starting
 * at a different time offset. The `action` timeline is not being used in this code snippet.
 */
let boxWidth = 700,
  totalWidth = boxWidth * 7, //  * n of boxes
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
  no11 = document.querySelectorAll("#no11 .box"),
  no12 = document.querySelectorAll("#no12 .box"),
  dirFromLeft = "+=" + totalWidth,
  dirFromRight = "-=" + totalWidth;

// move #no05 to bottom
gsap.set("#no05", { y: 600 });
let mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
  gsap.set(which, {
    x: function (i) {
      return i * boxWidth;
    },
  });
  var action = gsap.timeline().to(which, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + "px",
    },
    duration: time,
    ease: "none",
    repeat: -1,
  });
  // set opacity depending on the one reching right
  return action;
}

let master = gsap
  .timeline({})
  .add(marquee(no01, 15, dirFromLeft))
  .add(marquee(no02, 20, dirFromRight), 0)
  .add(marquee(no03, 25, dirFromLeft), 0)
  .add(marquee(no04, 25, dirFromLeft), 0)
  .add(marquee(no05, 25, dirFromLeft), 0)
  .add(marquee(no06, 25, dirFromLeft), 0)
  .add(marquee(no07, 25, dirFromLeft), 0)
  .add(marquee(no08, 25, dirFromLeft), 0)
  .add(marquee(no09, 25, dirFromLeft), 0)
  .add(marquee(no10, 25, dirFromLeft), 0)
  .add(marquee(no11, 25, dirFromLeft), 0)
  .add(marquee(no12, 25, dirFromLeft), 0);
var action = gsap.timeline({ defaults: { duration: 1, ease: "none" } });
// =============================

// SECTION 1------------------------------------------------------------------------------------------------------------------------------------

// ANIMATION ICONE DURABILIA-----------------------------------------------------------

let tl = gsap.timeline({});

// SECTION 2---------------------------------------------------------------------

// TIMELINE SECTION 2
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-2",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    // pin content with lots of pinSpacing
    pin: true,
    pinSpacing: true,
  },
});

let bgTl = gsap.timeline({});
bgTl.add("play");

// select cloudContainer
let cloudContainer = document.querySelector(".cloudCanvas");

// append a svg canvas with multiple white circles svg.js
let drawClouds = SVG().addTo(cloudContainer).size("100%", "100%");


/* The code is using the SVG.js library to create 20 groups of clouds, each containing 20 circles
with random positions, sizes, and colors. The cloud groups are given a class name and a unique
index. The groups are then randomly positioned on the left or right side of the screen and moved
vertically. */
for (let i = 0; i < 20; i++) {
  let cloudGroup = drawClouds.group();
  // create circles with random position and size nested in the group
  for (let i = 0; i < 20; i++) {
    let cloud = cloudGroup
      .circle(100)
      .fill("#c0c3c4")
      .move(Math.random() * 200, Math.random() * 100)
      .radius(Math.random() * 140);
    cloudGroup.add(cloud);
    // add class to group
    cloudGroup.addClass("cloudGroup");
    // add class with index
    cloudGroup.addClass("cloudGroup-" + i);
    // add to group
  }
  // move cloudgroup x
  cloudGroup.y(Math.random() * 1000);
  cloudGroup.x(Math.random() * 20);

  // place randomly on left or right
  if (Math.random() > 0.5) {
    cloudGroup.cx(Math.random() * 1500);
  } else {
    cloudGroup.cx(Math.random() * -1500);
  }
}

// MINISLIDE 1------------------------

/* The code is creating a timeline animation using the GreenSock Animation Platform (GSAP)
library in JavaScript. The animation includes various tweens and animations to move and transform
different elements on the screen, such as text, clouds, and avatars. The animation starts with the
text and a background element fading in, then moves on to animate the avatars along a motion path,
and ends with the square avatar rotating and moving to the right side of the screen. */
tl2
  .to(
    ".text-1",
    {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start"
  )

  // on lance l'opacité du text-bg ici
  .to(
    "#no01",
    {
      opacity: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start"
  )

  // add another animation after this one to fade it out
  .from(
    "#no01",
    {
      y: 300,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  );
tl2
  .to(
    ".text-1",
    {
      x: 0,
      opacity: 0,
      scale: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=1"
  )

  .to(
    "#no01",
    {
      opacity: 0,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=1"
  )

  .from(
    ".cloudGroup",
    {
      x: 0,
      opacity: 0,
      scale: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=1"
  )

  .to(
    ".cloudCanvas",
    {
      opacity: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=1"
  )
  .to(
    avatarGroup.node,
    {
      duration: 3,
      scaleX: -1.2,
      ease: "power1.inOut",
      motionPath: path3,
    },
    "start+=2"
  )
  .to(
    ".cloudGroup",
    {
      x: 2000,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.1,
      opacity: 0,
    },
    "start+=2"
  )
  .fromTo(
    avatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=3"
  )

  .fromTo(
    squareAvatarGroup.node,
    { opacity: 0 },
    {
      rotation: 30,
      x: 400,
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
    },
    "start+=3"
  )

  .to(
    ".squareBody",
    {
      // change square fill color
      fill: "#D32D27",
      // black borders
      stroke: "#000",
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=5"
  )

  .to(
    squareAvatarGroup.node,
    {
      rotation: 0,
      x: 600,
      duration: 1,
      // mirror
      scaleX: -1,
      ease: "power1.inOut",
    },
    "start+=5"
  );

// FIN MINISLIDE 1------------------------

// MINISLIDE 2------------------------

/* The code is using the GreenSock Animation Platform (GSAP) to create a timeline animation. It
is animating the elements with the class "text-2" and the element with the ID "no02". The animation
includes changing the opacity, scale, and position of the elements over a duration of time using
easing functions. The animation starts at a specified time ("start") and ends after a certain
duration. */
tl2
  .to(
    ".text-2",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=6"
  )

  .from(
    "#no02",
    {
      y: 300,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=6"
  )

  .to(
    "#no02",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=6"
  );

tl2
  .to(
    ".text-2",
    {
      x: 0,
      opacity: 0,
      scale: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=7"
  )
  .to(
    "#no02",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=7"
  );

// FIN MINISLIDE 2------------------------
// MINISLIDE 3------------------------

/* The code is using the GreenSock Animation Platform (GSAP) to animate the properties of SVG
elements on a webpage. Specifically, it is animating the fill color and stroke of a square, as well
as the opacity, scale, and position of some text elements. The animation is timed using a timeline
(tl2) and includes easing effects to create smooth transitions. */
tl2
  .to(
    ".squareBody",
    {
      // change square fill color
      fill: "#FFEBC3",
      // black borders
      stroke: "#EED4A0",
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=8"
  )

  .to(
    ".text-3",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=8"
  )
  .to(
    "#no03",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=8"
  );

tl2
  .to(
    ".text-3",
    {
      x: 0,
      opacity: 0,
      scale: 1,
      duration: 1,

      ease: "power1.inOut",
    },
    "start+=9"
  )

  .to(
    "#no03",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=9"
  );

// MINISLIDE 4------------------------
// element-earth at center of screen

/* The code is using the GSAP library to create animations on a webpage. It is selecting an HTML
element with the ID "planet" and creating an array of image file paths to be used for animating the
planet. It then creates a timeline (tl2) that animates the element with the class "element-earth" by
moving it to the right, increasing its opacity and scale, and setting its z-index. It also animates
two other elements by increasing their opacity. The timeline then sets up a scroll trigger for the
"element-earth" element that updates the image source in order to give a rotating effect */

const planet = document.getElementById("planet");
const images = [];
const totalImages = 69;
const imageFolderPath = "./assets/images/planet/earth-";

for (let i = 0; i <= totalImages; i++) {
  images.push(imageFolderPath + i + ".png");
}

tl2
  .to(
    ".element-earth",
    {
      x: 500,
      opacity: 1,
      scale: 1.2,
      duration: 1,
      zIndex: 0,
      ease: "power1.inOut",
    },
    "start+=10"
  )

  .to(
    ["#no04", "#no05"],
    {
      opacity: 1,
    },
    "start+=10"
  )

  .to(
    ".element-earth",
    {
      scrollTrigger: {
        normalizeScroll: {
          momentum: (self) => Math.min(20, self.velocityY * 2),
        },
        onUpdate: (scrollTrigger) => {
          let progress = scrollTrigger.progress * 3;
          let imageIndex = Math.floor(progress * (totalImages + 1));
          let currentImageIndex = 0;
          currentImageIndex = imageIndex;
          currentImageIndex >= images.length
            ? (currentImageIndex = images.length - 1)
            : currentImageIndex;
          let imageSrc = images[currentImageIndex];
          planet.src = imageSrc;
        },
      },
    },
    "start+=12"
  )

  // hide avatar
  .to(
    squareAvatarGroup.node,
    {
      xPercent: +600,
      scaleX: -1,
      ease: "power1.inOut",
    },
    "start+=10"
  );

// SECTION 3----------------------------------------------------------------------------------------------------------------------

/* The code is using the GSAP library to create a timeline animation with a scroll trigger. The
animation involves fading in and out various elements, moving and rotating a group of square
avatars, and changing their scale. The animation is triggered when the user scrolls to a specific
section of the webpage. */

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-3",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    // markers: true,
    // pin content with lots of pinSpacing
    pin: true,
    pinSpacing: true,
    //toggleActions: "play reverse play reverse"
  },
});

// create timeline with scrolltrigger

tl3
  .add("start")

  .to(
    ".info-container-1",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  .to(
    "#no06",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  .from(
    "#no06",
    {
      y: 300,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  .to(
    ".info-container-1",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=1"
  )

  .to(
    "#no06",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=1"
  )

  .to(
    squareAvatarGroup.node,
    {
      rotation: 20,
      x: 300,
      y: 200,
      duration: 1,
      // mirror
      scaleX: 1,
      ease: "power1.inOut",
    },
    "start+=1"
  )

  .from(
    "#no07",
    {
      y: 300,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=2"
  )

  .to(
    "#no07",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=2"
  )

  .to(
    ".info-container-2",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=2"
  )
  .to(
    squareAvatarGroup.node,
    {
      xPercent: -700,
      scaleX: 1,
      ease: "power1.inOut",
    },
    "start+=2"
  )

  .to(
    ".info-container-2",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=3"
  )

  .to(
    "#no07",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=3"
  )

  .from(
    "#no08",
    {
      y: 300,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=4"
  )

  .to(
    "#no08",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=4"
  )

  .to(
    ".info-container-3",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=4"
  )

  .to(
    ".info-container-3",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    },
    "start+=5"
  );

// SECTION 4----------------------------------------------------------------------------------------------------------------------
/* The code is adding event listeners to each card element with the class "card". When the mouse
enters the card element, it increases the scale of the card and displays an overlay with opacity 1.
When the mouse leaves the card element, it returns the card to its original scale and hides the
overlay with opacity 0. */
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const overlay = card.querySelector(".card-overlay");

  card.addEventListener("mouseenter", () => {
    overlay.style.opacity = 1;
    card.style.transform = "scale(1.2)";
    card.style.zIndex = "6";
  });

  card.addEventListener("mouseleave", () => {
    overlay.style.opacity = 0;
    card.style.transform = "scale(1)";
    card.style.zIndex = "1";
  });
});

// SECTION 9----------------------------------------------------------------------------------------------------------------------
// CARRES SDG
// Select the SDG blocks container
const sdgContainer = document.querySelector(".sdg-blocks-container");

// Select all the SDG blocks
const sdgBlocks = sdgContainer.querySelectorAll(".sdg-block");

// Loop through each SDG block
sdgBlocks.forEach((sdgBlock) => {
  // Select the SDG overlay
  const sdgOverlay = sdgBlock.querySelector(".sdg-overlay");

  // Hide the overlay initially
  sdgOverlay.style.display = "none";

  // Add event listeners for mouseenter and mouseleave events
  sdgBlock.addEventListener("mouseenter", () => {
    // Show the overlay on mouseenter
    sdgOverlay.style.display = "flex";
    sdgOverlay.style.transform = "scale(1.2)";
    sdgOverlay.style.zIndex = "6";
  });

  sdgBlock.addEventListener("mouseleave", () => {
    // Hide the overlay on mouseleave
    sdgOverlay.style.display = "none";
    sdgOverlay.style.transform = "scale(1)";
    sdgOverlay.style.zIndex = "1";
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
  },
});

tlCard4;
tlCard4
  .add("start")
  .from(
    "#no09",
    {
      y: 0,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  .to(
    "#no09",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )

  .to(
    squareAvatarGroup.node,
    {
      rotation: 0,

      y: 500,
      duration: 1,
      // mirror

      ease: "power1.inOut",
    },
    "start"
  );

// SECTION 9----------------------------------------------------------------------------------------------------------------------

// // start gsap animation on section-9
/* The code is using the GSAP library to create a timeline animation for a section with the ID
"section-9". The animation includes a floating block animation for an element with the ID "no10".
The animation is triggered when the top of the section reaches the top of the viewport and ends when
the section has been scrolled by 100%. The section is also pinned to the top of the viewport while
the animation is playing. */
let tlCard9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-9",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: true,
    // pinnedContainer: '.sect9-cont',
  },
});

//   FLOATING BLOCKS ANIMATION
tlCard9
  .add("start")
  .from(
    "#no10",
    {
      y: 0,
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )
  .to(
    "#no10",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  );

// Section 10

/* The code is using the GSAP (GreenSock Animation Platform) library to create animations
triggered by scrolling. The first part of the code is creating a timeline for each section with a
scroll trigger that starts the animation when the top of the section is 80% in view and ends when
the bottom of the section is 70% in view. The animation fades in and moves each section up by 100
pixels with a yoyo effect and a delay based on the index of the section. */
gsap.utils.toArray(".sdg-block").forEach((section, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
  });
  tl.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    yoyo: true,
    delay: index * 0.1,
  });
});

let tlcard11 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-10",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
});

tlcard11
  .add("start")

  .from(
    "#no11",
    {
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  )
  .to(
    "#no11",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
    "start"
  );

// make a from 0 opacity and -30 x position when reaching #section-9

// make .sdg-blocks dissapear randomly on scroll

// PARTICULES CARREES!!

// Create a full size canvas, set it to absolute and append it to section-9
/**
 * The function draws multiple randomly sized and colored squares with a random blur effect on a canvas
 * element.
 * @param x - The x-coordinate of the top-left corner of the square.
 * @param y - The "y" parameter is the vertical position of the top-left corner of the square being
 * drawn on the canvas.
 * @param width - The width parameter is the width of the square to be drawn. It is a random value
 * between 0 and 40 generated for each square.
 * @param height - The `height` parameter is not used in the `drawSquare` function and is commented out
 * in the code.
 * @param color - The color parameter is a string value representing the color of the square being
 * drawn in HSL format. The hue value is randomly generated between 0 and 360, while the saturation and
 * lightness values are fixed at 50%.
 */
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
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  drawSquare(x, y, width, width, color);
}

// SLIDE 11

/* The code is using the GSAP library to create a timeline animation for a section with the ID
"section-11". The animation involves multiple groups of avatar shapes (pentagon, hexagon, heptagon,
octagon, nonagon, decagon, circle, and square) fading in and moving to specific positions on the
screen. The animation also includes pinning the section to the top of the viewport and scrubbing
through the animation as the user scrolls. Additionally, the code includes a reverse animation where
the avatar groups fade out and disappear after a delay of 5 seconds. */

let tlcard12 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-11",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
});

tlcard12.add("start");

tlcard12;

tlcard12
  .fromTo(
    avatarGroup.node,
    { opacity: 0 },
    {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    pentagonAvatarGroup.node,
    { opacity: 0, x: -1000 },
    {
      duration: 2.4,
      opacity: 1,
      x: 200,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    hexagonAvatarGroup.node,
    { opacity: 0, x: 1000 },
    {
      duration: 1.5,
      opacity: 1,
      x: 100,
      y: 500,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    heptagonAvatarGroup.node,
    { opacity: 0, y: -1000 },
    {
      duration: 3,
      opacity: 1,
      x: 700,
      y: 700,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    octagonAvatarGroup.node,
    { opacity: 0, y: 1000 },
    {
      duration: 1.8,
      opacity: 1,
      x: 900,
      y: 300,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    nonagonAvatarGroup.node,
    { opacity: 0, x: -1000, y: -1000 },
    {
      duration: 2.1,
      opacity: 1,
      x: 100,
      y: 100,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    decagonAvatarGroup.node,
    { opacity: 0, x: 1000, y: 1000 },
    {
      duration: 0.9,
      opacity: 1,
      x: 400,
      y: 600,
      ease: "power1.inOut",
    },
    "start"
  )
  .fromTo(
    circleAvatarGroup.node,
    { opacity: 0, x: -1000, y: 1000 },
    {
      duration: 2.4,
      opacity: 1,
      x: 600,
      y: 200,
      ease: "power1.inOut",
    },
    "start"
  );

tlcard12
  .fromTo(
    avatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5"
  )

  .fromTo(
    pentagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5"
    )

  .fromTo(
    hexagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5")

  .fromTo(
    heptagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5"
    )

  .fromTo(
    octagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5")

  .fromTo(
    nonagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5")
    

  .fromTo(
    decagonAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5")

    .fromTo(
      circleAvatarGroup.node,
      { opacity: 1 },
      {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      }
      ,"start+=5"
    )



  .fromTo(
    squareAvatarGroup.node,
    { opacity: 1 },
    {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    },
    "start+=5"
  );

let tlcard13 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-12",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
});

tlcard13.add("start");

document.querySelector(".email-overlay").style.display = "none";

document.querySelector(".button-newsletter").addEventListener("click", () => {
  document.querySelector(".email-overlay").style.display = "block";
});

document.querySelector(".close-email-overlay").addEventListener("click", () => {
  document.querySelector(".email-overlay").style.display = "none";
});
