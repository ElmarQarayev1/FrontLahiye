loadCourses();
filterCourses();
function createCourse(course){
    let courseBox=`<div class="col-lg-4 col-md-6">
    <div class="single-course pb-5 mb-70">
        <div class="course-img">
            <a href="course-details.html"><img src="${course.imgPath}" alt="course">
            </a>
        </div>
        <div class="coursecontent pl-4 pt-4">
            <h3><a href="course-details.html">${course.name}</a></h3>
            <p>${course.description}</p>
            <button class="btn btn-lg"><a data-id="${course.id}" href="course-details.html?id=${course.id}">read more</a></button>
        </div>   
    </div>
</div> `
 return courseBox;
}
let coursesBox=document.getElementById("courseId");

function loadCourses(){
    
    fetch("http://localhost:5000/courses")
    .then(response=>response.json())
    .then(data=>{
        data.forEach(course => {
            let createdCourseElem=createCourse(course);
            coursesBox.innerHTML+=createdCourseElem;    
        });
    })
}
function filterCourses() {
    document.getElementById("searchbtn").addEventListener("click", function(e) {
        let inputValue = document.getElementById("searchCourse").value.toLowerCase().trim();
        fetch(`http://localhost:5000/courses/search?name=${inputValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(filteredCourses => {
                coursesBox.innerHTML = ""; 
                filteredCourses.forEach(course => {
                    let createdCourseElem = createCourse(course);
                    coursesBox.innerHTML+=createdCourseElem;
                    document.getElementById("searchCourse").value = ""; 
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
}
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


