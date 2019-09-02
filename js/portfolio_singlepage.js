function openForm() {
    document.getElementById("Contact").style.display = "block";
}

function closeForm() {
    document.getElementById("Contact").style.display = "none";
}

//SlideShow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Slides Content controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}