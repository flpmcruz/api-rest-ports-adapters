import { Email } from "./valueObjects/Email.js";
import { Name } from "./valueObjects/Name.js";
import { Password } from "./valueObjects/Password.js";

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public id: string
  ) {
    this.email = new Email(email).getValue();
    this.name = new Name(name).getValue();
    this.password = new Password(password).getValue();
    this.id = id;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}
