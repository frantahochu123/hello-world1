function looping(){ 
    let text = " "
    for (let i = 1; i < 251; i++) {
        text += i+ ","
    } 
    console.log (text)

}

function loopingAnother() {
    let zpráva = " "
    for (let i = 15; i <= 150; i++) {
   zpráva += i + "<br>"}
document.getElementById("rke").innerHTML = zpráva;

}

function perke(){
    let zpráva = " "
    for (let i = 1; i <= 100; i++) 
    if (i % 2 === 0) {
        zpráva += i + "<br>"
    } document.getElementById("org").innerHTML = zpráva;
}

function kerpet(){
sluvko  = ""
const inputNumber =parseInt(document.getElementById("ok").value)
for (let i=0; i <= inputNumber; i++){

    sluvko += i + "<br>"
}
document.getElementById("kokos").innerHTML = sluvko;
}

function Twothree() {
    let perk = "";
    const inputNumber = parseInt(document.getElementById("ASS").value);
   
    for (let i = 1; i <= inputNumber; i++) {
      if ((inputNumber % 2 === 0 && i % 2 === 0) || (inputNumber % 2 !== 0 && i % 3 === 0)) {
        perk +=  + i +"<br>";
      }
    }
   
   
    document.getElementById("pk").innerHTML = perk;
  }