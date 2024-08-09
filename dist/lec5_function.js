"use strict";
document.write("Lecture 5 Function<br>");
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 5);
document.write("5 + 5 =" + theSum1 + "<br>");
var getDiff = function (num1, num2 = 4, num3) {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
var theDiff1 = getDiff(10);
document.write("10 - 4 =" + theDiff1 + "<br>");
var theDiff2 = getDiff(10, 2);
document.write("10 - 2 =" + theDiff2 + "<br>");
var theDiff3 = getDiff(10, 4, 4);
document.write("10 - 4 - 4 =" + theDiff3 + "<br>");
