document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 140) { 
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.display = "none";
});
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar2");
    let imgCourse=this.document.querySelector(".imgCourse");

    if (window.scrollY > 5) { 
        imgCourse.style.paddingTop="0px";
        navbar.classList.add("scrolled");
        navbar.classList.add("gotoTop");
        imgCourse.classList.add("gotoTop")
    } else {
        imgCourse.style.paddingTop="140px";
        navbar.classList.remove("scrolled");
        navbar.classList.remove("gotoTop");
    }
});
