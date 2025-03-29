const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressBar = document.querySelector("div.progress");
const colorChange = document.querySelector("div.color");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");
const sections = [
    { class: "s1", background: "#ff4d4d", default: "" },
    { class: "s2", background: "#4d79ff", default: "" },
    { class: "s3", background: "#4dff88", default: "" },
    { class: "s4", background: "#f9f8f0", default: "" }
];
const sectionAll = document.querySelectorAll("section");


//when we scroll the pageXOffset, update the pixels page to be how far the page isFinite

document.addEventListener("scroll", () => {

    const pixels = window.pageYOffset;

    pixelsTag.innerHTML = Math.round(pixels);

    if (pixels > 1000) {
        pixelsTag.innerHTML = Math.round(pixels) + "px";
    } else {
        pixelsTag.innerHTML = Math.round(pixels);
    };

});

document.addEventListener("scroll", () => {

    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableHeight = pageHeight - window.innerHeight;
    const percentage = pixels / totalScrollableHeight;

    progressBar.style.width = `5px`;
    progressBar.style.height = `${100 * percentage}%`;
});

let isDefault = false; // keep track of the toggle state

colorChange.addEventListener("click", () => {
    sections.forEach(section => {
        const sectionElement = document.querySelector(`.${section.class}`);
        if (sectionElement) {
            sectionElement.style.backgroundColor = isDefault
                ? section.background // turn colors on
                : section.default || ""; // turn colors off (reset to default)
        }
    });

    isDefault = !isDefault; // flip the switch
});

document.addEventListener("scroll", () => {

    const pixels = window.pageYOffset;

    sectionAll.forEach(section => {
        if (section.offsetTop <= pixels) {
            clientTag.innerHTML = section.getAttribute("data-client");
            pageTag.innerHTML = section.getAttribute("data-page");

            if (section.hasAttribute("data-dark")) {
                bodyTag.classList.add("white");
            }

            else {
                bodyTag.classList.remove("white")
            }
        }
    });
});

//when we scroll a page make thinngs parallex
//we want to make cetian anchor tags based on where we are in the page

document.addEventListener("scroll", () => {
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + (window.innerHeight / 2);

    sectionAll.forEach(section => {
        const topSection = section.offsetTop;
        const midSection = topSection + (section.offsetHeight / 2);

        const distanceMoved = midViewport - midSection;

        // Use section.querySelectorAll to scope the search to the current section
        const parallexTags = section.querySelectorAll(`[data-parallex]`);

        parallexTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallex"));
            tag.style.transform = `translateY(${distanceMoved * speed}px)`;
        });
    });
});
