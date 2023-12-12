function conversation(){
  hello()
  howAreYou()
}

function hello(){
    console.log ("ahoj lidi");
    document.getElementById("kokosmaslo").innerHTML += "ahojda! "
    document.getElementById("rizek").value += "lol"

}
function howAreYou(){
 console.log ("jak se máte?");
 document.getElementById("kokosmaslo").innerHTML += " jak se máte?"
 document.getElementById("rizek").value += " get rekt"
}