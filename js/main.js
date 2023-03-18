/*hamburger nav click */
function navmenuicon() {
    var x = document.getElementById("mymainnav");
    if (x.className === "mainnav") {
        x.className += " responsive";
    } else {
        x.className = "mainnav";
    }
}

/*highlight navigation on scroll */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".mainnav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".mainnav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}