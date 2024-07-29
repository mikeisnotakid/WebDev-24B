var CardNumber = document.getElementById('cardNumber');
var RecieveCardNum =  document.getElementById('RecieveCardNumber');

function SendCardName() {
    var CardNAme = document.getElementById('cardName').value;
    document.getElementById('RecieveCardName').innerHTML = CardNAme.toUpperCase();

}
function SendCardNumber() {
    
   RecieveCardNum.innerHTML = CardNumber.value;
  
}





function SendCardMM() {
    var CardMM = document.getElementById('MM').value;
    document.getElementById('CardMM').innerHTML = CardMM;
}

function SendCardYY() {
    var CardYY = document.getElementById('YY').value;
    document.getElementById('CardYY').innerHTML = CardYY;
}


function SendCardCVC() {
    var CardCVC = document.getElementById('CVC').value;
    document.getElementById('RecieveCardCVC').innerHTML = CardCVC;

}

