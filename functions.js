gsap.registerPlugin(ScrollTrigger);

let bgImg = document.querySelector(".bgImg");

// this is for pinning the .bgImg
ScrollTrigger.create({
  trigger: bgImg,
  pin: true,
  pinSpacing: false,
  start: "center center",
  // pin until the bottom of the .s6 section hits the bottom of the .bgImg
  end: () => "+=" + (document.querySelector(".s6").getBoundingClientRect().bottom - bgImg.getBoundingClientRect().bottom)
});

// then we find each section and the corresponding image and set up a ScrollTriggered animation of it yPercent
[".s4",".s5",".s6"].forEach(s => {
  let section = document.querySelector(s),
      image = document.querySelector(s + "Img");
  gsap.set(image, {y: 0, yPercent: 100});
  gsap.to(image, {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => "top 50%+=" + (bgImg.offsetHeight / 2) + "px",
      end: "+=" + bgImg.offsetHeight,
      scrub: true
    }
  });
});