import { IsPropertyKey } from "../7.2-testing-comparison-operators/7.2.7-is-property-key";
import { ToObject } from '../7.1-type-conversion/7.1.13-to-object';

// 7.3.2 GetV ( V, P )

// The abstract operation GetV is used to retrieve the value of a specific property of an ECMAScript language value. If the value is not an object, the property lookup is performed using a wrapper object appropriate for the type of the value. The operation is called with arguments V and P where V is the value and P is the property key. This abstract operation performs the following steps:

export function GetV(value, propertyKey) {
  // Assert: IsPropertyKey(P) is true.
  if (!IsPropertyKey(propertyKey)) {
    throw 'INVALID PROPERTY KEY';
  }

  // Let O be ? ToObject(V).
  let obj = ToObject(value);

  // Return ? O.[[Get]](P, V).
  return obj[propertyKey];
}

try {
  GetV({}, 123);
} catch(e) {
  e /*?*/
}

GetV({a: 'abc'}, 'a'); /*?*/
GetV({a: 'abc'}, 'b'); /*?*/
