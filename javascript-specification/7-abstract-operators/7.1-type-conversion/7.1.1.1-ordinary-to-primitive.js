import {Get} from '../7.3-operations-on-objects/7.3.1-get';
import { IsCallable } from '../7.2-testing-comparison-operators/7.2.3-is-callable';
import { Call } from '../7.3-operations-on-objects/7.3.12-call';

// 7.1.1.1 OrdinaryToPrimitive ( O, hint )
// When the abstract operation OrdinaryToPrimitive is called with arguments O and hint, the following steps are taken:

export function OrdinaryToPrimitive(obj, hint) {
  // Assert: Type(O) is Object.
  if (typeof obj !== 'object') {
    throw 'Called with non object';
  }

  // Assert: Type(hint) is String and its value is either "string" or "number".
  if (typeof hint !== 'string' || !['string', 'number'].includes(hint)) {
    throw `Hint must be 'string' or 'number'`;
  }

  // If hint is "string", then
  if (hint === 'string') {
    // Let methodNames be « "toString", "valueOf" ».
    var methodNames = ['toString', 'valueOf'];
  } else {
    // Else,
    // Let methodNames be « "valueOf", "toString" ».
    var methodNames = ['valueOf', 'toString'];
  }

  // For each name in methodNames in List order, do
  for (var index = 0; index < methodNames.length; index++) {
    // Let method be ? Get(O, name).
    var method = Get(obj, methodNames[index]);

    // If IsCallable(method) is true, then
    if (IsCallable(method)) {
      // Let result be ? Call(method, O).
      var result = Call(method, obj);

      // If Type(result) is not Object, return result.
      if (typeof result != 'object') {
        return result;
      }
    }
  }
  // Throw a TypeError exception.
  throw TypeError('CAN NOT CONVERT TO PRIMITIVE');
}

try {
  OrdinaryToPrimitive(1)
} catch (e) {
  e /*?*/
}

try {
  OrdinaryToPrimitive({}, 123)
} catch (e) {
  e /*?*/
}

try {
  OrdinaryToPrimitive({}, 'boolean')
} catch (e) {
  e /*?*/
}

OrdinaryToPrimitive({}, 'string') /*?*/
OrdinaryToPrimitive({a: 'abc', toString: function(){return this.a}}, 'string') /*?*/
OrdinaryToPrimitive({a: 1, valueOf: function() {return this.a}}, 'number') /*?*/


try {
  OrdinaryToPrimitive({toString: function(){return {}}}, 'string')
} catch (e) {
  e /*?*/
}
