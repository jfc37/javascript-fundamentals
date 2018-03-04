// 7.2.2 IsArray ( argument )
// The abstract operation IsArray takes one argument argument, and performs the following steps:

export function IsArray(argument) {
  // If Type(argument) is not Object, return false.
  if (typeof argument !== 'object') {
    return false;
  }

  // If argument is an Array exotic object, return true.
  if (argument.__proto__.constructor === Array) {
    return true;
  }

  // If argument is a Proxy exotic object, then
  //  If argument.[[ProxyHandler]] is null, throw a TypeError exception.
  //  Let target be argument.[[ProxyTarget]].
  //  Return ? IsArray(target).

  // Return false.
  return false;
}

IsArray('abc'); /*?*/
IsArray([]); /*?*/
