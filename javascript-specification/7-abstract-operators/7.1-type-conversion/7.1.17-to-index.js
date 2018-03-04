import { ToInteger } from './7.1.4-to-integer';
import { ToLength} from './7.1.15-to-length';
import {SameValueZero} from '../7.2-testing-comparison-operators/7.2.10-same-value-zero';

// 7.1.17 ToIndex ( value )
// The abstract operation ToIndex returns value argument converted to a numeric value if it is a valid integer index value. This abstract operation functions as follows:

export function ToIndex(value) {
  // If value is undefined, then
  if (value === undefined) {
    // Let index be 0.
    var index = 0;
  } else {
    // Else,
    // Let integerIndex be ? ToInteger(value).
    var integerIndex = ToInteger(value);

    // If integerIndex < 0, throw a RangeError exception.
    if (integerIndex < 0) {
      throw RangeError('INDEX OUT OF RANGE');
    }

    // Let index be ! ToLength(integerIndex).
    var index = ToLength(integerIndex);

    // If SameValueZero(integerIndex, index) is false, throw a RangeError exception.
    if (!SameValueZero(integerIndex, index)) {
      throw RangeError('INDEX OUT OF RANGE');
    }


  }

  // Return index.
  return index;
}

ToIndex(undefined) /*?*/

try {
  ToIndex('-1')
}
catch (e) {
  e
}

ToIndex('1'); /*?*/
ToIndex('a'); /*?*/
