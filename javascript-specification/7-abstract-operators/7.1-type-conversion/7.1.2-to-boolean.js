// 7.1.2 ToBoolean ( argument )
// The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:

export function ToBoolean(argument) {
  // Undefined	Return false.
  if (argument === undefined) {
    return false;
  }

  // Null	Return false.
  if (argument === null) {
    return false;
  }

  // Boolean	Return argument.
  if (typeof argument === 'boolean') {
    return argument;
  }

  // Number	If argument is +0, -0, or NaN, return false; otherwise return true.
  if (typeof argument === 'number') {
    if (argument === 0 || argument !== argument) {
      return false;
    }
    return true;
  }

  // String	If argument is the empty String (its length is zero), return false; otherwise return true.
  if (typeof argument === 'string') {
    if (argument.length === 0) {
      return false;
    }
    return true;
  }

  // Symbol	Return true.
  if (typeof argument === 'symbol') {
    return true;
  }

  // Object	Return true.
  if (typeof argument === 'object') {
    return true;
  }
}

ToBoolean(undefined); /*?*/
ToBoolean(null); /*?*/

ToBoolean(true); /*?*/
ToBoolean(false); /*?*/

ToBoolean(+0); /*?*/
ToBoolean(-0); /*?*/
ToBoolean(NaN); /*?*/
ToBoolean(1); /*?*/

ToBoolean(''); /*?*/
ToBoolean(' '); /*?*/

ToBoolean(Symbol('abc')); /*?*/

ToBoolean({}); /*?*/
