import {ToPrimitive} from './7.1.1-to-primitive';
import {ToString} from './7.1.12-to-string';

// 7.1.14 ToPropertyKey ( argument )
// The abstract operation ToPropertyKey converts argument to a value that can be used as a property key by performing the following steps:

export function ToPropertyKey ( argument ) {
  // Let key be ? ToPrimitive(argument, hint String).
  var key = ToPrimitive(argument, 'string');

  // If Type(key) is Symbol, then
  if (typeof key === 'symbol') {
    // Return key.
    return key;
  }

  // Return ! ToString(key).
  return ToString(key);
}

ToPropertyKey(Symbol('abc')) /*?*/
ToPropertyKey('abc') /*?*/
ToPropertyKey(123) /*?*/
