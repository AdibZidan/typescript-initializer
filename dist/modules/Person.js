"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    getFullName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
    getInformation() {
        const information = `${this.getFullName()} is ${this.getAge()} years old`;
        return information;
    }
}
exports.Person = Person;
