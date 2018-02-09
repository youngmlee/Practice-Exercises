// Define a function named findById that takes an id and a collection, returning the first object in collection that has a matching id property.

function findById(id, collection) {
  for (var i = 0; i < collection.length; i++) {
    if (id === collection[i].id) {
      return collection[i]
    }
  }
}

// Define a function named forEach that takes a list (an Array) and a procedure (a Function), calling procedure on each item in the list

function forEach(list, procedure) {
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    procedure(item)
  }
}

/*Define a function named ransomCase that takes a message (a String) and returns a version of message with every other character uppercased.
USAGE:
ransomCase('I know what you did last summer.')
// -> "I KnOw wHaT YoU DiD LaSt sUmMeR." */

function ransomCase(str) {
  var arr = []
  for (var i = 0; i < str.length; i++) {
    var letter = str[i]
    var upperCased = letter.toUpperCase()
    if (i % 2 === 0) {
      arr.push(letter)
    }
    else if (i % 2 !== 0) {
      arr.push(upperCased)
    }
  }
  var joined = arr.join('')
  return joined
}
