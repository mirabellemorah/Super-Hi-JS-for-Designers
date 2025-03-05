let pageNumber = 0;

const nextTag = document.querySelector("footer img.next"); //pickup in the footer the image with the class next
const outputTag = document.querySelector("h2");
const prevTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

const pages = [
    { copy: "The best opportunities don’t often come from joining the crowd but serving it — JM Marco", background: "#edc7a9", circle: "#3e78ed" },    // 0
    { copy: "Do not forget to meet all your difficulties with love and laughter - God calling Devotional", background: "#a1c45a", circle: "#f9a03f" },    // 1        
    { copy: "Life isn’t as serious as my mind makes it out to be. - Ekhart Tolle", background: "#f9a03f", circle: "#ed3e3e" },    // 2
    { copy: `A good partner should reduce the complexity and difficulty of your life, not add to it — EY on Fishbowl`, background: "#f9845b", circle: "#19d8e9" },    // 3
    { copy: `Your focus determines your reality`, background: "#edc7a9", circle: "#39d8e9" },    // 4
    { copy: `Do good every day`, background: "#f9f8f0", circle: "#000" },    // 5
    { copy: `Paradoxically, what keeps the so called consumer society going is the fact that trying to find yourself through things doesn’t work — Eckhart Tolle`, background: "#f8ba5b", circle: "#063aad" },    // 6
    { copy: `Once this life is over there are no redos`, background: "#edc7a9", circle: "#0034ff" },    // 7
    { copy: `Whatever you appreciate appreciates. Give thanks and practice gratitude - Nat Bassey`, background: "#f6f9d0", circle: "#77cf96" },    // 8
    { copy: `Great value precedes great wealth. If you want to make millions impact millions. `, background: "#f9f8f0", circle: "#Ab234f" },    // 9
    { copy: `The value of a man should be seen in what he can give and not what he receives, Albert Einstein`, background: "#fab6a8", circle: "#f7a8d0" },    // 10
    { copy: `Fortune favours the prepared`, background: "#c3eed1", circle: "#f9f896" },    // 11
    { copy: `For it is not in success where true character is revealed but in failure. - Black Manta`, background: "#fab6a8", circle: "#00ce4c" },    // 12
    { copy: `The world is full of magical things patiently waiting for our senses to grow sharper. - W.B. Yeats`, background: "#f9f8f0", circle: "#000" },    // 13
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

document.addEventListener("keyup", (event) => {

    if (event.key === "ArrowRight") {
        next();
    }

    if (event.key === "ArrowLeft") {
        prev();
    }

})

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