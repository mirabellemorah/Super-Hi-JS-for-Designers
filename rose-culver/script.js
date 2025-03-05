let pageNumber = 0;

const nextTag = document.querySelector("footer img.next"); //pickup in the footer the image with the class next
const outputTag = document.querySelector("h2");
const prevTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

const pages = [
    { copy: "a dear friend", background: "#edc7a9", circle: "#3e78ed" },    // 0
    { copy: "the love of my life", background: "#a1c45a", circle: "#f9a03f" },    // 1        
    { copy: "my constant", background: "#f9a03f", circle: "#ed3e3e" },    // 2
    { copy: `my partner <a href="https://www.mirabellemorah.com">in crime</a>`, background: "#f9845b", circle: "#19d8e9" },    // 3
]

const next = function () {
    pageNumber++; // pageNumber += 1 or pageNumber++;

    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }; // the first one does a check and if the chekc passes then it does the thing in the curly bracket

    updateSection();
}

const random = () => {
    pageNumber = Math.floor(Math.random() * pages.length);
    updateSection();
}

const prev = () => {
    pageNumber--;

    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    };

    updateSection();
};

const updateSection = () => {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

nextTag.addEventListener("click", () => {
    next();
});

randomTag.addEventListener("click", () => {
    random();
});

prevTag.addEventListener("click", () => {
    prev();
});