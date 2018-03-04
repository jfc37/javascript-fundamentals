import {ToInteger} from './7.1.4-to-integer';

// 7.1.15 ToLength ( argument )
// The abstract operation ToLength converts argument to an integer suitable for use as the length of an array-like object. It performs the following steps:

export function ToLength ( argument ) {
  // Let len be ? ToInteger(argument).
  var len = ToInteger(argument);

  // If len ≤ +0, return +0.
  if (len <= 0) {
    return +0;
  }

  // Return min(len, 253-1).
  return Math.min(len, 2**53 - 1);
}

ToLength('abc') /*?*/
ToLength('123') /*?*/
