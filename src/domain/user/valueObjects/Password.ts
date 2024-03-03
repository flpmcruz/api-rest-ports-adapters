export class Password {
  private value: string;

  constructor(value: string) {
    //validate value
    if (value.length < 6 || value.length > 50) {
      throw new Error("Password must be between 6 and 50 characters");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
