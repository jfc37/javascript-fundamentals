// 7.2.6 IsInteger ( argument )
// The abstract operation IsInteger determines if argument is a finite integer numeric value.

export function IsInteger(argument) {
  // If Type(argument) is not Number, return false.
  if (typeof argument !== 'number') {
    return false;
  }

  // If argument is NaN, +∞, or -∞, return false.
  if ([NaN, Infinity, -Infinity].includes(argument)) {
    return false;
  }

  // If floor(abs(argument)) ≠ abs(argument), return false.
  if (Math.floor(Math.abs(argument)) !== Math.abs(argument)) {
    return false;
  }

  // Return true.
  return true;
}

IsInteger('123'); /*?*/

IsInteger(NaN); /*?*/
IsInteger(Infinity); /*?*/
IsInteger(-Infinity); /*?*/

IsInteger(1.1); /*?*/

IsInteger(1.0); /*?*/
IsInteger(1); /*?*/
