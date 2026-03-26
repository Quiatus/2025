"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = {
    email: 'blah',
    password: '132',
    login() {
        console.log('...');
    },
    logout() {
        console.log(('...'));
    }
};
class AuthUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() {
    }
    logout() {
    }
}
//# sourceMappingURL=interfaces.js.map