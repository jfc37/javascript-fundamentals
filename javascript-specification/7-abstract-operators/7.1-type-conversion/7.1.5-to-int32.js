import { ToNumber } from "./7.1.3-to-number";

// 7.1.5 ToInt32 ( argument )
// The abstract operation ToInt32 converts argument to one of 232 integer values in the range -231 through 231-1, inclusive. This abstract operation functions as follows:


// NOTE
// Given the above definition of ToInt32:

// The ToInt32 abstract operation is idempotent: if applied to a result that it produced, the second application leaves that value unchanged.
// ToInt32(ToUint32(x)) is equal to ToInt32(x) for all values of x. (It is to preserve this latter property that +∞ and -∞ are mapped to +0.)
// ToInt32 maps -0 to +0.

export function ToInt32(argument) {
  // Let number be ? ToNumber(argument).
  var number = ToNumber(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if ([NaN, +0, -0, +Infinity, -Infinity].includes(number)) {
    return +0;
  }

  // Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
  var int = Math.floor(Math.abs(number)) * Math.sign(number);

  // Let int32bit be int modulo 232.
  var int32bit = int % 2**32;

  // If int32bit ≥ 2^31, return int32bit - 2^32; otherwise return int32bit.
  if (int32bit >= 2**31) {
    return int32bit - 2**32;
  } else {
    return int32bit;
  }
}

ToInt32(NaN); /*?*/
ToInt32(+0); /*?*/
ToInt32(-0); /*?*/
ToInt32(+Infinity); /*?*/
ToInt32(-Infinity); /*?*/

ToInt32(2**32); /*?*/
ToInt32(2**31); /*?*/
