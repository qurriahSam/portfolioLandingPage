document.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("solid-scroll", window.scrollY > 0);
});
