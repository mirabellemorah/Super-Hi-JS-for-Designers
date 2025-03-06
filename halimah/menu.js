const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");
const menuImg = document.querySelector("img.menu");

toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="halimah/assets/close.svg"> Close`;
  }
  else {
    toggleTag.innerHTML = `<img src="halimah/assets/menu.svg"> Menu`;
  }

});

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll(".showcase-imgs");

let currentSlide = 0;
let z = 1;

//when I click on slide area, change slide based on z-index

slideArea.addEventListener("click", function () {

  currentSlide = currentSlide + 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  images.forEach(image => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade cubic-bezier(0.075, 0.82, 0.165, 1) 3s";

});

slideArea.addEventListener("mouseover", function () {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() * 5)) - 50;
    const y = 25 * (Math.floor(Math.random() * 5)) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseout", function () {
  images.forEach(image => {
  
    image.style.transform = ``;
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("Audio");
    const muteBtn = document.getElementById("muteBtn");

    // Set volume & start muted
    audio.volume = 0.3;

    //Unmute after loading
    audio.play().catch(error => {
        console.log("Autoplay blocked:", error);
    });

    muteBtn.addEventListener("click", function player() {
        if (!audio.paused) {
            audio.pause(); // Pause the music
            muteBtn.src = "https://img.icons8.com/?size=100&id=644&format=png&color=000000";
        }

        else {
            audio.play(); // Resume playing
            muteBtn.src = "https://img.icons8.com/?size=100&id=lWzUFP7UyZXx&format=png&color=000000";
        }
    });

});