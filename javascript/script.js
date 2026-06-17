//Tabs Functionality
var showTab = function (sectionId) {
    var sections = document.querySelectorAll(".info");
    for (var index = 0; index < sections.length; index++) {
        sections[index].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
}

//Popup Section
function showPopup() {
    const overlay = document.getElementById("show");
    const popup = document.getElementById("showpop");

    overlay.style.visibility = "visible";
    popup.style.visibility = "visible";
}

function hidePopup() {
    document.getElementById("show").className = "hidden";
    document.getElementById("showpop").className = "hidden";
}

 //Carousel
let slideIndex = 1;

showSlides(slideIndex);

function slideImages(step) {
    slideIndex += step;

    showSlides(slideIndex);
}

function showSlides(index) {

    let slides = document.getElementsByClassName("slides");

    // If next button is clicked on last slide
    if (index > slides.length) {
        slideIndex = 1;
    }

    // If previous button is clicked on first slide
    if (index < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";
}
//Model Dialogue
function showDialogue() {
    document.getElementById("showModel").style.visibility = "visible";
    document.getElementById("showDialogue").style.visibility = "visible";
}

function hideDialogue() {
    document.getElementById("showModel").style.visibility = "hidden";
    document.getElementById("showDialogue").style.visibility = "hidden";
}
