//form name
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Pesan dari Website");
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nNo HP: ${phone}\nPesan: ${message}`,
    );

    window.location.href = `mailto:zaskiazunsch@gmail.com?subject=${subject}&body=${body}`;
  });
});

//navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const hamburgerIcon = hamburger.querySelector("i");
  const navLinks = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-xmark");
    } else {
      hamburgerIcon.classList.remove("fa-xmark");
      hamburgerIcon.classList.add("fa-bars");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        navbar.classList.remove("active");
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      navbar.classList.remove("active");
      hamburgerIcon.classList.remove("fa-xmark");
      hamburgerIcon.classList.add("fa-bars");
    }
  });
});
