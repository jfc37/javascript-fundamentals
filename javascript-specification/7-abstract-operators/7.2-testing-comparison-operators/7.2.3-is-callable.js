// 7.2.3 IsCallable ( argument )
// The abstract operation IsCallable determines if argument, which must be an ECMAScript language value, is a callable function with a [[Call]] internal method.

export function IsCallable(argument) {
  // If Type(argument) is not Object, return false.
  if (!['object', 'function'].includes(typeof argument) || !argument) {
    return false;
  }

  // If argument has a [[Call]] internal method, return true.
  if (typeof argument === 'function') {
    return true;
  }

  // Return false.
  return false;
}

IsCallable('abc') /*?*/
IsCallable(null) /*?*/
IsCallable(function (b) { return this.a + b }); /*?*/
IsCallable({}); /*?*/
