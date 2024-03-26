function sumNumbers() {
 
    let inputNumber = parseInt(document.getElementById("inputNumber").value)
     outputNumber = 0
   
        for (let i = 0; i <= inputNumber; i++){
   
          outputNumber = outputNumber + i
   
        }

        document.getElementById("outputNumber").innerHTML = outputNumber
 
}