

// ---- cat --------------

function Cat() {}

Cat.prototype = {
  legs: 4,
  tail: true,
  isAsleep: function() {
    return true
  },
  say: function() {
    return 'meow'
  }
}

// ---- lion -------------

function Lion() {}

// inherit
Lion.prototype = Object.create(Cat.prototype)

// specialize
Lion.prototype.say = function() {
  return 'roar'
}


// ---- test -------------

var cat = new Cat()
var lion = new Lion()

console.log(cat.say())
console.log(lion.say())

