import {IsPropertyKey} from '../7.2-testing-comparison-operators/7.2.7-is-property-key';

// 7.3.1 Get ( O, P )
// The abstract operation Get is used to retrieve the value of a specific property of an object. The operation is called with arguments O and P where O is the object and P is the property key. This abstract operation performs the following steps:

export function Get(obj, propertyKey) {
  // Assert: Type(O) is Object.
  if (typeof obj !== 'object') {
    throw 'CALLED WITH NON OBJECT';
  }

  // Assert: IsPropertyKey(P) is true.
  if (!IsPropertyKey(propertyKey)) {
    throw 'INVAILD PROPERTY KEY';
  }
  // Return ? O.[[Get]](P, O).
  return obj[propertyKey];

}

try {
  Get(123, 'a');
} catch(e) {
  e /*?*/
}

try {
  Get({}, 123);
} catch(e) {
  e /*?*/
}

Get({a: 'abc'}, 'a') /*?*/
