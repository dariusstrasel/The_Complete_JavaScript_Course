//// Lecture: variables
////var name = "Darius";
////console.log(name);
////var lastName = 'Strasel';
////console.log(lastName);
////
////var age = 26;
////console.log(age);
////
////var fullAge = true;
////console.log(fullAge);
////
////var name = "Darius";
////var age = 26;
////
////console.log(name + age);
////
////var job, isMarried;
////
////console.log(job);
////
////job = "teacher";
////isMarried = true;
////
////console.log(name + ' ' + age + ' '+ job + ' '+ isMarried);
////
////var lastName = prompt('What?')
//
//// Lecture: operators
//
//var birthYear = 2016 - 26;
//console.log(birthYear);

// Lecture: if/else statements

//var name = 'John';
//var age  = '26';
//var isMarried = true;
//
//if (isMarried === true) {
//    console.log(name + ' is married!');
//}   else {
//    console.log(name + ' is not married.');
//}
//
//if ( age < 20) {
//    console.log(name + ' is a teenager.');
//} else if (age >= 20 && age < 30) {
//    console.log(name + ' is a young man.');
//} else {
//    console.log(name + ' is an adult.');
//}
//
//var job = 'teacher';
//
//job = prompt("What does " + name + ' do?')
//
//switch (job) {
//    case 'teacher':
//        console.log(name + ' teaches kids.');
//        break;
//    case 'driver':
//        console.log(name + ' drives a cab in Lisbon');
//        break;
//    case 'cop':
//        console.log(name + ' helps fight crime.');
//        break;
//    default:
//        console.log(name + ' does something else.');
//}

// Code Challenge:

//var playerOne = 'John';
//var playerTwo = 'Chad';
//var playerThree = 'Suzy';
//
//var playerOneHeight = '100';
//var playerTwoHeight = '90';
//var playerThreeHeight = '96';
//
//var playerOneAge = '26';
//var playerTwoAge = '31';
//var playerThreeAge = '32';
//
//function calculate_score(age, height) {
//    return (Number(height + (age * 5)));
//}
//
//var playerOneScore = calculate_score(playerOneAge, playerOneHeight);
//var playerTwoScore = calculate_score(playerTwoAge, playerTwoHeight);
//var playerThreeScore = calculate_score(playerThreeAge, playerThreeHeight);
//
//console.log(playerOneScore, playerTwoScore, playerThreeScore);
//
//if (playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
//    console.log(playerOne + ' wins! ' + playerOneScore);
//} else if (playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore) {
//    console.log(playerTwo + ' wins! ' + playerTwoScore);
//} else if (playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore) {
//    console.log(playerThree + ' wins! ' + playerThreeScore);
//} else {
//    console.log("Nope.");
//}

// Lecture: Functions

//function calculateAge(yearOfBirth) {
//    var age = 2016 - yearOfBirth;
//    return age;
//}
//
//var ageJohn = calculateAge(1990);
//
//function yearsUntilRetirement(name, yearOfBirth) {
//    var age = calculateAge(yearOfBirth);
//    var retirement = 65 - age;
//    
//    if (retirement >= 0) {
//        console.log(name + ' retires in ' + retirement + ' years.');
//    } else {
//        console.log(name + ' has already retired.');
//    }
//    
//}
//
//console.log(ageJohn);
//yearsUntilRetirement('John', '1990');

// Lecture: Arrays

//var names = ['John', 'Jane', 'Mark'];
//var years = [1990, 1969, 1948];
//
//console.log(names[0]);
//
//var john = ['John', 'Smith', 1990, 'designer', false];
//
//john.push('blue');
//john.pop();
//john.unshift('Mr.');
//john.shift();
//console.log(john);
//
//if (john.indexOf('teacher') === -1) {
//    console.log('John is NOT a teacher.');
//} else {
//    console.log("John is a teacher.");
//}

// Lecture: Objects

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false
};

console.log(john["lastName"]);

var xyz = 'job';
console.log(john[xyz]);