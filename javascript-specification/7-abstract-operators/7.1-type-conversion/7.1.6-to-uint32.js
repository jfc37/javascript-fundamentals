import {ToNumber} from './7.1.3-to-number';

// 7.1.6 ToUint32 ( argument )
// The abstract operation ToUint32 converts argument to one of 232 integer values in the range 0 through 232-1, inclusive. This abstract operation functions as follows:

// NOTE
// Given the above definition of ToUint32:

// Step 5 is the only difference between ToUint32 and ToInt32.
// The ToUint32 abstract operation is idempotent: if applied to a result that it produced, the second application leaves that value unchanged.
// ToUint32(ToInt32(x)) is equal to ToUint32(x) for all values of x. (It is to preserve this latter property that +∞ and -∞ are mapped to +0.)
// ToUint32 maps -0 to +0.

export function ToUint32(argument) {
  // Let number be ? ToNumber(argument).
  var number = ToNumber(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if ([NaN, +0, -0, +Infinity, -Infinity].includes(number)) {
    return +0;
  }


  // Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
  var int = Math.floor(Math.abs(number)) * Math.sign(number);

  // Let int32bit be int modulo 2^32.
  var int32bit = int % 2**32;

  // Return int32bit.
  return int32bit;
}

ToUint32(NaN); /*?*/
ToUint32(+0); /*?*/
ToUint32(-0); /*?*/
ToUint32(+Infinity); /*?*/
ToUint32(-Infinity); /*?*/

ToUint32(2**31); /*?*/
ToUint32(2**32); /*?*/
ToUint32(2**33); /*?*/
