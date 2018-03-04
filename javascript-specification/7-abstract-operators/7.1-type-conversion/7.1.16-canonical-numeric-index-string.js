import {ToNumber} from './7.1.3-to-number';
import {SameValue} from '../7.2-testing-comparison-operators/7.2.9-same-value';
import {ToString} from './7.1.12-to-string';

// 7.1.16 CanonicalNumericIndexString ( argument )
// The abstract operation CanonicalNumericIndexString returns argument converted to a numeric value if it is a String representation of a Number that would be produced by ToString, or the string "-0". Otherwise, it returns undefined. This abstract operation functions as follows:

// A canonical numeric string is any String value for which the CanonicalNumericIndexString abstract operation does not return undefined.

export function CanonicalNumericIndexString(argument) {
  // Assert: Type(argument) is String.
  if (typeof argument !== 'string') {
    throw TypeError('ARGUMENT MUST BE STRING');
  }

  // If argument is "-0", return -0.
  if (argument === '-0') {
    return -0;
  }

  // Let n be ! ToNumber(argument).
  let n = ToNumber(argument);

  // If SameValue(! ToString(n), argument) is false, return undefined.
  if (!SameValue(ToString(n), argument)) {
    return undefined;
  }

  // Return n.
  return n;
}

try {
  CanonicalNumericIndexString(123) /*?*/
} catch (e) {
  e /*?*/
}

CanonicalNumericIndexString('-0') /*?*/
CanonicalNumericIndexString('1a') /*?*/
CanonicalNumericIndexString('1') /*?*/
