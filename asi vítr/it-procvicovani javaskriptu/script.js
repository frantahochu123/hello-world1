let cars = ["Škoda","Audi", "Seat", "Volvo"]

let carsObject = [
    {made:"Škoda", model:"Superb", power:110},
    {made:"Audi", model:"RS3", power:294},
    {made:"Seat", model:"Leon",power:92},
    {made:"Volvo", model:"XC90", power:187},
]

function getMostPowerfulCar(){
    let maxPow = 0


    for(car in carsObject){
        if(carsObject[car].power >  getMostPowerfulCar.power){
            getMostPowerfulCar = carsObjects[car]
        }
    }
}


function getArray(){
    for(car in cars){
        console.log(cars[car]);
    }
}

function getObjectArray(){
    for(car in carsObject){

    }
}