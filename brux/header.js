const headerTag = document.querySelector("header");

const toggleHeader = () => {
    if (headerTag.classList.contains("header--active")) {
        headerTag.classList.remove("header--active");
    } else {
        headerTag.classList.add("header--active");
    }
}

toggleHeader();

document.addEventListener("scroll", (e) => {
    toggleHeader();
});