// reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.background = "rgba(5, 8, 22, 0.84)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.10)";
  } else {
    navbar.style.background = "rgba(5, 8, 22, 0.68)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.09)";
  }
});

// scroll progress bar
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// modal
const modal = document.getElementById("quoteModal");
const openButtons = document.querySelectorAll(".open-modal-btn");
const closeModal = document.getElementById("closeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const quoteForm = document.getElementById("quoteForm");
const formSuccess = document.getElementById("formSuccess");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    formSuccess.classList.remove("show");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modalBackdrop.addEventListener("click", () => {
  modal.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  quoteForm.reset();
  formSuccess.classList.add("show");
});