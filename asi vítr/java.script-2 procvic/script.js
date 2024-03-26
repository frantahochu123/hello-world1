function addition(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const additionResult = inputFirstNumber + inputSecondNumber

    document.getElementById("result").value = additionResult
}

function subtraction(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value )
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const subtractionResult = inputFirstNumber - inputSecondNumber

    document.getElementById("result").value = subtractionResult

}
function times(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value )
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const timesResult = inputFirstNumber * inputSecondNumber

    document.getElementById("result").value = timesResult
}
function devide(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value )
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const divideResult = inputFirstNumber / inputSecondNumber

    document.getElementById("result").value = divideResult

}

function checkResult(){
    
    const inputnumber = document.getElementById("numberToCheck").class;

    if(inputNumber > 10) { //pokud pravda provede se kod
        console.log("větší než 10") //kod: x
    }else if(inputNumber >10){
        console.log("VĚTŠÍ NEŽ 10")
    }
}

const cars = ["Audi", "Bmw", "Mercedes" ]
const number = [1, 3, 5,]
const carsInGarage = ["audi", 1, "bmw", 3]

const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "volvo";
cars2[2]= "BMW";
 
console.log(cars2)

function forLoop() {

    for(let i = 0; i <10; i++) {

    console.log("Ahoj")

    }

}







function forLoop(){



}