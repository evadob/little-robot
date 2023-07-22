const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

// Responsive Menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navigation.classList.toggle("open");
});

// Slider navigation
const btns = document.querySelectorAll(".dot-navigation-btn");
const slides = document.querySelectorAll(".background-image");
const sections = document.querySelectorAll(".content");

const sliderNav = (selectedBtn) => {
  btns.forEach((btn, i) =>
    i === selectedBtn
      ? btn.classList.add("active")
      : btn.classList.remove("active")
  );

  slides.forEach((slide, i) =>
    i === selectedBtn
      ? slide.classList.add("active")
      : slide.classList.remove("active")
  );

  sections.forEach((content, i) =>
    i === selectedBtn
      ? content.classList.add("active")
      : content.classList.remove("active")
  );
};

sliderNav(0);

btns.forEach((btn, i) => btn.addEventListener("click", () => sliderNav(i)));
