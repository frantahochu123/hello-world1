function helloWorld() {
    const vysledek = 1 + 3 //const nelze měnit
    const vysledek2 = 2 + 4
    let vysledek3 = 3 + 3
        vysledek3 = vysledek3 + 1 //6 + 1 
  
    printnumber(vysledek,vysledek2,vysledek3)

}
function printnumber(vysledek,vysledek2,vysledek3) {
    console.log("vysledek je:" +  vysledek)
    console.log("vysledek2 je:" + vysledek2)
    console.log("vysledek3 je:" + vysledek3)
}
helloWorld()
function okay() {
console.log("ahojdá")
}