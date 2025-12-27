
AOS.init(
  {
      duration: 1200,
  }
);

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
});

const hamburger = document.querySelector(".hamburger")
const navContent = document.querySelector(".nav-content")
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navContent.classList.toggle("active")
  body.classList.toggle("no-scroll");
})

function closeMenu() {
  hamburger.classList.remove("active")
  navContent.classList.remove("active")
  body.classList.remove("no-scroll");
}

// Smooth scroll for navbar links
document.querySelectorAll('.nav-content ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
    const href = this.getAttribute('href');
    let target;
    if (href === '#competencias') {
      // Check which competencias section is visible
      const mobileSec = document.getElementById('competencias');
      const desktopSec = document.getElementById('competenciasDesktop');
      if (mobileSec.offsetHeight > 0) {
        target = mobileSec;
      } else {
        target = desktopSec;
      }
    } else {
      target = document.querySelector(href);
    }
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
