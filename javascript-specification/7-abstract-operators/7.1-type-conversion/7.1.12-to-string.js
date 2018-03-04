import { ToPrimitive } from "./7.1.1-to-primitive";

// 7.1.12ToString ( argument )
// The abstract operation ToString converts argument to a value of type String according to Table 11:

export function ToString(argument) {
  // Undefined	Return "undefined".
  if (argument === undefined) {
    return 'undefined';
  }

  // Null	Return "null".
  if (argument === null) {
    return 'null';
  }

  //   Boolean
  if (typeof argument === 'boolean') {
    // If argument is true, return "true".
    if (argument) {
      return 'true';
    } else {
      // If argument is false, return "false".
      return 'false'
    }
  }

  // Number	See 7.1.12.1.
  if (typeof argument === 'number') {
    // If m is NaN, return the String "NaN".
    if (argument !== argument) {
      return 'NaN';
    }

    // If m is + 0 or - 0, return the String "0".
    if (argument === 0) {
      return '0';
    }

    // If m is less than zero, return the String concatenation of the String "-" and! ToString(-m).
    if (argument < 0) {
      return '-' + ToString(-argument);
    }

    // If m is +∞, return the String "Infinity".
    if (argument === Infinity) {
      return 'Infinity';
    }

    //   Otherwise, let n, k, and s be integers such that k ≥ 1, 10k - 1 ≤ s < 10k, the Number value for s × 10n - k is m, and k is as small as possible.Note that k is the number of digits in the decimal representation of s, that s is not divisible by 10, and that the least significant digit of s is not necessarily uniquely determined by these criteria.
    // If k ≤ n ≤ 21, return the String consisting of the code units of the k digits of the decimal representation of s(in order, with no leading zeroes), followed by n - k occurrences of the code unit 0x0030(DIGIT ZERO).
    //   If 0 < n ≤ 21, return the String consisting of the code units of the most significant n digits of the decimal representation of s, followed by the code unit 0x002E(FULL STOP), followed by the code units of the remaining k - n digits of the decimal representation of s.
    //     If - 6 < n ≤ 0, return the String consisting of the code unit 0x0030(DIGIT ZERO), followed by the code unit 0x002E(FULL STOP), followed by - n occurrences of the code unit 0x0030(DIGIT ZERO), followed by the code units of the k digits of the decimal representation of s.
    //       Otherwise, if k = 1, return the String consisting of the code unit of the single digit of s, followed by code unit 0x0065(LATIN SMALL LETTER E), followed by the code unit 0x002B(PLUS SIGN) or the code unit 0x002D(HYPHEN - MINUS) according to whether n - 1 is positive or negative, followed by the code units of the decimal representation of the integer abs(n - 1)(with no leading zeroes).
    // Return the String consisting of the code units of the most significant digit of the decimal representation of s, followed by code unit 0x002E(FULL STOP), followed by the code units of the remaining k - 1 digits of the decimal representation of s, followed by code unit 0x0065(LATIN SMALL LETTER E), followed by code unit 0x002B(PLUS SIGN) or the code unit 0x002D(HYPHEN - MINUS) according to whether n - 1 is positive or negative, followed by the code units of the decimal representation of the integer abs(n - 1)(with no leading zeroes).
    return argument.toString();
  }

  // String	Return argument.
  if (typeof argument === 'string') {
    return argument;
  }

  // Symbol	Throw a TypeError exception.
  if (typeof argument === 'symbol') {
    throw TypeError('CANNOT CALL TO STRING ON SYMBOL');
  }

  //   Object
  if (typeof argument === 'object') {
    // Apply the following steps:
    // Let primValue be ? ToPrimitive(argument, hint String).
    var primValue = ToPrimitive(argument, 'string');

    //   Return ? ToString(primValue).
    return ToString(primValue);
  }
}

ToString(undefined) /*?*/
ToString(null) /*?*/

ToString(true) /*?*/
ToString(false) /*?*/

ToString(NaN); /*?*/
ToString(+0); /*?*/
ToString(-0); /*?*/
ToString(-1); /*?*/
ToString(Infinity); /*?*/
ToString(2.3); /*?*/

ToString('abc') /*?*/

try {
  ToString(Symbol('name'));
} catch (e) {
  e /*?*/
}

ToString({}) /*?*/
ToString({toString: function() {return 'myObject'}}) /*?*/
