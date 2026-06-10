class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("can speak");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // important
  }

  bark() {
    return "can bark";
  }
}

const response = new Dog("Boula");

console.log(`dog + ${response.bark()} + ${response.name}`);