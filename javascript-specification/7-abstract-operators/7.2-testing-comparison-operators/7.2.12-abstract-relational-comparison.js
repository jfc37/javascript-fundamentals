import { ToPrimitive } from '../7.1-type-conversion/7.1.1-to-primitive';
import { ToNumber } from '../7.1-type-conversion/7.1.3-to-number';

// 7.2.12 Abstract Relational Comparison
// The comparison x < y, where x and y are values, produces true, false, or undefined (which indicates that at least one operand is NaN). In addition to x and y the algorithm takes a Boolean flag named LeftFirst as a parameter. The flag is used to control the order in which operations with potentially visible side-effects are performed upon x and y. It is necessary because ECMAScript specifies left to right evaluation of expressions. The default value of LeftFirst is true and indicates that the x parameter corresponds to an expression that occurs to the left of the y parameter's corresponding expression. If LeftFirst is false, the reverse is the case and operations must be performed upon y before x. Such a comparison is performed as follows:

// NOTE 1
// Step 3 differs from step 7 in the algorithm for the addition operator + (12.8.3) in using “and” instead of “or”.

// NOTE 2
// The comparison of Strings uses a simple lexicographic ordering on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore String values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalized form. Also, note that for strings containing supplementary characters, lexicographic ordering on sequences of UTF-16 code unit values differs from that on sequences of code point values.

export function LessThan(x, y, leftFirst = true) {
  // If the LeftFirst flag is true, then
  if (leftFirst) {
    // Let px be ? ToPrimitive(x, hint Number).
    var px = ToPrimitive(x, 'number');

    // Let py be ? ToPrimitive(y, hint Number).
    var py = ToPrimitive(y, 'number');
  } else {
    // Else the order of evaluation needs to be reversed to preserve left to right evaluation,
    // Let py be ? ToPrimitive(y, hint Number).
    var py = ToPrimitive(y, 'number');

    // Let px be ? ToPrimitive(x, hint Number).
    var px = ToPrimitive(x, 'number');
  }

  // If both px and py are Strings, then
  if (typeof px === 'string' && typeof py === 'string') {
    // If py is a prefix of px, return false. (A String value p is a prefix of String value q if q can be the result of concatenating p and some other String r.Note that any String is a prefix of itself, because r may be the empty String.)
    if (px.indexOf(py) === 0) {
      return false;
    }

    // If px is a prefix of py, return true.
    if (py.indexOf(px) === 0) {
      return true;
    }

    // Let k be the smallest nonnegative integer such that the code unit at index k within px is different from the code unit at index k within py. (There must be such a k, for neither String is a prefix of the other.)
    var k = 0;
    while (px.codePointAt(k) === py.codePointAt(k)) {
      if (px.codePointAt(k) === undefined || py.codePointAt(k) === undefined) {
        break;
      }
      k++;
    }
    // Let m be the integer that is the code unit value at index k within px.
    var m = px.codePointAt(k);

    // Let n be the integer that is the code unit value at index k within py.
    var n = py.codePointAt(k);

    // If m < n, return true.Otherwise, return false.
    if (m < n) {
      return true;
    }

    return false;
  } else {
    // Else,
    // Let nx be ? ToNumber(px). Because px and py are primitive values evaluation order is not important.
    var nx = ToNumber(px);

    // Let ny be ? ToNumber(py).
    var ny = ToNumber(py);

    // If nx is NaN, return undefined.
    if (nx !== nx) {
      return undefined;
    }

    // If ny is NaN, return undefined.
    if (ny !== ny) {
      return undefined;
    }

    // If nx and ny are the same Number value, return false.
    // If nx is +0 and ny is -0, return false.
    // If nx is -0 and ny is +0, return false.
    if (nx === ny) {
      return false;
    }

    // If nx is +∞, return false.
    if (nx === +Infinity) {
      return false;
    }

    // If ny is +∞, return true.
    if (ny === +Infinity) {
      return false;
    }

    // If ny is -∞, return false.
    if (ny === -Infinity) {
      return false;
    }

    // If nx is -∞, return true.
    if (nx === -Infinity) {
      return true;
    }

    // If the mathematical value of nx is less than the mathematical value of ny —note that these mathematical values are both finite and not both zero—return true. Otherwise, return false.
    if (nx < ny) {
      return true;
    }

    return false;
  }

}

LessThan('abc', 'ab'); /*?*/

LessThan('ab', 'abc'); /*?*/

LessThan('abd', 'abc'); /*?*/

LessThan('abc', 'abd'); /*?*/
LessThan('abc', 'abd'); /*?*/

LessThan('NaN', 2); /*?*/
LessThan(1, 'NaN'); /*?*/

LessThan(1, 1); /*?*/

LessThan(+0, -0); /*?*/
LessThan(-0, +0); /*?*/

LessThan(+Infinity, 0); /*?*/
LessThan(0, +Infinity); /*?*/
LessThan(0, -Infinity); /*?*/
LessThan(-Infinity, 0); /*?*/

LessThan(1, 2); /*?*/
LessThan(2, 1); /*?*/
