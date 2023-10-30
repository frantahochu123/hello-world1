function checkResult() {
    const inputNumber = (document.getElementById("numberCheck").value)
        if (inputNumber < 18) {
            console.log("Dětský Uživatel")
        } else if (inputNumber > 18) {
            console.log("dospělý uživatel")
        }
        if (inputNumber > 2004) {
            console.log("dětský rok")
        } else if (inputNumber < 2005) {
            console.log("dospělý rok")
        }


}


