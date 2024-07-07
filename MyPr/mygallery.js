let firstBtn = document.querySelector(".first-btn");
let secondbtn = document.querySelector(".second-btn");
let thirdbtn = document.querySelector(".third-btn");

firstBtn.addEventListener("click", function(){
   
   
    document.querySelector(".first-img ").style.display = "block";
    document.querySelector(" .second-img").style.display = "none";
    document.querySelector(".third-img ").style.display = "none";

})

secondbtn.addEventListener("click", function(){
    document.querySelector(" .second-img").style.display = "block";
    document.querySelector(".first-img ").style.display = "none";
    document.querySelector(".third-img ").style.display = "none";
})

thirdbtn.addEventListener("click", function(){
    document.querySelector(".third-img ").style.display = "block";
    document.querySelector(".first-img ").style.display = "none";
    document.querySelector(".second-img ").style.display = "none";
})