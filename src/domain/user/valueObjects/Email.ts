export class Email {
  private value: string;

  constructor(value: string) {
    //validate value
    const regex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    if (!regex.test(value)) {
      throw new Error("Invalid email address.");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
