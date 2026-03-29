"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function logger(target, context) {
    console.log('logger');
    console.log(target);
    console.log(context);
    return class extends target {
        constructor(...args) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}
function autobind(target, context) {
    context.addInitializer(function () {
        this[context.name] = this[context.name].bind(this);
    });
    return function () {
        console.log('Executing original function.');
        target.apply(this);
    };
}
function replacer(initValue) {
    return function replacerDecorator(target, context) {
        console.log(target);
        console.log(context);
        return (initValue) => {
            console.log(initValue);
            return initValue;
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Pat';
    }
    greet() {
        console.log(`Hi, ${this.name}!`);
    }
};
__decorate([
    replacer('Name')
], Person.prototype, "name", void 0);
__decorate([
    autobind
], Person.prototype, "greet", null);
Person = __decorate([
    logger
], Person);
const nm = new Person();
const greet = nm.greet;
greet();
//# sourceMappingURL=decorators.js.map