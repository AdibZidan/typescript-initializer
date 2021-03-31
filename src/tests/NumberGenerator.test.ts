import { NumberGenerator } from '../utilities/NumberGenerator';

describe('Number Generator', () => {

  let numberGenerator: NumberGenerator;

  beforeEach(() => {
    numberGenerator = new NumberGenerator();
  });

  it('Should generate a set of numbers', () => {
    const actualGeneratedNumbers: number[] = numberGenerator.generateNumbers(10);
    const expectedGeneratedNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(actualGeneratedNumbers)
      .toEqual(expectedGeneratedNumbers);
  });

});
