// navbar color change on scroll
document.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("solid-scroll", window.scrollY > 0);
});

// typing effect on career
let names = [
  "Software Developer",
  "Programmer",
  "UI/UX Developer",
  "Software Engineer",
  "Web Developer",
];
let inputArea = document.querySelector(".career");
let counter = 0;
let careerIndex = 0;
let displayText = "";
let letter = "";

(typer = () => {
  if (counter === names.length) {
    counter = 0;
  }
  displayText = names[counter];
  letter = displayText.slice(0, ++careerIndex);
  inputArea.innerText = letter;

  if (letter.length === displayText.length) {
    counter++;
    careerIndex = 0;
  }

  setTimeout(typer, 300);
})();
