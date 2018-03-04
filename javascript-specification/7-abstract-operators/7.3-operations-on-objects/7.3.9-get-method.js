import {IsPropertyKey} from '../7.2-testing-comparison-operators/7.2.7-is-property-key'
import {GetV} from './7.3.2-get-v';
import {IsCallable} from '../7.2-testing-comparison-operators/7.2.3-is-callable';

// 7.3.9 GetMethod ( V, P )
// The abstract operation GetMethod is used to get the value of a specific property of an ECMAScript language value when the value of the property is expected to be a function. The operation is called with arguments V and P where V is the ECMAScript language value, P is the property key. This abstract operation performs the following steps:

export function GetMethod(input, propertyName) {
  // Assert: IsPropertyKey(P) is true.
  if (!IsPropertyKey(propertyName)) {
    throw Error('invalid property name');
  }

  // Let func be ? GetV(V, P).
  let func = GetV(input, propertyName);

  // If func is either undefined or null, return undefined.
  if (func == null) {
    return undefined;
  }

  // If IsCallable(func) is false, throw a TypeError exception.
  if (!IsCallable(func)) {
    throw new TypeError('PROPERTY IS NOT CALLABLE');
  }

  // Return func.
  return func;

}

try {
  GetMethod({}, 123);
} catch(e) {
  e /*?*/
}

try {
  GetMethod({a: 'aaa'}, 'a');
} catch(e) {
  e /*?*/
}

GetMethod({a: function blah(){}}, 'a'); /*?*/
