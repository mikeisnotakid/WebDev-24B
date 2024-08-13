var CardNumber = document.getElementById('cardNumber');
var RecieveCardNum = document.getElementById('RecieveCardNumber');
var CardNAme = document.getElementById('cardName');
var CardMM = document.getElementById('MM');
var CardYY = document.getElementById('YY');
var CardCVC = document.getElementById('CVC');


function SendCardName() {
   
    document.getElementById('RecieveCardName').innerHTML = CardNAme.value.toUpperCase();
    if (CardNAme.value.length > 18) {
        CardNAme.value = CardNAme.value.slice(0, 18)
    }
}
function SendCardNumber() {
    if (CardNumber.value.length > 14) {
        CardNumber.value = CardNumber.value.slice(0, 14)
    }

    RecieveCardNum.innerHTML = CardNumber.value;

}





function SendCardMM() {
    document.getElementById('CardMM').innerHTML = CardMM.value;
    if (CardMM.value.length > 2){
        CardMM.value = CardMM.value.slice(0,1)
    }
}

function SendCardYY() {
    document.getElementById('CardYY').innerHTML = CardYY.value;
    if(CardYY.value.length > 2){
        CardYY.value = CardYY.value.slice(0,1)
    }
}


function SendCardCVC() {
 
    document.getElementById('RecieveCardCVC').innerHTML = CardCVC.value;

    if(CardCVC.value.length >3){
        CardCVC.value = CardCVC.value.slice(0,2)
    }

}

