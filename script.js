const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

/* EFECTO 3D EN LA TARJETA PRINCIPAL */

const heroVisual = document.getElementById("heroVisual");
const plumberCard = document.getElementById("plumberCard");

heroVisual.addEventListener("mousemove", (event) => {
  const bounds = heroVisual.getBoundingClientRect();

  const mouseX = event.clientX - bounds.left;
  const mouseY = event.clientY - bounds.top;

  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;

  const rotateY = ((mouseX - centerX) / centerX) * 10;
  const rotateX = ((centerY - mouseY) / centerY) * 7;

  plumberCard.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateZ(15px)
  `;
});

heroVisual.addEventListener("mouseleave", () => {
  plumberCard.style.transform = `
    rotateY(-8deg)
    rotateX(4deg)
  `;
});

/* ANIMACIÓN AL HACER SCROLL */

const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll(
  ".program-card-large, .detail-card, .benefit-card, .admissions-card, .contact-form"
);

animatedElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

/* FORMULARIO DE PRUEBA */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector(".submit-button");
  const originalContent = submitButton.innerHTML;

  submitButton.innerHTML = "Information Sent ✓";
  submitButton.disabled = true;

  setTimeout(() => {
    submitButton.innerHTML = originalContent;
    submitButton.disabled = false;
    contactForm.reset();
  }, 2500);
});