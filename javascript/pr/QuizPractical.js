var Question1Ans = 'Animal';
var Question2Ans = 'Rat';





// function ChangeAns1() {
//     var ChangeAns1 = document.getElementById('ChangeAns1').value;

//     Question1Ans = ChangeAns1

//     var ChangeAns1 = document.getElementById('ChangeAns1').value = '';

// }

// Home Page 

var UserDetails = [];

function SubmitLogIn() {
    var SignUpuserName = document.getElementById('SignUpuserName').value;
    var SignUpEmail = document.getElementById('SignUpEmail').value;
    var SignUpPassword = document.getElementById('SignUpPassword').value;


    if (SignUpuserName.length >= 3 && SignUpEmail.length >= 4 && SignUpPassword.length >= 4) {
        var registrationSucDiv = document.getElementById('registrationSucDiv');
        registrationSucDiv.style.display = 'block';
        UserDetails[UserDetails.length] = { Name: SignUpuserName, Pass: SignUpPassword }
        var SignUpDiv = document.getElementById('SignUpDiv');
        SignUpDiv.style.display = 'none'
        var SignUpuserName = document.getElementById('SignUpuserName').value = '';
        var SignUpEmail = document.getElementById('SignUpEmail').value = '';
        var SignUpPassword = document.getElementById('SignUpPassword').value = '';
 
    }else{
      var SignAlert = document.getElementById('SignAlert');
      SignAlert.style.display = 'block'
      SignAlert.innerHTML = 'Username, Email and Password Field is Required';
      
    }





}

function RegSucBtn() {
    var registrationSucDiv = document.getElementById('registrationSucDiv');
    registrationSucDiv.style.display = 'none';
    var LoginDiv = document.getElementById('LoginDiv');
    LoginDiv.style.display = 'block'
    var SignUpDiv = document.getElementById('SignUpDiv');
    SignUpDiv.style.display = 'none'
}

function ShowSignUp() {
    var SignUpDiv = document.getElementById('SignUpDiv');
    var LoginDiv = document.getElementById('LoginDiv');
    LoginDiv.style.display = 'none'
    SignUpDiv.style.display = 'block';

}

function ShowLogin() {
    var SignUpDiv = document.getElementById('SignUpDiv');
    var LoginDiv = document.getElementById('LoginDiv');
    LoginDiv.style.display = 'block'
    SignUpDiv.style.display = 'none';
}

function DisplayLoginBtn() {
    var HmLOGinBtn = document.getElementById('HmLOGinBtn')
    var USernameValue = document.getElementById('USernameValue').value;
    var alertMEssage = document.getElementById('alertMEssage');
    var PasswordValue = document.getElementById('PasswordValue').value;
    if (UserDetails.length == 0) {
        alertMEssage.innerHTML = 'Incorect Details';
        alertMEssage.style.color = 'red';
        HmLOGinBtn.style.display = 'none'
    } else if (UserDetails[0].Name == USernameValue && UserDetails[0].Pass == PasswordValue) {
        alertMEssage.innerHTML = 'Details Verified Login !!';
        alertMEssage.style.color = 'blue';
        HmLOGinBtn.style.display = 'block'
    } else {
        alertMEssage.innerHTML = 'Incorect Details';
        alertMEssage.style.color = 'red';
        HmLOGinBtn.style.display = 'none'
    }
    // if (UserDetails[0].Name == USernameValue && UserDetails[0].Pass == PasswordValue) {

    //     alertMEssage.innerHTML = 'Details Verified Login !!';
    //     alertMEssage.style.color = 'blue';
    //     // HmLOGinBtn.style.visibility = 'visible'


    //     HmLOGinBtn.style.display = 'block'

    // } else {
    //     alertMEssage.innerHTML = 'Incorect Details';
    //     alertMEssage.style.color = 'red';
    //     HmLOGinBtn.style.display = 'none'
    // }
}

function CheckUSerNAmeValue() {
    var HmLOGinBtn = document.getElementById('HmLOGinBtn')
    var USernameValue = document.getElementById('USernameValue').value;
    var alertMEssage = document.getElementById('alertMEssage');
    var PasswordValue = document.getElementById('PasswordValue').value;
    if (UserDetails.length == 0) {
        alertMEssage.innerHTML = 'Incorect Details';
        alertMEssage.style.color = 'red';
        HmLOGinBtn.style.display = 'none'
    } else if (UserDetails[0].Name == USernameValue && UserDetails[0].Pass == PasswordValue) {
        alertMEssage.innerHTML = 'Details Verified Login !!';
        alertMEssage.style.color = 'blue';
        HmLOGinBtn.style.display = 'block'
    } else {
        alertMEssage.innerHTML = 'Incorect Details';
        alertMEssage.style.color = 'red';
        HmLOGinBtn.style.display = 'none'
    }
    // if (UserDetails[0].Name == USernameValue && UserDetails[0].Pass == PasswordValue) {

    //     alertMEssage.innerHTML = 'Details Verified Login !!';
    //     alertMEssage.style.color = 'blue';
    //     // HmLOGinBtn.style.visibility = 'visible'


    //     HmLOGinBtn.style.display = 'block'

    // } else {
    //     alertMEssage.innerHTML = 'Incorect Details';
    //     alertMEssage.style.color = 'red';
    //     HmLOGinBtn.style.display = 'none'
    // }
}

