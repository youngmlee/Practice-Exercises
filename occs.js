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

/* Define a function named pick that takes a model (an Object) and a list of keys (an Array of Strings), returning a new Object with only the properties listed in keys.
USAGE:
var person = {
 name: 'Ron',
 role: 'Mentor',
 powerLevel: 9000,
 favoriteColor: '#000'
}

pick(person, ['name', 'powerLevel'])
 * {
 *  name: 'Ron',
 *  powerLevel: 9000
 * }

Hint: Review Object property access in JavaScript Basics. */

function pick(model, keys) {
  var newObj = {}
  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
	var value = keys[key]
	newObj.key = value
    }
  return newObj;
}

/* Define a function named createElement that takes a tagName (a String) and attributes (an Object) and returns an HTMLElement of the correct type including all supplied attributes.
USAGE:
createElement('p', { class: 'content' })
// -> <p class="content"></p>

createElement('li', { 'data-item-id': 1, class: 'item' })
// -> <li data-item-id="1" class="item"></li>
Hint: Review for ... in loops on MDN. */

function createElement(tagName, attributes) {
  var el = document.createElement(tagName)
  for (var val in attributes) {
    el.setAttribute(val, attributes[val])
  }
  return el
}

/* Define a function named createElement that takes a tagName (a String), some attributes (an Object) and some children (an Array) and returns an HTMLElement DOM tree.
USAGE:
var $article =
 createElement('div', { 'data-id': 1234 }, [
  createElement('h1', { class: 'title' }, []),
  createElement('h4', { class: 'author' }, []),
  createElement('p', { class: 'content' }, [])
 ])
$article
 * <div data-id="1234">
 *  <h1 class="title"></h1>
 *  <h4 class="author"></h4>
 *  <p class="content"></p>
 * </div>


var $list1 =
 createElement('ul', { class: "list-group" }, [
  createElement('li', { class: "list-group-item" }, []),
  createElement('li', { class: "list-group-item" }, []),
  createElement('li', { class: "list-group-item" }, [])
 ])

$list
 * <ul class="list-group">
 *  <li class="list-group-item"></li>
 *  <li class="list-group-item"></li>
 *  <li class="list-group-item"></li>
 * </ul>
*/

function createElement(tagName, attributes, children) {
  const el = document.createElement(tagName)
  for (let val in attributes) {
    el.setAttribute(val, attributes[val])
  }
  for (let i = 0; i < children.length; i++) {
    el.appendChild(children[i])
  }
  return el
}

/* Define a function named createElement with parameters:
tagName (a String)
attributes (an Object)
children (an Array)
createElement should return an HTMLElement DOM tree. Note: children may contain "value" data types, not just other HTMLElements.

Use instanceof to determine whether a given child is a Node before appending it to its parent.*/

function createElement(tagName, attributes, children) {
  const el = document.createElement(tagName)
  for (let val in attributes) {
    el.setAttribute(val, attributes[val])
  }
  for (let i = 0; i < children.length; i++) {
    if (children[i] instanceof Node) {
      el.appendChild(children[i])
    } else {
      el.textContent += children[i]
    }
  }
  return el
}

/* Create an Object named queryString with one method named stringify. stringify takes a params Object and returns a URL query string.
USAGE:
queryString.stringify({ id: 1 })
// -> "?id=1"

queryString.stringify({ skill: 'JavaScript', level: 'beginner' })
// -> "?language=JavaScript&level=beginner"

queryString.stringify({})
// -> ""

queryString.stringify({ foo: 'bar', baz: 'qux', quux: 'corge' })
// -> "?foo=bar&baz=qux&quux=corge" */

// solution1 (JS6 style):
const queryString = {
  stringify(object) {
    return Object
    .keys(object)
    .map((key, index) => `${!index?'?':'&'}${key}=${object[key]}`)
    .join('')
  }
}

// solution2:
const queryString = {
  stringify: function(object) {
    const keys = Object.keys(object)

    if (keys.length < 1) return ''
    let result = []
    for (var i = 0; i < keys.length; i++) {
      if (i === 0) {
        result.push('?' + keys[i] + '=' + object[keys[i]])
      } else {
        result.push('&' + keys[i] + '=' + object[keys[i]])
      }
    }

    return result.join('')
  }
}
