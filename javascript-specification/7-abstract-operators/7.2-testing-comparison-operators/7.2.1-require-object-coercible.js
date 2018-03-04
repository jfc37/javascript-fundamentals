// 7.2.1 RequireObjectCoercible ( argument )
// The abstract operation RequireObjectCoercible throws an error if argument is a value that cannot be converted to an Object using ToObject. It is defined by Table 13:

export function RequireObjectCoercible ( argument ) {
  // Undefined	Throw a TypeError exception.
  // Null	Throw a TypeError exception.
  if (argument == undefined) {
    throw TypeError('INVALID ARGUMENT TYPE');
  }

  // Boolean	Return argument.
  // Number	Return argument.
  // String	Return argument.
  // Symbol	Return argument.
  // Object	Return argument.
  return argument;
}

try {
  RequireObjectCoercible(undefined);
} catch (e) {
  e
}

try {
  RequireObjectCoercible(null);
} catch (e) {
  e
}

RequireObjectCoercible(true) /*?*/
RequireObjectCoercible(123) /*?*/
RequireObjectCoercible('abc') /*?*/
RequireObjectCoercible(Symbol('abc')) /*?*/
RequireObjectCoercible({}) /*?*/
