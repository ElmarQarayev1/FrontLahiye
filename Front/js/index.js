loadCourses();
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
function loadCourses(){
    let coursesBox=document.getElementById("courseId");
    fetch("http://localhost:5000/courses")
    .then(response=>response.json())
    .then(data=>{
        data.forEach(course => {
            let createdCourseElem=createCourse(course);
            coursesBox.innerHTML+=createdCourseElem;    
        });
    })
}