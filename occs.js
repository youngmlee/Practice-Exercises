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

/*Define a function named filter that takes a list (an Array) and a predicate (a Function) and returns a new Array containing only the items within list for which predicate returns true.
USAGE:
var names = ['Ron', 'Courtney', 'Celeste', 'Victor', 'Tim']

filter(names, function (name) {
 return name.startsWith('C')
})
// -> ["Courtney", "Celeste"]

filter(names, function (name) {
 return name.includes('i')
})
// -> ["Victor", "Tim"]

filter(names, function (name) {
 return name === "Ron"
})
// -> ["Ron"] */

function filter(list, predicate) { //predicate = something that returns true//
  var filtered = []
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    if (predicate(item)) {
      filtered.push(item)
    }
  }
  return filtered
}

/* Define a function named map that takes a list (an Array) and a transform (a Function) and returns a new Array containing the results of applying transform to each item in list.
USAGE:
var numbers = [5, 10, 15, 20]

map(numbers, function (number) {
 return number / 5
})
// -> [1, 2, 3, 4]

map(numbers, function (number) {
 return number * 2
})
// -> [10, 20, 30, 40]

map(numbers, function (number) {
 return number + 1
})
// -> [6, 11, 16, 21] */

function map(list, transform) {
  var arr = []
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    arr.push(transform(item]))
  }
  return arr
}

/* Define a function named reduce that takes a list (an Array), a combinator (a Function), and an initialValue (any type ). reduce reapplies combinator to a recomputed initialValue and each item within list until a final value is returned.
USAGE:
var numbers = [1, 2, 3, 4, 5]

reduce(numbers, function (total, number) {
 return total + number
}, 0)
// -> 15

reduce(numbers, function (product, number) {
 return product * number
}, 1)
// -> 120

reduce(numbers, function ($numbers, number) {
 var $number = document.createElement('li')
 $number.textContent = number
 $numbers.appendChild($number)
 return $numbers
}, document.createElement('ul'))

 * <ul>
 *  <li>1</li>
 *  <li>2</li>
 *  <li>3</li>
 *  <li>4</li>
 *  <li>5</li>
 * </ul>
 */

function reduce(list, combinator, initialValue) {
  var final = initialValue
  for (var i = 0; i < list.length; i++) {
	final = combinator(final, list[i])
  }
  return final
}
