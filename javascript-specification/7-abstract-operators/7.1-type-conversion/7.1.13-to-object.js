// 7.1.13 ToObject ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:

export function ToObject(argument) {
  // Undefined	Throw a TypeError exception.
  // Null	Throw a TypeError exception.
  if (argument == null) {
    throw 'INVALID ARGUMENT TYPE';
  }

  // Boolean	Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects.
  if (typeof argument === 'boolean') {
    return new Boolean(argument);
  }

  // Number	Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.
  if (typeof argument === 'number') {
    return new Number(argument);
  }

  // String	Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.
  if (typeof argument === 'string') {
    return new String(argument);
  }

  // Symbol	Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.
  if (typeof argument === 'symbol') {
    return Symbol(argument.toString());
  }

  // Object	Return argument.
  return argument;
}

try {
  ToObject(undefined);
} catch (e) {
  e /*?*/
}

try {
  ToObject(null);
} catch (e) {
  e /*?*/
}

ToObject(false); /*?*/
ToObject(123); /*?*/
ToObject('123'); /*?*/
ToObject(Symbol('name')); /*?*/
ToObject({a: '123'}); /*?*/
