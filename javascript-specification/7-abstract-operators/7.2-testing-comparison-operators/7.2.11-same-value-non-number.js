// 7.2.11 SameValueNonNumber ( x, y )
// The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, produces true or false. Such a comparison is performed as follows:

export function SameValueNonNumber(x, y) {
  // Assert: Type(x) is not Number.
  if (typeof x === 'number') {
    throw 'INPUT MUST NOT BE NUMBER';
  }

  // Assert: Type(x) is the same as Type(y).
  if (typeof x !== typeof y) {
    throw 'INPUTS MUST BE SAME TYPE';
  }

  // If Type(x) is Undefined, return true.
  // If Type(x) is Null, return true.
  if (x == undefined) {
    return true;
  }

  // If Type(x) is String, then
  if (typeof x === 'string') {
    // If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
    if (x.length === y.length) {
      for (var index = 0; index < x.length; index++) {
        if (x[index] !== y[index]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  // If Type(x) is Boolean, then
  if (typeof x === 'boolean') {
    // If x and y are both true or both false, return true; otherwise, return false.
    if (x === y) {
      return true;
    }
    return false;
  }

  // If Type(x) is Symbol, then
  if (typeof x === 'symbol') {
    // If x and y are both the same Symbol value, return true; otherwise, return false.
    if (x === y) {
      return true;
    }
    return false;
  }

  // If x and y are the same Object value, return true. Otherwise, return false.
  if (x === y) {
    return true;
  }
  return false;
}

try {
  SameValueNonNumber(123);
} catch (e) {
  e /*?*/
}

try {
  SameValueNonNumber('true', true);
} catch (e) {
  e /*?*/
}

SameValueNonNumber(undefined, undefined); /*?*/
SameValueNonNumber(null, null); /*?*/

SameValueNonNumber('abc', 'abc'); /*?*/
SameValueNonNumber('abc', 'ab'); /*?*/
SameValueNonNumber('abc', 'abd'); /*?*/

SameValueNonNumber(true, true); /*?*/
SameValueNonNumber(false, false); /*?*/
SameValueNonNumber(false, true); /*?*/
SameValueNonNumber(true, false); /*?*/

var symbol = Symbol('abc');
SameValueNonNumber(symbol, symbol); /*?*/
SameValueNonNumber(Symbol('abc'), Symbol('bcd')); /*?*/

var obj = {};
SameValueNonNumber(obj, obj); /*?*/
SameValueNonNumber({}, {}); /*?*/
