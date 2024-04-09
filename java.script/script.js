function myFunction() {

    var variable1; // NEbude používat //
    let variable2; // budeme používat //
    const variable3 = 3; // nemohu poté změnit //
    variable4 = "ahoj" //string //
    variable5 = 5; // number / int / integer //
    variable6 = true //boolean

    const userFirstName = document.getElementById("firstName").value
    const userLastName = document.getElementById("lastName").value

    const userfullName = userFirstName + " " + userLastName 
    
    document.getElementById("fullName").value = userfullName

    console.log(userFirstName)


}

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