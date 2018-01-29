/**
 * coersion using + operator
 * + is an overloaded operator
 * if any of the operands is a string, returns a string, otherwise will return a number
 */
var a = 1;
var b = a + ''; // b = '1'
console.log(b);

// equivalent
var c = String(a); // '1'
var d = a.toString(); // '1'
console.log(b === c === d);

/**
 * coersion using - operator
 * - is a maths operator which expects numbers
 * will try to coerce operands to numbers
 */
var a = '3';
var b = a - 0; // b = 3
console.log(b);

/**
 * coersion using !!
 * 1. operand gets coerced into boolean
 * 2. first ! inverts boolean
 * 3. second ! inverts result back
 */
var a = 0;
var b = !!a; // false
console.log(b);

// equivalent
var c = Boolean(a); // false
console.log(c);
