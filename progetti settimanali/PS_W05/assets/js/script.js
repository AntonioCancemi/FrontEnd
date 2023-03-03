document.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let btn = document.getElementById("getStarted");
  let y = window.scrollY;

  let heroY = 404;
  if (y > heroY) {
    header.classList.add("scrolled_H");
    btn.classList.add("scrolled_btn");
  } else if (y <= heroY) {
    header.classList.remove("scrolled_H");
    btn.classList.remove("scrolled_btn");
  }
});
