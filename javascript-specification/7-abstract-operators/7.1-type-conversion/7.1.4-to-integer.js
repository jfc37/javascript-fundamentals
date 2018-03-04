import { ToNumber } from "./7.1.3-to-number";

// 7.1.4 ToInteger ( argument )
// The abstract operation ToInteger converts argument to an integral numeric value. This abstract operation functions as follows:

export function ToInteger(argument) {
  // Let number be ? ToNumber(argument).
  var number = ToNumber(argument);

  // If number is NaN, return +0.
  if (number !== number) {
    return +0;
  }

  // If number is +0, -0, +∞, or -∞, return number.
  if ([+0, -0, Infinity, -Infinity].includes(number)) {
    return number;
  }

  // Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
  return Math.floor(Math.abs(number)) * Math.sign(number);
}

ToInteger(NaN) /*?*/

ToInteger(+0) /*?*/
ToInteger(-0) /*?*/
ToInteger(Infinity) /*?*/
ToInteger(-Infinity) /*?*/

ToInteger(1.32); /*?*/
ToInteger(-1.32); /*?*/
