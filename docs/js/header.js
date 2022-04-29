console.log("loaded!");
const hamburgerBtn = document.getElementsByClassName("hamburger_btn")[0];
const navLinks = document.getElementsByClassName("nav_links")[0];

hamburgerBtn.addEventListener("click", () => {
    console.log("clicked!!");
    navLinks.classList.toggle("nav_active");
});