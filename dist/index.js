"use strict";
let age = 22;
if (age >= 18) {
    console.log("Can Vote");
}
if (age >= 18)
    age += 20;
let sales = 123;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let array = [1, 2, '3'];
let user = [1, "Dhiraj"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
let employee = { id: 1,
    name: 'Dhiraj',
    retire: (date) => {
        console.log(date);
    }, };
employee;
