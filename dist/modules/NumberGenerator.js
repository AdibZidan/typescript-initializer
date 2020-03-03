"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberGenerator {
    constructor() { }
    generateNumbers(amount) {
        const generatedNumbers = [];
        for (let times = 1; times <= amount; times++) {
            generatedNumbers.push(times);
        }
        return generatedNumbers;
    }
}
exports.NumberGenerator = NumberGenerator;
