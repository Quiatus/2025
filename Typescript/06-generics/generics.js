"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['one', 'two'];
let store = {};
store.name = 'Store';
store.isOpen = true;
let otherStore = {
    revenue: 50000,
    employees: [
        {
            name: 'tet',
            age: 20
        },
        {
            name: 'Bob',
            age: 50
        }
    ]
};
function addEmployee(otherStore) {
    if (Array.isArray(otherStore.employees)) {
        otherStore.employees.push({
            name: 'Tim',
            age: 20
        });
    }
}
addEmployee(otherStore);
console.log(otherStore);
//# sourceMappingURL=generics.js.map