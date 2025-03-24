const pixelsTag = document.querySelector("div.pixels");
const progressBar = document.querySelector("div.progress");

//when we scroll the pageXOffset, update the pixels page to be how far the page isFinite

document.addEventListener("scroll", () => {

    const pixels = window.pageYOffset;
    const progress = window.pageXOffset;
    progressBar.style.width = progress;

    pixelsTag.innerHTML = Math.round(pixels);

    if (pixels > 1000) {
        pixelsTag.innerHTML = Math.round(pixels) + "px";
    } else {
        pixelsTag.innerHTML = Math.round(pixels);
    };

});

document.addEventListener("scroll", () => {

    const pixels = window.pageYOffset;

});
