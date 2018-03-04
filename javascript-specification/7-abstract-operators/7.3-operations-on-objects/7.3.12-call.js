import {IsCallable} from '../7.2-testing-comparison-operators/7.2.3-is-callable';

// 7.3.12 Call ( F, V [ , argumentsList ] )
// The abstract operation Call is used to call the [[Call]] internal method of a function object. The operation is called with arguments F, V, and optionally argumentsList where F is the function object, V is an ECMAScript language value that is the this value of the [[Call]], and argumentsList is the value passed to the corresponding argument of the internal method. If argumentsList is not present, a new empty List is used as its value. This abstract operation performs the following steps:

export function Call(func, value, ...argumentList) {
  // If argumentsList was not passed, set argumentsList to a new empty List.
  if (!argumentList.length) {
    argumentList = [];
  }

  // If IsCallable(F) is false, throw a TypeError exception.
  if (!IsCallable(func)) {
    throw TypeError('FUNC NOT CALLABLE')
  }

  // Return ? F.[[Call]](V, argumentsList).
  return func.bind(value, argumentList)();
}

Call(function(){}, {}) /*?*/

try {
  Call({}, {})
} catch (e) {
  e /*?*/
}

Call(function(b){return this.a - b}, {a: 2}, 1) /*?*/
