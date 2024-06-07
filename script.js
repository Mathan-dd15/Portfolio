var typed = new Typed(".multiple-text",{
    strings:["Full-Stack Developer","Python Developer","Web developer","Software Developer"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true   
})

var Education = document.querySelector("#education")
var Experiences = document.querySelector("#Experiences")
var Skills = document.querySelector("#skill")

var eduDetails = document.querySelector("#Eduaction")
var expDetails = document.querySelector("#uniq")
var skiDetails = document.querySelector("#skills")

Education.addEventListener("click", function(){
    eduDetails.style.display = "block"
    expDetails.style.display = "none"
    skiDetails.style.display = "none"
})

Experiences.addEventListener("click", function(){
    eduDetails.style.display = "none"
    expDetails.style.display = "block"
    skiDetails.style.display = "none"
    

    
})

Skills.addEventListener("click", function(){
    eduDetails.style.display = "none"
    expDetails.style.display = "none"
    skiDetails.style.display = "block"
})