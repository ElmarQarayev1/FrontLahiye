let courses = [];
let visibleCourses = 6;
let coursesBox = document.getElementById("courseId");

function createCourse(course) {
    let courseBox = `<div class="col-lg-4 col-md-6 coursebox">
        <div class="single-course pb-5 mb-70">
            <div class="course-img">
                <a href="course-details.html?id=${course.id}"><img src="${course.imgPath}" alt="course"></a>
            </div>
            <div class="coursecontent pl-4 pt-4">
                <h3><a href="course-details.html?id=${course.id}">${course.name}</a></h3>
                <p>${course.description}</p>
                <button class="btn btn-lg"><a data-id="${course.id}" href="course-details.html?id=${course.id}">READ MORE</a></button>
            </div>
        </div>
    </div>`;
    return courseBox;
}

function loadMoreCourses() {
    fetch("http://localhost:5000/courses")
    .then(response => response.json())
    .then(data => {
        courses = data;
        showCourses();
    });
}
function showCourses() {
    coursesBox.innerHTML = "";
    for (let i = 0; i < visibleCourses && i < courses.length; i++) {
        let createdCourseElem = createCourse(courses[i]);
        coursesBox.innerHTML += createdCourseElem;
    }
    if (visibleCourses >= courses.length) {
        document.getElementById("loadMoreBtn").style.display = "none";
    }
}

document.getElementById("loadMoreBtn").addEventListener("click", loadMoreCourses);

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
                courses = filteredCourses;
                showCourses();
                document.getElementById("searchCourse").value = ""; 
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
}
function filterCoursesKey() {
    document.getElementById("searchCourse").addEventListener("keyup", function(e) {
        if (e.key === "Enter") {
            let inputValue = this.value.toLowerCase().trim();

            fetch(`http://localhost:5000/courses/search?name=${inputValue}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(filteredCourses => {
                    courses = filteredCourses;
                    showCourses(); 
                      document.getElementById("searchCourse").value = ""; 
                   
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });
}
function FilterSearchOpen() {
    
    const searchResults = document.getElementById('searchResults');
    
    searchopen.addEventListener("input", function(e) {
        let inputValue = e.target.value.toLowerCase().trim();
        
        fetch(`http://localhost:5000/courses/search?name=${inputValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(filteredCourses => {
            courses = filteredCourses;
            displaySearchResults(courses, searchResults);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
}

function displaySearchResults(results, container) {
    container.innerHTML = "";
    
    if (results.length > 0) {
        container.style.display = 'block';
        
        results.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.textContent = course.name; 
            container.appendChild(courseDiv);
        });
    } else {
        container.style.display = 'none';
    }
}
document.addEventListener('click', function(e) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults.contains(e.target) && e.target.id !== 'searchopen') {
        searchResults.style.display = 'none';
    }
});


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
    let imgCourse = this.document.querySelector(".imgCourse");

    if (window.scrollY > 5) { 
        imgCourse.style.paddingTop = "0px";
        navbar.classList.add("scrolled");
        navbar.classList.add("gotoTop");
        imgCourse.classList.add("gotoTop");
    } else {
        imgCourse.style.paddingTop = "140px";
        navbar.classList.remove("scrolled");
        navbar.classList.remove("gotoTop");
    }
});

function loadMore() {
    visibleCourses += 6; 
    showCourses(); 
    if (visibleCourses >= courses.length) {
        document.getElementById("loadMoreBtn").style.display = "none";
    }
}

document.getElementById("loadMoreBtn").addEventListener("click", loadMore); 

let searchbutton=document.querySelector(".ahref");
let searchopen=document.querySelector(".search-open");



let check=false;
searchbutton.addEventListener("click",function(){
    check=!check;
    
    if(check){

        searchopen.style.display="block";
    }
    else{
        searchopen.style.display="none";
    }  
})
FilterSearchOpen();
filterCoursesKey();
loadMoreCourses(); 
filterCourses(); 