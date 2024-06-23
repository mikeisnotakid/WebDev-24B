let DropdownBtn = document.getElementById("mydropdownbtn");
let DropdownBtn2 = document.getElementById("mydropdownbtn2");
let DropdownBtn3 = document.getElementById("mydropdownbtn3");


DropdownBtn.addEventListener("mouseover", function () {
    document.getElementById("dropdown").style.display = "block";

})


DropdownBtn2.addEventListener("mouseover", function () {
    document.getElementById("dropdown2").style.display = "block";
    
})


DropdownBtn3.addEventListener("mouseover", function () {
    document.getElementById("dropdown").style.display = "block";
})

document.body.addEventListener('click', function () {
    document.getElementById("dropdown").style.display = "none";
});

document.body.addEventListener('click', function () {
    document.getElementById("dropdown2").style.display = "none";
});

