export class Person {

  constructor(
    private fullName: string,
    private age: number
  ) { }

  public getFullName(): string {
    return this.fullName;
  }

  public getAge(): number {
    return this.age;
  }

  public getInformation(): string {
    const information: string = `${this.getFullName()} is ${this.getAge()} years old`;

    return information;
  }

}
