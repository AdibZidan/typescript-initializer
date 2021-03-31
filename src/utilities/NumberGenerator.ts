export class NumberGenerator {

  public generateNumbers(amount: number): number[] {
    const generatedNumbers: number[] = [];

    for (let times = 1; times <= amount; times++) {
      generatedNumbers.push(times);
    }

    return generatedNumbers;
  }

}
