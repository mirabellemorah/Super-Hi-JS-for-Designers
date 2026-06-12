/*const headerTag = document.querySelector("header nav");

const toggleHeader = function () {
  const pixelsFromTop = window.pageYOffset;
  const vh = window.innerHeight * 0.5; // this is 50vh in pixels

  if (pixelsFromTop > vh) {
    headerTag.style.backgroundColor = "#f8c0d5ff";
    headerTag.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  } else {
    headerTag.style.backgroundColor = "";
    headerTag.style.boxShadow = "none";
  }
};

toggleHeader();

document.addEventListener("scroll", (e) => {
  toggleHeader();
}); */

//when i scroll down the page
// change the background color of the header and add a box shadow

const headerTag = document.querySelector("header nav");
const scrollIndicator = document.querySelector(".scroll-indicator");
const colors = ["#f8c0d5ff", "#79eae8", "#f9e79f", "#a9cce3", "#d7bde2"];

function toggleHeader() {
  const pixels = window.pageYOffset;
  const colorIndex = Math.floor(pixels / 200) % colors.length;
  scrollIndicator.innerHTML = pixels;

  if (pixels <= 100) {
    headerTag.style.backgroundColor = "";
    scrollIndicator.style.backgroundColor = "";
    headerTag.style.boxShadow = "none";
    return;
  }

  headerTag.style.backgroundColor = colors[colorIndex];
  scrollIndicator.style.backgroundColor = colors[colorIndex];
  headerTag.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  scrollIndicator.style.transition = "all 0.9s ease-in-out";
}

toggleHeader();
document.addEventListener("scroll", function () {
  toggleHeader();
});
