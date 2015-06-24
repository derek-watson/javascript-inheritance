

// ---- cat --------------

function catFactory() {

  return {
    legs: 4,
    tail: true,
    isAsleep: function() {
      return true
    },
    say: function() {
      return 'meow'
    }
  }
}

// ---- lion -------------

function lionFactory() {

  // inherit
  var lion = catFactory()

  // specialize
  lion.say = function() {
    return 'roar!'
  }

  return lion
}


// ---- test -------------

var cat = catFactory()
var lion = lionFactory()

console.log(cat.say())
console.log(lion.say())

