"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = 'age';
validKey = 'name';
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Key does not exist');
    }
    return val;
}
const userObject = {
    name: 'Pat',
    age: 20
};
getProp(userObject, 'age');
//# sourceMappingURL=keyof.js.map