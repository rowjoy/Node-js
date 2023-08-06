/* eslint-disable no-unused-vars */
console.log('Jamirul islam');

// Data type in javaScprit
/*

1. String // -- "Jamirul islam"
2. Number // --- 100;
3. Bigint  // --- 1098438478364;
4. Boolean  // false;
5. Undefined //
6. Null //
7. Symbol // !! $%^*
8. Object //  const person = {
    name : "Joy",
    age : 12
};

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

 */

// eslint-disable-next-line no-unused-vars

// number
const length = 16;
const weight = 21.5;

// String

const color = 'Red';
const colors = 'Red ';

// boolean
const x = true;
const y = false;

// Object

const person = {
    name: ' Jamirul islam',
    age: 23,
    Id: 1,
};

// Arrey object

const array = [1, 1, 12, 3, 3, 2, 3, 3232, 323, 323];

// date object
const date = Date();
console.log(date);

let getName;
getName = 'Jamirul islam';
getName = 1234;
console.log(getName);

function getNameWith(name, age, id, type) {
    const allInfoJson = {
        ID: id,
        Name: name,
        Age: age,
        Type: type,
    };

    return typeof name === 'string' ? allInfoJson : '';
}

console.log(getNameWith());
