import {SameValueNonNumber} from './7.2.11-same-value-non-number';

// 7.2.10 SameValueZero ( x, y )
// The internal comparison abstract operation SameValueZero(x, y), where x and y are ECMAScript language values, produces true or false. Such a comparison is performed as follows:

// NOTE
// SameValueZero differs from SameValue only in its treatment of +0 and -0.

export function SameValueZero(x, y) {
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

    // If x is +0 and y is -0, return true.
    // If x is -0 and y is +0, return true.
    if (x === 0 && y === 0) {
      return true;
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

SameValueZero(1, '1') /*?*/

SameValueZero(NaN, NaN) /*?*/
SameValueZero(-0, +0) /*?*/
SameValueZero(+0, -0) /*?*/
SameValueZero(1, 1) /*?*/
SameValueZero(1, 2) /*?*/

SameValueZero('1', '2') /*?*/
SameValueZero('1', '1') /*?*/
