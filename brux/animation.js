const animatedTags = document.querySelectorAll("h2, h3, p, .large-image");

// fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

// on load, run fadeIn
fadeIn();

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn();
});

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn();
});

/*const fadeIn = function () {
  const pixelsFromTop = window.pageYOffset;
  const vh = window.innerHeight * 0.5; // this is 50vh in pixels

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top + pixelsFromTop;

    if (tagTop < pixelsFromTop + vh) {
      tag.style.opacity = "1";
      tag.style.transform = "translateY(0px)";
      tag.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    } else {
      tag.style.opacity = "0";
      tag.style.transform = "translateY(20px)";
      tag.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }
  });
};

fadeIn();

document.addEventListener("scroll", (e) => {
  fadeIn();
});

window.addEventListener("resize", (e) => {
  fadeIn();
  toggleHeader();
});
*/