// function HmLOGinBtn() {
//     var HmLOGinBtn = document.getElementById('HmLOGinBtn');
//     var alertMEssage = document.getElementById('alertMEssage');
//     var PasswordValue = document.getElementById('PasswordValue').value;

//     if (PasswordValue.length >= 7) {
//         alertMEssage.innerHTML = 'Details Verified Login !!';
//         alertMEssage.style.color = 'blue';
//         HmLOGinBtn.style.visibility = 'visible';


//     } else {
//         alertMEssage.innerHTML = 'Incorect Details';
//         alertMEssage.style.color = 'red';
//         HmLOGinBtn.style.visibility = 'hidden'
//     }
// }


// if (PasswordValue.length >= 7){

//    HmLOGinBtn2.style.display = 'block' 
// }else{
//     HmLOGinBtn2.style.display = 'none' 
// }

// function ChangeToLightMode() {
//     var RightContainer = document.getElementById('RightContainer');
//     var LeftContainer = document.getElementById('LeftContainer');
//     var LeftContainerBody = document.getElementById('LeftContainerBody');
//     var FaSun = document.getElementById('FaSun');

//     RightContainer.style.backgroundColor = 'white'
//     LeftContainer.style.backgroundColor = 'white'
//     LeftContainerBody.style.color = 'black'
//     FaSun.style.color = 'purple'
//     FaSun.style.display = 'none'

// }



// Question 1

function Q1Btn1() {
    var Q1Btn_1 = document.getElementById('Q1Btn_1')
    var Q1Btn1 = document.getElementById('Q1Btn1').innerHTML;
    if (Q1Btn1 == Question1Ans) {
        // alert('Correct')
        Q1Btn_1.style.border = '4px solid blue'
        Q1Btn_1.style.borderRadius = '15px'

        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'


    } else {
        // alert('Wrong')
        Q1Btn_1.style.border = '4px solid red'
        Q1Btn_1.style.borderRadius = '15px'
        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'

    }
}

function Q1Btn2() {
    var Q1Btn_2 = document.getElementById('Q1Btn_2')
    var Q1Btn2 = document.getElementById('Q1Btn2').innerHTML;
    if (Q1Btn2 == Question1Ans) {
        // alert('Correct')
        Q1Btn_2.style.border = '4px solid blue'
        Q1Btn_2.style.borderRadius = '15px'

        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q1Btn_2.style.border = '4px solid red'
        Q1Btn_2.style.borderRadius = '15px'
        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'
    }
}

function Q1Btn3() {
    var Q1Btn_3 = document.getElementById('Q1Btn_3')
    var Q1Btn3 = document.getElementById('Q1Btn3').innerHTML;
    if (Q1Btn3 == Question1Ans) {
        // alert('Correct')
        Q1Btn_3.style.border = '4px solid blue'
        Q1Btn_3.style.borderRadius = '15px'

        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q1Btn_3.style.border = '4px solid red'
        Q1Btn_3.style.borderRadius = '15px'
        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_4').style.visibility = 'hidden'
    }
}

function Q1Btn4() {
    var Q1Btn_4 = document.getElementById('Q1Btn_4')
    var Q1Btn4 = document.getElementById('Q1Btn4').innerHTML;
    if (Q1Btn4 == Question1Ans) {
        // alert('Correct')
        Q1Btn_4.style.border = '4px solid blue'
        Q1Btn_4.style.borderRadius = '15px'

        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q1Btn_4.style.border = '4px solid red'
        Q1Btn_4.style.borderRadius = '15px'
        document.getElementById('Q1Btn_1').style.visibility = 'hidden'
        document.getElementById('Q1Btn_2').style.visibility = 'hidden'
        document.getElementById('Q1Btn_3').style.visibility = 'hidden'
    }
}

function NExtBtnQ1() {
    document.getElementById('Question1').style.display = 'none'
    document.getElementById('Question2').style.display = 'block'

}



// Question 2



function Q2Btn1() {
    var Q2Btn_1 = document.getElementById('Q2Btn_1')
    var Q2Btn1 = document.getElementById('Q2Btn1').innerHTML;
    if (Q2Btn1 == Question2Ans) {
        // alert('Correct')
        Q2Btn_1.style.border = '4px solid blue'
        Q2Btn_1.style.borderRadius = '15px'

        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q2Btn_1.style.border = '4px solid red'
        Q2Btn_1.style.borderRadius = '15px'
        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    }
}

function Q2Btn2() {
    var Q2Btn_2 = document.getElementById('Q2Btn_2')
    var Q2Btn2 = document.getElementById('Q2Btn2').innerHTML;
    if (Q2Btn2 == Question2Ans) {
        // alert('Correct')
        Q2Btn_2.style.border = '4px solid blue'
        Q2Btn_2.style.borderRadius = '15px'

        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q2Btn_2.style.border = '4px solid red'
        Q2Btn_2.style.borderRadius = '15px'
        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    }
}

