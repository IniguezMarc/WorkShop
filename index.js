const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.hasAttribute("typed")) {
        entry.target.classList.add("typing-animation");
        let length = entry.target.textContent.length;
        entry.target.style.animationTimingFunction =
          "steps(" + length + ",end)";
        entry.target.style.animationDuration = "1s";
      } else {
        entry.target.classList.add("show");
      }
    } else {
      if (entry.target.hasAttribute("typed")) {
        entry.target.classList.remove("typing-animation");
      } else {
        entry.target.classList.remove("show");
      }
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector(".themeSwitch").addEventListener("click", function (e) {
  let theme = document.documentElement.getAttribute("data-theme");
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    e.target.src = "assets/icons/bulbOff.png";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    e.target.src = "assets/icons/bulbOn.png";
  }
});
