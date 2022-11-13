const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target)
      if ( entry.target.hasAttribute('typed')) {
        entry.target.classList.add("typing-animation");
        let length = entry.target.textContent.length;
        entry.target.style.animationTimingFunction = 'steps('+length+',end)';
        entry.target.style.animationDuration = '1s';
      }else{
        entry.target.classList.add("show");
      }
    } else {
      if ( entry.target.hasAttribute('typed')) {
        entry.target.classList.remove("typing-animation");
      }else{
        entry.target.classList.remove("show");
      }
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

rain();
function rain() {
  const numRain = 3;
  const rainItems = [
    "angular.png",
    "code.webp",
    "html.png",
    "html2.png",
    "js.png",
    "node.webp",
    "react.png",
    "sql.png",
  ];
  const body = document.querySelector("body");
  rainItems.forEach((element) => {
    for (let index = 0; index < numRain; index++) {
      let rainElement = document.createElement("img");
      rainElement.classList.add("rainElement");
      rainElement.src = "assets/rain/" + element;
      rainElement.alt = "";
      rainElement.style.top = Math.random() * 100 + "%";
      rainElement.style.animation =
        "rainAnimation " + randomIntFromInterval(20, 40) + "s 2";
      rainElement.style.animationIterationCount = "infinite";
      rainElement.style.animationDelay = "-100s";
      body.appendChild(rainElement);
    }
  });
}

  document.querySelector('.themeSwitch').addEventListener("click", function(e) {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme == "dark") {
      document.documentElement.setAttribute('data-theme', 'light');
      e.target.src = "assets/icons/bulbOff.png";
  }
  else {
      document.documentElement.setAttribute('data-theme', 'dark');
      e.target.src = "assets/icons/bulbOn.png";
  }    
});


