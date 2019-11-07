"use strict";

alert("Hello there!");

// The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check. It supports two forms of syntax: As an operator: typeof x. As a function: typeof(x).

typeof undefined; // "undefined"
typeof 0; // "number"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol" (for unique identifiers)
typeof Math; // "object"  (1)
typeof null; // "object"  (2) This is an error with typeof! null has a type of it's own.
typeof alert; // "function"  (3) This is not quite correct. Functions belong to the object type, but typeof treats it as it's own type, which is very convenient in practice.

// String quotes
// Backticks (unlike single and double quotes) embed the expression inside ${...} into the string.

let name = "Ilya";
`hello ${1}`; // hello 1
`hello ${"name"}`; // hello name
`hello ${name}`; // hello Ilya

// String conversion happens when we need the string form of a value.
//For example, alert(value) does it to show the value.
let value = true;
alert(typeof value); // boolean

// We can also call the String(value) function to convert a value to a string
// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
value = String(value); // now value is a string "true"

// Numeric conversion happens in mathematical functions and expressions automatically.
"6" / "2";
// 3, strings are converted to numbers

//We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
let num = Number(str); // becomes a number 123

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
//If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number"); // NaN, conversion failed

// Numeric conversion rules:
Number("   123   "); // 123
Number("123z"); // NaN (error reading a number at "z")
Number(true); // 1
Number(false); // 0
Number(undefined); // NaN
Number(null); // 0
Number(""); // 0
Number(NaN); // No output

// Addition ‘+’ concatenates strings
// Almost all mathematical operations convert values to numbers. A notable exception is addition +. If one of the added values is a string, the other one is also converted to a string. Then, it concatenates (joins) them.
// This only happens when at least one of the arguments is a string. Otherwise, values are converted to numbers.
1 + "2"; // '12' (string to the right)
"1" + 2; // '12' (string to the left)

// Boolean conversion is the simplest one.
// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean("0"); // true
Boolean(" "); // true

// http://javascript.info/type-conversions
"" + 1 + 0; // 1
"" - 1 + 0; // -1
true + false; // 0
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // NaN
"$" + 4 + 5; // NaN
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // Infinity
"  -9  " + 5; // -4
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; //

SpeechRecognitionResult.innerhtml = surmresutln + "" + blabls;
