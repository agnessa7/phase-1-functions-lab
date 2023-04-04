const startingPoint = 42;


  function distanceFromHqInBlocks(distance) {

    let value = distance - startingPoint;
    if (distance < 42){

         value = startingPoint - distance;
    }

  
    return value
              

}

function distanceFromHqInFeet(distance){
    let value = (distanceFromHqInBlocks(distance) * 264);


    return value


}



function distanceTravelledInFeet(startPoint, destination){

    startPoint = distanceFromHqInFeet(distanceFromHqInBlocks(startPoint))
    destination = distanceFromHqInFeet(distanceFromHqInBlocks(destination))

    let value =   startPoint - destination

    return value

}

function calculatesFarePrice(start, destination){

    let calcTravelled = distanceTravelledInFeet(start, destination)
    if (calcTravelled <= 400){
        let value = 0
        return value
    }
    else if (calcTravelled > 400 && calcTravelled <= 2000){
        let rate = 2
        let value = ((calcTravelled * rate ) - (400 * rate))
        return (value/100)
    }
    else if(calcTravelled > 2000 && calcTravelled <= 2500){

        return 25

    }
    else if (calcTravelled > 2500){
        return 'cannot travel that far'
    }
    

}