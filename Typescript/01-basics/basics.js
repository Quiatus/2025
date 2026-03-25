let userName;
let userAge = 30;
let userHobbies = [];
userName = "Test";
function add(a, b = 5) {
    userHobbies.push('10');
    return a + b;
}
console.log(add(10));
// Tuple
let results = [1, 2];
// Dynamic object declaration
let test;
test = {
    test: 'test'
};
console.log(test.test);
// ENUMS
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
let userType = 'admin';
let dbUser = {
    name: 'Admin01',
    role: 'admin',
    permissions: ['dds']
};
export {};
