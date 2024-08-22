var dropDownContent = document.getElementById('dropDownContent');
var RgtFirstContainer = document.getElementById('RgtFirstContainer');
function dropDownMenu() {
    if (dropDownContent.style.display == 'block') {
        dropDownContent.style.display = 'none'
        RgtFirstContainer.style.marginTop = '0px'
    } else {
        dropDownContent.style.display = 'block'
        RgtFirstContainer.style.marginTop = '150px'
    }

    // console.log(dropDownContent.style.display)


}


function ChangeNavMSet() {
    dropDownContent.style.display = 'none'
    RgtFirstContainer.style.marginTop = '0px'
}
