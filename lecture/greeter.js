// Good practice: named export
// Why? To benefit from renaming refactoring and code autocomplete
export class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
