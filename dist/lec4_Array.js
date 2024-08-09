"use strict";
document.write("<br>Lecture of Array");
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br>");
}
var strArray = randArray.map(String);
for (var val of strArray) {
    document.write(val + "<br>");
}
var randArray = randArray.map((n) => n * 5);
for (let val of randArray) {
    document.write(val + "<br>");
}
