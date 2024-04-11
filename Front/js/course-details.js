let urlParams = new URLSearchParams(window.location.search);
let courseId = urlParams.get("id");

loadCourses();
  function loadCourses(){
  let courseDetailsBox=document.querySelector(".courseDetails");
fetch(`http://localhost:5000/courses/${courseId}`)
  .then(response => response.json())
  .then(course => {
    let imgCourse = document.querySelector(".img2 img");
    imgCourse.src = course.imgPath; 
    let aboutCourse = document.querySelector(".aboutcourseF h1");
    aboutCourse.innerText = course.name;
    let courseDetails=createCourseDetails(course);
courseDetailsBox.innerHTML=courseDetails;
  })
  .catch(error => {
    console.error("Error occurred: " + error);
  });
  }
  function createCourseDetails(course){
    let courseBox=`<div class="course-details-right">
    <h3 class="pt-5 pl-4 pb-3">COURSE FEATURES</h3>
    <ul>
        <li> STARTS <span>${course.startDate.toString("YYYY-MM-DD")}</span></li>
        <li>DURATIONS <span>${course.durations} MONTH</span></li>
        <li>CLASS DURATION <span>${course.classDurations} HOURS</span></li>
        <li>SKILL LEVEL <span>ALL LEVEL</span></li>
        <li>LANGUAGE <span>${course.language}</span></li>
        <li>STUDENTS <span>${course.studentCount}</span></li>
        <li>ASSESMENTS <span>SELF</span></li>
    </ul>
    <h3 class="red pt-1 pl-4">COURSE FEE $${course.value}</h3>
</div>`
return courseBox;
  }
