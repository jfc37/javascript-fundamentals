import {SameValueNonNumber} from './7.2.11-same-value-non-number';

// 7.2.9 SameValue ( x, y )
// The internal comparison abstract operation SameValue(x, y), where x and y are ECMAScript language values, produces true or false. Such a comparison is performed as follows:

// NOTE
// This algorithm differs from the Strict Equality Comparison Algorithm in its treatment of signed zeroes and NaNs.

export function SameValue(x, y) {
  // If Type(x) is different from Type(y), return false.
  if (typeof x !== typeof y) {
    return false;
  }

  // If Type(x) is Number, then
  if (typeof x === 'number') {
    // If x is NaN and y is NaN, return true.
    if (x !== x && y !== y) {
      return true;
    }

    // If x is +0 and y is -0, return false.
    if ((1 / x) === Infinity && (1 / y) === -Infinity) {
      return false;
    }

    // If x is -0 and y is +0, return false.
    if ((1 / x) === -Infinity && (1 / y) === Infinity) {
      return false;
    }

    // If x is the same Number value as y, return true.
    if (x === y) {
      return true;
    }

    // Return false.
    return false;
  }

  // Return SameValueNonNumber(x, y).
  return SameValueNonNumber(x, y);
}

SameValue(1, '1') /*?*/

SameValue(NaN, NaN) /*?*/
SameValue(0, -0) /*?*/
SameValue(-0, 0) /*?*/
SameValue(0, 0) /*?*/
SameValue(0, 1) /*?*/
SameValue('1', '1') /*?*/
