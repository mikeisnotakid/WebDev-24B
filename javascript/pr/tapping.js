
var DisplayTaps = document.getElementById('DisplayTap');
var CoverScreen = document.querySelector('.cover-screen .child');
var MyUserName = document.getElementById('GetUserName') ;


function AddToDisplayTap() {
    for (var i = 0; i < 1; i++) {
        DisplayTaps.innerHTML++;
    }
    if (DisplayTaps.innerHTML > 10) {
        document.getElementById('SecondBtn').style.display = 'block'
        document.getElementById('FirstBtn').style.display = 'none'
    }


    if (DisplayTaps.innerHTML > 100000) {
        document.getElementById('SecondBtn').style.display = 'none'
        document.getElementById('FirstBtn').style.display = 'block'
    }
    document.getElementById('FirstBtn').style.animation = 'MoveTapbuttons 0.5s  infinite'

}

function AddToDisplayBy3() {

    for (var i = 0; i < 1; i++) {
        DisplayTaps.innerHTML *= 3;
    }

    if (DisplayTaps.innerHTML >= 500) {
        CoverScreen.style.display = 'block'

    }
}

function GiftCoin1() {
    DisplayTaps.innerHTML = 'You got ' + 100000 + 'Mike Coin';
    DisplayTaps.style.fontSize = '30px'
    CoverScreen.style.display = 'none'
    document.getElementById('ThirdBtn').style.display = 'block'
    document.getElementById('FirstBtn').style.display = 'none'
    document.getElementById('SecondBtn').style.display = 'none'
}

function ContinueTapping() {
    DisplayTaps.innerHTML = 100000;
    DisplayTaps.style.fontSize = '90px'
    document.getElementById('ThirdBtn').style.display = 'none'
    document.getElementById('FirstBtn').style.display = 'block'
    document.getElementById('SecondBtn').style.display = 'none'


    // if (DisplayTaps.value >= 50001) {
    //     CoverScreen.style.display = 'none'

    // }
}

function SignUpBtnDisplay() {
    document.querySelector('.login-btn').innerHTML = 'Register'
}

function LoginBtnDisplay(){
     document.querySelector('.login-btn').innerHTML = 'Login'
}

function PerformLogin(){
    document.querySelector('.H1Display').innerHTML = ( 'Hello ' + MyUserName.value + ' Welcome to Mike Coin') ;
 


 if(MyUserName.value === ''){
 document.querySelector('.pop-up-alert').style.display = 'block'
 document.querySelector('.h4alert').innerHTML = 'Enter Username'
 }else{
    document.querySelector('.pop-up-alert').style.display = 'none'  
 }

   
}