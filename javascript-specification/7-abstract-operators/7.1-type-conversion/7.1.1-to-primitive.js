import { GetMethod } from '../7.3-operations-on-objects/7.3.9-get-method';
import { Call } from '../7.3-operations-on-objects/7.3.12-call';
import {OrdinaryToPrimitive} from './7.1.1.1-ordinary-to-primitive';

// 7.1.1 ToPrimitive ( input [ , PreferredType ] )
// The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType. The abstract operation ToPrimitive converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint PreferredType to favour that type. Conversion occurs according to the following algorithm:

export function ToPrimitive(input, PreferredType) {
  // Assert: input is an ECMAScript language value.
  const knownTypes = ['string', 'number', 'boolean', 'object', 'function', 'undefined', 'symbol'];
  if (!knownTypes.includes(typeof input)) {
    throw 'INVAILD INPUT TYPE';
  }

  // If Type(input) is Object, then
  if (typeof input === 'object') {
    // If PreferredType was not passed, let hint be "default".
    if (!PreferredType) {
      var hint = 'default';
    } else if (PreferredType === 'string') {
      // Else if PreferredType is hint String, let hint be "string".
      var hint = 'string';
    } else if (PreferredType === 'number') {
      // Else PreferredType is hint Number, let hint be "number".
      var hint = 'number';
    }
    // Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
    let exoticToPrim = GetMethod(input, '@@toPrimitive');

    // If exoticToPrim is not undefined, then
    if (exoticToPrim !== undefined) {
      // Let result be ? Call(exoticToPrim, input, « hint »).
      let result = Call(exoticToPrim, input, hint);

      // If Type(result) is not Object, return result.
      if (typeof result !== 'object') {
        return result;
      }

      // Throw a TypeError exception.
      throw TypeError();

    }
    PreferredType/*?*/
    // If hint is "default", set hint to "number".
    if (hint === 'default') {
      hint = 'number';
    }
    // Return ? OrdinaryToPrimitive(input, hint).
    return OrdinaryToPrimitive(input, hint);
  }
  // Return input.
  return input;
}

ToPrimitive({
  ['@@toPrimitive']: function () { return 1 }
}); /*?*/

try {
  ToPrimitive({
    ['@@toPrimitive']: function () { return { a: 1 } }
  }); /*?*/
} catch (e) {
  e /*?*/
}

ToPrimitive({}, 'number'); /*?*/
