  function distanceFromHqInBlocks(a) {
    if (a < 42){
        return 42 - a
    }else if (a > 42){
        return a - 42
    }
    //returns the number of blocks given a value
  }
function distanceFromHqInFeet(a) {
  let blocks=distanceFromHqInBlocks(a)
  let feet=blocks*264
  return feet

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
  function distanceTravelledInFeet(a,b) {
    if (a < b){
        return (b - a) * 264
    }else if (a > b){
        return (a - b) *264
    }
        //returns the number of feet traveled
  }
    function calculatesFarePrice(a,b) {
        let feet=distanceTravelledInFeet(a,b)
        if (feet < 400){
            return 0
        }else if (feet >= 400 && feet <= 2000){
            return (feet - 400) * .02
        }else if (feet >= 2000 && feet <= 2500){
            return 25
        }else if (feet > 2500){
            return 'cannot travel that far'
        }

    //returns the fare for the customer
  }