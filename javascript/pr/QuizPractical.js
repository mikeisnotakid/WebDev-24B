var Question1Ans = 'Animal';
var Question2Ans = 'Rat';

function ChangeAns1() {
    var ChangeAns1 = document.getElementById('ChangeAns1').value;

    Question1Ans = ChangeAns1

    var ChangeAns1 = document.getElementById('ChangeAns1').value = ''; 
    
}

// Question 1
function Q1Btn1() {
    var Q1Btn1 = document.getElementById('Q1Btn1').innerHTML;
    if (Q1Btn1 == Question1Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q1Btn2() {
    var Q1Btn2 = document.getElementById('Q1Btn2').innerHTML;
    if (Q1Btn2 == Question1Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q1Btn3() {
    var Q1Btn3 = document.getElementById('Q1Btn3').innerHTML;
    if (Q1Btn3 == Question1Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q1Btn4() {
    var Q1Btn4 = document.getElementById('Q1Btn4').innerHTML;
    if (Q1Btn4 == Question1Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function NExtBtnQ1() {
    document.getElementById('Question1').style.display = 'none'
    document.getElementById('Question2').style.display = 'block'
}



// Question 2



function Q2Btn1() {
    var Q2Btn1 = document.getElementById('Q2Btn1').innerHTML;
    if (Q2Btn1 == Question2Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q2Btn2() {
    var Q2Btn2 = document.getElementById('Q2Btn2').innerHTML;
    if (Q2Btn2 == Question2Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q2Btn3() {
    var Q2Btn3 = document.getElementById('Q2Btn3').innerHTML;
    if (Q2Btn3 == Question2Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function Q2Btn4() {
    var Q2Btn4 = document.getElementById('Q2Btn4').innerHTML;
    if (Q2Btn4 == Question2Ans) {
        alert('Correct')
    } else {
        alert('Wrong')
    }
}

function PreviousBtnQ2() {
    document.getElementById('Question1').style.display = 'block'
    document.getElementById('Question2').style.display = 'none'
}