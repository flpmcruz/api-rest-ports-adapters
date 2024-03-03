export class Name {
  private value: string;

  constructor(value: string) {
    //validate value
    if (value.length < 2 || value.length > 50) {
      throw new Error("Name must be between 2 and 50 characters");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
