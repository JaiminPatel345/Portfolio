// For navigation bar
// let marker = document.querySelector("#marker");
// let item = document.querySelectorAll(".navbar a");

// function indicator(e) {
//     marker.style.left = e.offsetLeft - 5 + "px";
//     marker.style.width = e.offsetWidth + 10 + "px";
// }

// item.forEach(link => {
//     link.addEventListener('click', (e) => {
//         indicator(e.target);
//     })
// })




// typing animation script
var typed = new Typed(".typing", {
    strings: ["Computer Engineer" , "Coder", "Developer", "Backend Developer" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: false,

});

var typed = new Typed(".typing-2", {
    strings: ["Computer Engineer" , "Coder", "Developer", "Backend Developer" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: true,

});


document.addEventListener("DOMContentLoaded", function () {

    var toggleButton = document.querySelector('.navbar-toggler');

    var listItems = document.querySelectorAll('.nav-item');

    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            if (toggleButton.getAttribute('aria-expanded') === 'true') {
                toggleButton.click();
            }
        });
    });
});