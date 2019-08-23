"use strict";
var a = ["aa", 11]; //(string | number)[]
var b = {
    a: "aa",
    b: 1,
    c: true,
    d: ["aa", 11]
};
b.e = 'aa';
var c = {
    a: 1,
    b: 1000000
};
// ※ほしい
// 正規表現でstring型を表現
// https://github.com/Microsoft/TypeScript/issues/6579
var regex = /[a-z]/i;
var test = regex.test("baa"); //boolean
console.log(test);
