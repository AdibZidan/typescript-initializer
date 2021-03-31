export abstract class AbstractPerson {

  private firstName: string = '';
  private lastName: string = '';
  private age: number = 0;

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public toString(): string {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }

}
