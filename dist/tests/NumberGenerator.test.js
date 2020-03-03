"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberGenerator_1 = require("../modules/NumberGenerator");
describe('Number Generator', () => {
    let numberGenerator;
    beforeEach(() => {
        numberGenerator = new NumberGenerator_1.NumberGenerator();
    });
    it('Should generate a set of numbers', () => {
        const actualGeneratedNumbers = numberGenerator.generateNumbers(10);
        const expectedGeneratedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(actualGeneratedNumbers)
            .toEqual(expectedGeneratedNumbers);
    });
});
