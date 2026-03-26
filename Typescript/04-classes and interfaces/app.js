"use strict";
// class User {
//   name: string
//   age: number
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }
// TS shortcut 
class User {
    name;
    age;
    hobbies = 'None';
    _role = '';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set role(roleName) {
        if (roleName.trim() === '') {
            throw new Error('Role must not be empty!');
        }
        this._role = roleName;
    }
    get userName() {
        return this.name + '_' + this._role;
    }
    static clName() {
        console.log('User');
    }
}
class Employee extends User {
    title;
    constructor(name, age, title) {
        super(name, age);
        this.title = title;
    }
}
User.clName();
const user = new User('Patrik', 30);
user.role = 'admin';
console.log(user.userName);
const empl = new Employee('Matt', 22, 'Coffee Procurer');
empl.role = 'employee';
// abstract classess cannot be instantiated, only extended
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(target) {
        // ...
    }
}
//# sourceMappingURL=app.js.map