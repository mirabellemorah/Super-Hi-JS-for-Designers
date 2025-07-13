const headerTag = document.querySelector("header nav");

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
});
