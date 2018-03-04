
 // 7.2.7 IsPropertyKey ( argument )
// The abstract operation IsPropertyKey determines if argument, which must be an ECMAScript language value, is a value that may be used as a property key.

export function IsPropertyKey(argument) {
  // If Type(argument) is String, return true.
  if (typeof argument === 'string') {
    return true;
  }

  // If Type(argument) is Symbol, return true.
  if (typeof argument === 'symbol') {
    return true;
  }

  // Return false.
  return false;
}


console.log(IsPropertyKey('aaa'));
console.log(IsPropertyKey(Symbol('name')));
console.log(IsPropertyKey(123));
