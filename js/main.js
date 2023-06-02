mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#fordeler");
var sticky = services.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  
  $("select").niceSelect();
});


function openNav() {
  $("#myNav").css("width", "100%");
}


function closeNav() {
  $("#myNav").css("width", "0");
}
