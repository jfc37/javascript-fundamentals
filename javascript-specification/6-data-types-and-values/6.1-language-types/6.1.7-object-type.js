"use strict";
// 6.1.7.1 Property Attributes

var obj = {};

// Value - sets the value
Object.defineProperty(obj, 'valueTest', { value: 'aaa' });
console.log(obj.valueTest); //aaa

// Writable - if true, will throw error in strict mode, otherwise fail silently
Object.defineProperty(obj, 'writableTest', { writable: false });
// obj.writableTest = 333; // ERROR:  Cannot assign to read only property

// Enumerable - if true, will throw error in strict mode, otherwise fail silently
Object.defineProperty(obj, 'enumerableTest', { enumerable: true });
Object.defineProperty(obj, 'notEnumerableTest', { enumerable: false });
for (var prop in obj) {
  console.log(prop); // only enumerableTest
}

// Configurable - if false, attempts to delete the property, change the property to be an accessor property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.
Object.defineProperty(obj, 'configurableTest', { configurable: false });
// delete obj.configurableTest; // ERROR
// Object.defineProperty(obj, 'configurableTest', {configurable: true}); // ERROR
// Object.defineProperty(obj, 'configurableTest', {enumerable: true}); // ERROR

// Accessor properties
Object.defineProperty(obj, 'accessorProperty', { get: function () { return this._internalValue || 10 }, set: function (x) { this._internalValue = x * 2; } });
console.log(obj.accessorProperty); // 10
obj.accessorProperty = 2;
console.log(obj.accessorProperty); // 4


// 6.1.7.2 Internal methods
// getPrototypeOf()
function Cat() {
  return {
    legs: 4,
    hasTail: true
  }
};
var animal = new Cat();
console.log(Object.getPrototypeOf(animal)); // function Cat {}

// setPrototypeOf
function Dog() { }
Object.setPrototypeOf(animal, Dog);
console.log(Object.getPrototypeOf(animal)); // function Dog {}

// isExtensible()
console.log(Object.isExtensible(animal)); // true

// preventExtensions()
Object.preventExtensions(animal); // true
console.log(Object.isExtensible(animal)); // false

// getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(animal)); // legs, tails

Cat.call();
