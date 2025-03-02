console.log("---- If you show error then connect to proper internet ----");

//For open any link in new tab
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.closest("nav")) {
      return; // Skip links inside <nav>
    }
    link.setAttribute("target", "_blank");
  });
});

// For navigation bar
let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll(".navbarLinks");

window.addEventListener("scroll", () => {
  let curr = "";

  sections.forEach((section) => {
    // Get the distance of the section from the top of the page
    const sectionTop = section.offsetTop;

    // Check if the user has scrolled past the section
    if (scrollY >= sectionTop - 50) {
      curr = section.getAttribute("id"); // Get the section id
      //   console.log(curr);
    }
  });

  navbarLinks.forEach((link) => {
    link.classList.remove("active");

    // Add active class to the corresponding link
    if (link.getAttribute("href") === `#${curr}`) {
      link.classList.add("active");
    }
  });
});

//responsive navbar
let navbar = document.querySelector(".header .responsible .navbar");
const bar = document.querySelector(".header .responsible .fa-bars");
const xmark = document.querySelector(".header .responsible .xmark");

xmark.addEventListener("click", () => {
  navbar.classList.remove("navbar-toggle");
  bar.classList.remove("none");
});

bar.addEventListener("click", () => {
  console.log("click");
  navbar.classList.add("navbar-toggle");
  bar.classList.add("none");
});

// typing animation script
var typed = new Typed(".typing", {
  strings: [
    "DSA Enthusiast",
    "Problem Solver",
    "Innovative Thinker",
    "Open-Source Contributor",
    "Continuous Learner",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: false,
});

var typed = new Typed(".typing-2", {
  strings: ["Developer", "Chess Player", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: true,
});

const form = document.getElementById("feedbackForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    "https://script.google.com/macros/s/AKfycbx85JLTYu2sKrT054y-dR6LMx-QqHmrq8szeg0twnaAeWislhmHGJab0Yo0fXxzGLrN/exec",
    { method: "POST", body: new FormData(form) }
  )
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

// const formBtn = document.getElementById("form-btn")
// formBtn.addEventListener('click', () => {
//     const msg = document.getElementById('feedback_msg');
//     if (!msg.innerText || msg.innerText.length === 0) {
//         alert("Please write something in message ");
//     }
// })
