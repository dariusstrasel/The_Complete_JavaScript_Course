///////////////////////////////////////
// Lecture: Hoisting

//calculateAge(1990);
//
//function calculateAge(year) {
//    console.log(2017 - year);
//}

// retirement(1990);

//var retirement = function(year) {
//    console.log(65 - (2016 - year));
//}

// Line 10 will not work, because it refers to
// retirement which is a function expression. Function
// expressions are not affected by hoisting, whereas 
// function declarations, (such as function calculateAge)
// are.

// variables
//console.log(age);
//var age = 23;
//console.log(age);

// Line 23 returns 'undefined' because hoisting does
// not affect variable initializations, whereas it does
// affect variable declarations. (such as line 24 & 25)

//function foo() {
//    console.log(age);
//    var age = 65;
//    console.log(age);
//}
//foo();
//console.log(age);

// The reason foo.age returns 65 instead of 23, is that
// foo creates its own execution context which
// initializes its own 'age' variable within its scope
// chain.
// Line 32 is undefined due to hoisting not affecting
// variable initilizations


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}

// Scope will check the current scope first, and then go
// up the scope chain until it reaches the global scope.
// Behind the scenes: execution context creates variable 
// object (VO) for each execution stack.


// Example to show the differece between execution stack and scope chain


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        third()
//    }
//}
//
//function third() {
//    var d = 'John';
//    console.log(a + b + c + d);
//}

// Scope: Order in which functions are written lexically
// Execution Context: Order in which functions are 
// called.


///////////////////////////////////////
// Lecture: The this keyword

// Every 'this' keyword is assigned during an execution
// context.
//
// The 'this' keyword is also created during a regular 
// function call and will refer to the window object.
//
// During a method call, the 'this' keyword will refer
// to the object that is calling the method.
// The value of 'this', is not re-assigned unless a
// method is called, otherwise it will be 'window'


//console.log(this);

calculateAge(1990);

function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
        
//        function innerFunction() {
//            console.log(this);
//        }
//        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();












