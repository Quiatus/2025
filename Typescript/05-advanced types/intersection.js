"use strict";
// type FileData = {
//   path: string;
//   content: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const file = {
    type: 'file',
    path: 'test'
};
const db = {
    type: 'db',
    url: 'ttt'
};
function loadData(source) {
    if ('path' in source) {
        return;
    }
    console.log('db');
}
function checkOriginDB(source) {
    if (source.type === 'db') {
        console.log('Origin - DB');
    }
}
loadData(db);
function getLength(val) {
    if (typeof val === 'string') {
        const words = val.split(' ').length;
        return `${words}`;
    }
    return val.length;
}
let store = {};
store.id = 5;
store.name = 'Leee';
console.log(store);
//# sourceMappingURL=intersection.js.map