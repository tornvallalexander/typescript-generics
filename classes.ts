
class Animal {
  public legCount: number
  constructor(legCount: number) {
    this.legCount = legCount
  }
}

class Cat extends Animal {
  constructor() {
    super(4)
  }
}

const printLegCount = <T extends Animal>(animal: T) => {
  console.log(animal.legCount)
}

const cat = new Cat()
printLegCount(cat)