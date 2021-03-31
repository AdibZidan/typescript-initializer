import { AbstractPerson } from './AbstractPerson';

export class Person extends AbstractPerson {

  public constructor(
    firstName: string,
    lastName: string,
    age: number
  ) {
    super();

    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setAge(age);
  }

}
