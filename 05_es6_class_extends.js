
// ---- cat --------------------

class Cat {
  constructor() {
    this.legs = 4
    this.tail = true
  }

  isAsleep() {
    return true
  }

  say() {
    return 'meow'
  }
}

// ---- lion -------------

class Lion extends Cat {
  say() {
    return 'roar'
  }
}


// ---- test -------------

var cat = new Cat()
var lion = new Lion()

console.log(cat.say())
console.log(lion.say())
