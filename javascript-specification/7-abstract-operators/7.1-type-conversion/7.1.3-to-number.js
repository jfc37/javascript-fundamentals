import {ToPrimitive} from './7.1.1-to-primitive';

// 7.1.3 ToNumber ( argument )
// The abstract operation ToNumber converts argument to a value of type Number according to Table 10:

export function ToNumber(argument) {
  // Undefined	Return NaN.
  if (argument === undefined) {
    return NaN;
  }

  // Null	Return + 0.
  if (argument === null) {
    return +0;
  }
  // Boolean	If argument is true, return 1. If argument is false, return +0.
  if (typeof argument === 'boolean') {
    if (argument) {
      return 1;
    } else {
      return +0;
    }
  }
  // Number	Return argument(no conversion).
  if (typeof argument === 'number') {
    return argument;
  }

  // String	See grammar and conversion algorithm below.
  if (typeof argument === 'string') {
    return Number(argument);
  }

  // Symbol	Throw a TypeError exception.
  if (typeof argument === 'symbol') {
    throw TypeError('CAN NOT CALL TONUMBER ON A SYMBOL');
  }

  //   Object
  if (typeof argument === 'object') {
    // Apply the following steps:
    // Let primValue be ? ToPrimitive(argument, hint Number).
    var primValue = ToPrimitive(argument, 'number');

    //   Return ? ToNumber(primValue).
    return ToNumber(primValue);
  }
}

ToNumber(undefined); /*?*/

ToNumber(null); /*?*/

ToNumber(true); /*?*/
ToNumber(false); /*?*/

ToNumber(123); /*?*/
ToNumber(NaN); /*?*/

ToNumber('   +0003.2  '); /*?*/
ToNumber('   Infinity  '); /*?*/

try {
  ToNumber(Symbol('abc'));
} catch(e) {
  e /*?*/
}

ToNumber({}) /*?*/
ToNumber({a: 321, valueOf: function() {return this.a}}) /*?*/
