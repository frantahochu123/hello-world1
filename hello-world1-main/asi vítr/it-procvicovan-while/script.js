function sekyra() {
  let Imesice = parseInt(document.getElementById("mesice").value);
  let zprava;

  switch (Imesice) {
      case 1:
          zprava = "je leden";
          break;
      case 2:
          zprava = "je únor";
          break;
      case 3:
          zprava = "je březen";
          break;
      case 4:
          zprava = "je duben";
          break;
      case 5:
          zprava = "je květen";
          break;
      case 6:
          zprava = "je červen";
          break;
      case 7:
          zprava = "je červenec";
          break;
      case 8:
          zprava = "je srpen";
          break;
      case 9:
          zprava = "je zaří";
          break;
      case 10:
          zprava = "je říjen";
          break;
      case 11:
          zprava = "je listopad";
          break;
      case 12:
          zprava = "je prosinec";
          break;
     
  }

  document.getElementById("suk").innerHTML =  zprava;
}
function bukanyr() {
 let i = 0
  let result =" "
 while(i < 20 ) {
    i++;
    if (i % 2 === 0)
     result += i + "<br>"    }
   
      document.getElementById("pak").innerHTML = result;
}