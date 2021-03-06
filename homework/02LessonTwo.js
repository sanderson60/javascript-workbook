'use strict';

var assert = require('assert');

// ****
// Functions
// ****

// Problem 0:
// alwaysFalse() is a function that always
// returns the boolean value false

function alwaysFalse() {
    return false;
}

// You can also define functions this way,
// by assigning function definitions to variable

var alwaysTrue = function() {
    return true;
};

// Problem 1:
// equals(argument1, argument2) is an empty function
// return a boolean expression that is true when
// argument1 is equal to argument2
var argument1 = 2;
var argument2 = 2;

function equals(argument1, argument2) {
    if (argument1 === argument2) {
        return true;
    } else {
        return false;
    }
}

// Problem 2:
// lessThanOrEqualTo(parameter1, parameter2) is an empty function
// return a boolean expression that is true when
// parameter1 is less than or equal to parameter2
var parameter1 = 5;
var parameter2 = 7;

function lessThanOrEqualTo(parameter1, parameter2) {
    if (parameter1 <= parameter2) {
        return true;
    } else {
        return false;
    }
}

// Problem 3:
// write a function named add(number1, number2)
// add will add two numbers and return the result
var number1 = 5;
var number2 = 7;

function add(number1, number2) {

    return number1 + number2;
}

// Problem 4:
// write a function named addThree(number1, number2, number3)
// this function will add three numbers
// you must call your function add() in addThree()
var number1 = 5;
var number2 = 7;
var number3 = 12;

function addThree(number1, number2, number3) {

    return add(number3, add(number1, number2));
}


// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a function? How do you define a function in Javascript?
//
// Your Answer Goes Here: In Javascript a function is a block of code that is designed to perform a particular task and is executed when something calls it.
//
// What is a return value?
//
//
//
// Your Answer Goes Here: A return value when a return statement stops the execution of a function and returns the value from that function. //
//
// How do you define a named function?
//
// Your Answer Goes Here: Named functions can be either declared in a statement or used in an expression. Named function expressions create readable stack traces. The name of the function is bound inside its body, and that can be useful. And we can use the name to have a function invoke itself, or to access its properties like any other object.
//
//
// What is a parameter? What is an argument? Is there a difference between the two?
//
// Your Answer Goes Here: A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. There is a difference since one is the variable and the other is the actual data, but I also read that in some arenas they are used interchangeably in a team environment.
//
// ****


// ****
// Modulo % Operator
// ****

// Problem 5:
// isEven(number) is a function that
// returns true if number is even (divisible by 2),
// else returns false
// complete isEven() by returning a boolean expression

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Problem 6:
// isDivisibleByThree(number) is a function that
// returns true if number is divisible by 3,
// else returns false
// complete isDivisibleByThree() by returning a boolean expression

function isDivisibleByThree(number) {
  if (number % 3 === 0) {
      return true;
  } else {
      return false;
  }
}

// ****
// Conditionals
// ****


// Problem 7:
// whichSpecies(character) is a function that
// should return "dog" when character is 'scooby'
// should return "cat" when character is 'garfield'
// should return "fish" when character is 'nemo'
// should return false if character is anything else

function whichSpecies(character) {
  if (character === 'scooby') {
    return ('dog');
  }
  else if (character === 'garfield') {
    return ('cat');
  }
  else if (character === 'nemo') {
    return ('fish');
  }
  else {
    return false;
  }
}

// Problem 8:
// write a function named testNumber(number) with the following requirements.
// The function should:
// return the string "divisible by 4" when number % 4 === 0
// return the string "divisible by 2" when number % 2 === 0
// return the string "divisible by 3" when number % 3 === 0
// return the string "divisible by 5" when number % 5 === 0

var number = 9;

function testNumber(number) {
  if (number % 4 === 0) {
    return ('divisible by 4');
  }
  else if (number % 2 === 0) {
    return ('divisible by 2');
  }
else if (number % 3 === 0) {
  return ('divisible by 3');
}
else if (number % 5 === 0) {
  return ('divisible by 5');
}
else {
  return false;
}
}
// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// In your own words, explain what conditionals do.
//
// Your Answer Goes Here: A conditional statement allows for your code to do different actions based on different decisions.
//
//
// ****

// ****
// Tests
// ****

describe('Lesson 2 Homework', function() {

    describe('Functions', function() {
        describe('Problem 0: alwaysFalse()', function() {
            it('should return false', function() {
                assert.equal(alwaysFalse(), false);
            });
        });

        describe('Problem 0: alwaysTrue()', function() {
            it('should return true', function() {
                assert.equal(alwaysTrue(), true);
            });
        });

        describe('Problem 1: equals()', function() {
            it('should return true when argument 1 equals argument 2, else return false', function() {
                assert.equal(equals(3, 3), true);
                assert.equal(equals(3, null), false);
                assert.equal(equals('bob', ''), false);
                assert.equal(equals('bob', 'bob'), true);
            });
        });

        describe('Problem 2: lessThanOrEqualTo()', function() {
            it('should return true when parameter 1 is less than or equal to parameter 2, else return false', function() {
                assert.equal(lessThanOrEqualTo(3, 3), true);
                assert.equal(lessThanOrEqualTo(3, 4), true);
                assert.equal(lessThanOrEqualTo(4, 1), false);
            });
        });

        describe('Problem 3: add(number1, number2)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof add === 'undefined'));
                assert(typeof add === 'function');
            });

            it('should add two numbers and return the result', function() {
                assert.equal(add(3, 3), 6);
                assert.equal(add(3, 7), 10);
            });
        });

        describe('Problem 4: addThree(number1, number2, number3)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof addThree === 'undefined'));
                assert(typeof addThree === 'function');
            });

            it('should add three numbers and return the result', function() {
                assert.equal(addThree(3, 3, 3), 9);
            });
        });
    });

    describe('Modulo % operator', function() {
        describe('Problem 5: isEven(number)', function() {
            it('should return true if number is even, else false', function() {
                assert.equal(isEven(4), true);
                assert.equal(isEven(3), false);
            });
        });

        describe('Problem 6: isDivisibleByThree(number)', function() {
            it('should return true if number is divisible by 3, else false', function() {
                assert.equal(isDivisibleByThree(3), true);
                assert.equal(isDivisibleByThree(4), false);
            });
        });
    });

    describe('Conditionals', function() {
        describe('Problem 7: whichSpecies(character)', function() {
            it('should return "dog" when character is scooby', function() {
                assert.equal(whichSpecies('scooby'), 'dog');
            });
            it('should return "cat" when character is garfield', function() {
                assert.equal(whichSpecies('garfield'), 'cat');
            });
            it('should return "fish" when character is nemo', function() {
                assert.equal(whichSpecies('nemo'), 'fish');
            });
            it('should return false if character is anything else', function() {
                assert.equal(whichSpecies('stitch'), false);
            });
        });

        describe('Problem 8: testNumber(number)', function() {
            it('should be defined and of type function', function() {
                assert(!(typeof testNumber === 'undefined'));
                assert(typeof testNumber === 'function');
            });

            it('should return "divisible by 4" when number is divisible by 4', function() {
                assert.equal(testNumber(4), 'divisible by 4');
            });
            it('should return "divisible by 2" when number is divisible by 2', function() {
                assert.equal(testNumber(2), 'divisible by 2');
            });
            it('should return "divisible by 3" when number is divisible by 3', function() {
                assert.equal(testNumber(3), 'divisible by 3');
            });
            it('should return "divisible by 5" when number is divisible by 5', function() {
                assert.equal(testNumber(5), 'divisible by 5');
            });
        });
    });

});
