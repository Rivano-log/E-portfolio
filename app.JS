function openMenu() {
  document.body.classList.add("open");
}

function closeMenu() {
  document.body.classList.remove("open");
}

async function sendEmail(event) {
  event.preventDefault();

  const btn = document.getElementById("contactSubmitBtn");
  const successBox = document.querySelector(".succes");

  try {
    btn.classList.add("loading");

    await emailjs.sendForm(
      "service_7sw8w3x",
      "template_iabq12i",
      event.target
    );

    btn.classList.remove("loading");
    event.target.reset();

    if (successBox) {
      successBox.classList.add("show");

      setTimeout(() => {
        successBox.classList.remove("show");
      }, 3000);
    }
  } catch (error) {
    console.error(error);
    btn.classList.remove("loading");
  }
}

const track = document.querySelector(".projects__track");
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");
const slides = document.querySelectorAll(".project");

let currentSlide = 0;

function updateSlider() {
  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

if (prevBtn && nextBtn && slides.length && track) {
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });
}