let animalWeights = []
 
function addWeight() {
        const AnimalWeightInput = parseInt(document.getElementById("inputWeight").value)
 
        animalWeights.push(AnimalWeightInput)

        document.getElementById("currentAnimalWeight").innerHTML = "AnimalWeight:" + AnimalWeightInput + "kg"
 
 
        let animalWeightsSum = 0
 
        for(let i = 0; i < animalWeights.length; i++) {
            animalWeightsSum += animalWeights[i]
        }
 
        document.getElementById("sumOfWeight").innerHTML = "sum of weights:" + animalWeightsSum + "kg"
 
 
    }
function addAnimal(){

    const animal = {
        name: "",
        weight: 0,
        species: "",
    }
    let nameInput = document.getElementById("animalName").value
    let weightInput = document.getElementById("animalWeight").value
    let speciesInput = document.getElementById("animalSpecies").value

    animal.push
    
    document.getElementById("arrayObjectOutput").innerHTML = "all Animals:" + nameInput + " " + weightInput + " " + speciesInput

}