var birthYears = [1989, 1994, 1993, 2005, 1990, 1876];

function checkAge(inputInteger) {
    currentYear = 2017;
    currentAge = Number(2017 - inputInteger);
    var result = [];
    //
    console.log("Is 18 or older: ", currentAge >= 18);
    result[0] = currentAge >= 18
    
    console.log("Current Age: ", currentAge);
    result[1] = currentAge

    return result;
}

function fillArray(inputArray) {
    outputArray = [];
    for(var index = 0; index < inputArray.length;index++){
        outputArray.push(checkAge(inputArray[index])[0]);
    }
    return outputArray;
}

function printFullAge(birthYears_array){
    var outPut = fillArray(birthYears_array);
    var resultArray = [];
    for(var index = 0; index < outPut.length; index++) {
        resultArray.push(outPut[index]);
    }
    console.log("Returning: ", resultArray);
    return resultArray;
}

printFullAge(birthYears);