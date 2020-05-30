window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navbar')
var offset = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= offset) {
        navbar.classList.add("offset")
    }
    else {
        navbar.classList.remove("offset")
    }
}