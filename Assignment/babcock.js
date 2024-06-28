let SearchBtn = document.querySelector(".fa-bars");

let Cancel_icon = document.querySelector('.fa-times');


SearchBtn.addEventListener("click", function () {
    document.querySelector(".nav-dropdown-div").style.display = "block";

    SearchBtn = document.querySelector(".fa-bars").style.display = "none";
    Cancel_icon = document.querySelector(".fa-times").style.display = "block";


})

Cancel_icon.addEventListener("click", function () {
    document.querySelector(".nav-dropdown-div").style.display = "none";
    SearchBtn = document.querySelector(".fa-bars").style.display = "block";
    Cancel_icon = document.querySelector(".fa-times").style.display = "none";
});


  








