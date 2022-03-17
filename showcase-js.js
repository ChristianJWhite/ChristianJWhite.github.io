function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);	
}		

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


const myProjects = () => {
  document.getElementById("myProjects").style.display = "block";
  document.getElementById("showProject1").style.display = "none";
  document.getElementById("showProject2").style.display = "none";
  document.getElementById("showProject3").style.display = "none";
  document.getElementById("showProject4").style.display = "none";

}

const showProject1 = () => {
  document.getElementById("myProjects").style.display = "none";
  document.getElementById("showProject1").style.display = "block";
  document.getElementById("showProject2").style.display = "none";
  document.getElementById("showProject3").style.display = "none";
  document.getElementById("showProject4").style.display = "none";
}

const showProject2 = () => {
  document.getElementById("myProjects").style.display = "none";
  document.getElementById("showProject1").style.display = "none";
  document.getElementById("showProject2").style.display = "block";
  document.getElementById("showProject3").style.display = "none";
  document.getElementById("showProject4").style.display = "none";

}

const showProject3 = () => {
  document.getElementById("myProjects").style.display = "none";
  document.getElementById("showProject1").style.display = "none";
  document.getElementById("showProject2").style.display = "none";
  document.getElementById("showProject3").style.display = "block";
  document.getElementById("showProject4").style.display = "none";

}

const showProject4 = () => {
  document.getElementById("myProjects").style.display = "none";
  document.getElementById("showProject1").style.display = "none";
  document.getElementById("showProject2").style.display = "none";
  document.getElementById("showProject3").style.display = "none";
  document.getElementById("showProject4").style.display = "block";

}

window.onload = myProjects;