userData = []
function calculatorBMI() {

    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput = parseFloat(document.getElementById("height").value)

    const BMI = weightInput / ((heightInput * heightInput)).toFixed(1)
    
     if (weightInput <= 0 || heightInput <= 0) {
        document.getElementById("output").innerHTML = "nespráná váha"
        userData.push("nesprávná váha")
    }else if(BMI < 18.5){
        document.getElementById("output").innerHTML = "podváha"
        userData.push("podváha")
    }else if(BMI >= 18.5 && BMI < 25) {
        document.getElementById("output").innerHTML = "normální váha"
        userData.push("normální váha")
    }else if(BMI >= 25 && BMI < 30) {
        document.getElementById("output").innerHTML = "nadváha"
        userData.push("nadváha")
    }else if(BMI >= 30) {
        document.getElementById("output").innerHTML = "obezita"
        userData.push("obezita")
    }

    console.log(userData)
    document.getElementById("arrayOutput").innerHTML = userData

}


    