function Q2Btn3() {
    var Q2Btn_3 = document.getElementById('Q2Btn_3')
    var Q2Btn3 = document.getElementById('Q2Btn3').innerHTML;
    if (Q2Btn3 == Question2Ans) {
        // alert('Correct')
        Q2Btn_3.style.border = '4px solid blue'
        Q2Btn_3.style.borderRadius = '15px'

        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q2Btn_3.style.border = '4px solid red'
        Q2Btn_3.style.borderRadius = '15px'
        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    }
}

function Q2Btn4() {
    var Q2Btn_4 = document.getElementById('Q2Btn_4')
    var Q2Btn4 = document.getElementById('Q2Btn4').innerHTML;
    if (Q2Btn4 == Question2Ans) {
        // alert('Correct')
        Q2Btn_4.style.border = '4px solid blue'
        Q2Btn_4.style.borderRadius = '15px'

        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q2Btn_4.style.border = '4px solid red'
        Q2Btn_4.style.borderRadius = '15px'
        document.getElementById('Q2Btn_1').style.visibility = 'hidden'
        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
    }
}

function PreviousBtnQ2() {
    document.getElementById('Question1').style.display = 'block'
    document.getElementById('Question2').style.display = 'none'
}

function NExtBtnQ2() {
    document.getElementById('Question3').style.display = 'block'
    document.getElementById('Question2').style.display = 'none'
}



// Question 3


function Q3Btn1() {
    var Q3Btn_1 = document.getElementById('Q3Btn_1')
    var Q3Btn1 = document.getElementById('Q3Btn1').innerHTML;
    if (Q3Btn1 == Question2Ans) {
        // alert('Correct')
        Q3Btn_1.style.border = '4px solid blue'
        Q3Btn_1.style.borderRadius = '15px'

        document.getElementById('Q2Btn_2').style.visibility = 'hidden'
        document.getElementById('Q2Btn_3').style.visibility = 'hidden'
        document.getElementById('Q2Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q3Btn_1.style.border = '4px solid red'
        Q3Btn_1.style.borderRadius = '15px'
        document.getElementById('Q3Btn_2').style.visibility = 'hidden'
        document.getElementById('Q3Btn_3').style.visibility = 'hidden'
        document.getElementById('Q3Btn_4').style.visibility = 'hidden'
    }
}

function Q3Btn2() {
    var Q3Btn_2 = document.getElementById('Q2Btn_2')
    var Q3Btn2 = document.getElementById('Q2Btn2').innerHTML;
    if (Q3Btn2 == Question2Ans) {
        // alert('Correct')
        Q3Btn_2.style.border = '4px solid blue'
        Q3Btn_2.style.borderRadius = '15px'

        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_3').style.visibility = 'hidden'
        document.getElementById('Q3Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q3Btn_2.style.border = '4px solid red'
        Q3Btn_2.style.borderRadius = '15px'
        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_3').style.visibility = 'hidden'
        document.getElementById('Q3Btn_4').style.visibility = 'hidden'
    }
}

function Q3Btn3() {
    var Q3Btn_3 = document.getElementById('Q3Btn_3')
    var Q3Btn3 = document.getElementById('Q3Btn3').innerHTML;
    if (Q3Btn3 == Question2Ans) {
        // alert('Correct')
        Q3Btn_3.style.border = '4px solid blue'
        Q3Btn_3.style.borderRadius = '15px'

        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_2').style.visibility = 'hidden'
        document.getElementById('Q3Btn_4').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q3Btn_3.style.border = '4px solid red'
        Q3Btn_3.style.borderRadius = '15px'
        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_2').style.visibility = 'hidden'
        document.getElementById('Q3Btn_4').style.visibility = 'hidden'
    }
}

function Q3Btn4() {
    var Q3Btn_4 = document.getElementById('Q2Btn_4')
    var Q3Btn4 = document.getElementById('Q2Btn4').innerHTML;
    if (Q3Btn4 == Question2Ans) {
        // alert('Correct')
        Q3Btn_4.style.border = '4px solid blue'
        Q3Btn_4.style.borderRadius = '15px'

        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_2').style.visibility = 'hidden'
        document.getElementById('Q3Btn_3').style.visibility = 'hidden'
    } else {
        // alert('Wrong')
        Q3Btn_4.style.border = '4px solid red'
        Q3Btn_4.style.borderRadius = '15px'
        document.getElementById('Q3Btn_1').style.visibility = 'hidden'
        document.getElementById('Q3Btn_2').style.visibility = 'hidden'
        document.getElementById('Q3Btn_3').style.visibility = 'hidden'
    }
}

function PreviousBtnQ3() {
    document.getElementById('Question2').style.display = 'block'
    document.getElementById('Question3').style.display = 'none'
}

function NExtBtnQ3() {
    document.getElementById('Question4').style.display = 'block'
    document.getElementById('Question3').style.display = 'none'
}