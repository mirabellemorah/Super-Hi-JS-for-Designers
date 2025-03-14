//https://developer.mozilla.org/en-US/docs/Web/Events

const sentenceTag = document.querySelector(`input[type="text"]`);

const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector("span.typesize-output");

const lineheightTag = document.querySelector(`input[name="lineHeight"]`);
const lineheightOutput = document.querySelector("span.lineheight-output");

const outputTag = document.querySelector("textarea.output");
const original = outputTag.value;

const italicTag = document.querySelector(`input[name="italic"]`);

const boldTag = document.querySelector(`input[name="bold"]`);

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const color = document.querySelector(`input[name="base"]`);
const body = document.querySelector("body");

const colorTag = document.querySelectorAll("div.colors div");

//when I type in my sentence, I want to see the sentence in the output
//add an event listener
//why innerHTML does not work is because there is no HTML but rather a value is what is updated

sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value; // outputTag.textContent = sentenceTag.value;
    }

    else {
        outputTag.value = "🦜" //original;
    }
});

// now when I type in my output, I want to see the sentence in the input

outputTag.addEventListener("keyup", function () {

    if (this.value) {
        sentenceTag.value = this.value;
    }

    else {
        sentenceTag.value = "👀"; //original;
    }
});

// when I change my type size slider, update the text next to it and change the output tag's font size

typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px";
    typesizeOutput.innerHTML = this.value + "pixels";
});

lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value;
    lineheightOutput.innerHTML = this.value;
});

italicTag.addEventListener("change", function () {

    if (this.checked) {
        outputTag.style.fontStyle = "italic";
    }
    else {
        outputTag.style.fontStyle = "normal";
    }

    //italicTag.checked ? outputTag.style.fontStyle = "italic" : outputTag.style.fontStyle = "normal";
});

//when I change my select for font family, update the font family in the output tag

typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value;

});

boldTag.addEventListener("change", function () {
    boldTag.checked ? outputTag.style.fontWeight = "bold" : outputTag.style.fontWeight = "normal";
});

color.addEventListener("input", function () {
    body.style.backgroundColor = this.value;
});

//go through all of my color tags
// then when I click one of them, change the background color
//and change the text color
//and make teh tag selected

colorTag.forEach(colorBox => {

    colorBox.addEventListener("click", function () {

        outputTag.style.backgroundColor = this.style.backgroundColor;
        outputTag.style.color = this.style.color;

        //reset the classes

        colorTag.forEach(colorBox => {
            colorBox.classList.remove("selected");
        });

        this.classList.add("selected");
    }) //this is because you cant add an event listener to all things 1-1 but you can do it by looping through each

});