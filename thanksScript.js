"use strict";
let $top = $(".top");
let $close = $(".close");
console.log($close);
/* Please check my dribbble design at https://dribbble.com/shots/13118573-Minimal-Envelope-Animation
 */
let open = gsap.timeline({
  paused: true,
  reversed: true,
});
let zoom = gsap.timeline({
  paused: true,
  reversed: true,
});

/* I used two animations for more control and to test delay call*/
$top.click(() => {
  open.play();
  zoom.play();
});
$close.click(() => {
  zoom.reverse();
  gsap.delayedCall(1, () => {
    open.reverse();
  });
});
open
  .to(
    ".top-cover",
    {
      duration: 0.5,
      ease: "power1.out",
      transformOrigin: "top",
      boxShadow: 0,
      rotateX: 180,
    },
    0
  )
  .to(
    ".top",
    {
      zIndex: 1,
    },
    0.05
  )
  .to(
    ".top",
    {
      filter: "drop-shadow(0px 2px 3px rgba(50, 0, 50, 0)",
    },
    0
  );
zoom
  .to(
    ".paper",
    {
      zIndex: 1,
    },
    0.3
  )
  .to(
    ".paper",
    {
      duration: 0.5,
      y: -120,
      zIndex: 2,
    },
    0.5
  )
  .to(
    ".paper",
    {
      duration: 0.5,
      y: 0,
      scale: 2,
      zIndex: 3,
      ease: "power1.out",
    },
    1
  )
  .to(
    ".shadow",
    {
      scaleX: 1.5,
    },
    1
  );

window.addEventListener("load", () => {
  $top.click();
});
