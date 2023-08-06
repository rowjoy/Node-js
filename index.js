/* eslint-disable no-unused-vars */
console.log('Hello world');
const name = require('lodash');

console.log(name.last([1, 2, 3]));

const getManList = require('./man');

getManList.test();
const data = getManList.test();
console.log(getManList.manlists);
console.log(name.capitalize('ADW'));
console.log(name.isBuffer(false));
console.log(name.sortedLastIndexBy([4, 12, 4]));
console.log(name.sortedUniq([1, 4, 2, 5]));
function checkData(_data) {
    if (_data === 9) {
        console.log('Wow nice');
    } else if (_data === 10) {
        console.log('Bad');
    }
}
console.log(checkData());
// 5 no
// Users/nec/Documents/Learning/node-js/index.js
// 22.00 minit
// https://www.youtube.com/watch?v=6Yv3YXgPBJU
