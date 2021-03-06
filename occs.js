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

<<<<<<< HEAD
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

// solution1 (JS6 style): //
const queryString = {
  stringify(object) {
    return Object
    .keys(object)
    .map((key, index) => `${!index?'?':'&'}${key}=${object[key]}`)
    .join('')
  }
}

// solution2: //
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

/* Create an Object named queryString with one method named parse. parse takes a query String and returns a params Object.
USAGE:
queryString.parse('?id=1')
// -> { id: '1' }

queryString.parse('?skill=JavaScript&level=beginner')
// -> { skill: 'JavaScript', level: 'beginner' }

queryString.parse('')
// -> {}

queryString.parse('?')
// -> {}

queryString.parse('?foo=bar&baz=qux&quux=corge')
// -> { foo: 'bar', baz: 'qux', quux: 'corge' } */

const queryString = {
  parse(queryStr) {
    var paramsObj = {}
    var props = []
    var vals = []
    var split = queryStr.split('&')
    for (let i = 0; i < split.length; i++) {
      var keyVal = split[i]
      var splitAgain = keyVal.split('=')
      var [key, val] = splitAgain
      props.push(key)
      vals.push(val)
    }
    for (let j = 0; j < props.length; j++) {
      if (props[j][0] === '?') {
        props[j] = props[j].slice(1)
      }
      paramsObj[props[j]] = vals[j]
    }
    return paramsObj
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

<<<<<<< HEAD
// solution1 (JS6 style):
=======
>>>>>>> c4cd64cfd4d300285a299aa2dd4349cb85b02a35
const queryString = {
  stringify(object) {
    return Object
    .keys(object)
    .map((key, index) => `${!index?'?':'&'}${key}=${object[key]}`)
    .join('')
  }
}

<<<<<<< HEAD
// solution2:
=======
>>>>>>> c4cd64cfd4d300285a299aa2dd4349cb85b02a35
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
<<<<<<< HEAD
=======

/* Create an Object named queryString with one method named parse. parse takes a query String and returns a params Object.
USAGE:
queryString.parse('?id=1')
// -> { id: '1' }

queryString.parse('?skill=JavaScript&level=beginner')
// -> { skill: 'JavaScript', level: 'beginner' }

queryString.parse('')
// -> {}

queryString.parse('?')
// -> {}

queryString.parse('?foo=bar&baz=qux&quux=corge')
// -> { foo: 'bar', baz: 'qux', quux: 'corge' } */

const queryString = {
  parse(queryStr) {
    var paramsObj = {}
    var props = []
    var vals = []
    var split = queryStr.split('&')
    for (let i = 0; i < split.length; i++) {
      var keyVal = split[i]
      var splitAgain = keyVal.split('=')
      var [key, val] = splitAgain
      props.push(key)
      vals.push(val)
    }
    for (let j = 0; j < props.length; j++) {
      if (props[j][0] === '?') {
        props[j] = props[j].slice(1)
      }
      paramsObj[props[j]] = vals[j]
    }
    return paramsObj
  }
}

/* Create a new express web server from memory (without documentation or looking at your old code) that responds at its root path with the string "Hello, World!".
Be sure to include start and watch scripts in your package.json */

//index.js//
const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Now listening on port 3000!')
})

package.json:
{
  "name": "Scratch",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "watch": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2"
  },
  "devDependencies": {
    "nodemon": "^1.12.1"
  }
}

// Define a function that returns itself. //

function returnSelf () {
  return returnSelf()
}

/* Define a function named omit.
SYNTAX:
omit(target, keys)
PARAMETERS:
target
The Object to omit keys from.
keys
An Array of Strings representing the property keys to omit from target.
RETURN VALUE:
A shallow copy of target excluding the properties listed by key in keys.
USAGE:
const teacher = {
 name: 'Ron Perris',
 subject: 'Software Development',
 powerLevel: 9000
}

omit(teacher, ['subject', 'powerLevel'])
/**
 * {
 *  name: 'Ron Perris'
 * }
 */

function omit(target, keys) {
  return Object.keys(target)
  .filter(key => !keys.includes(key))
  .reduce((copy, key) =>
  Object.assign(copy, { [key]: target[key] })
  , {})
}

/*Define a function named defaults.
SYNTAX:
defaults(target, source)
PARAMETERS:
target
The Object to assign default properties to.
source
An Object supplying default properties.
RETURN VALUE:
A shallow copy of target with additional properties found on source but not on target.
USAGE:
const celeste = {
 fullName: 'Celeste Shuster',
 role: 'Admissions Advisor',
 powerLevel: 8999
}

const ron = {
 fullName: 'Ron Perris'
 company: 'OC|CS',
 role: 'Founder'
 powerLevel: 9000,
 location: 'Newport Beach CA'
}


defaults(celeste, ron)
/**
 * {
 *  fullName: 'Celeste Shuster',
 *  company: 'OC|CS',
 *  role: 'Admissions Advisor',
 *  powerLevel: 8999,
 *  location: 'Newport Beach CA'
 * }
 */

function defaults(target, source) {
  const finalObj = {}
  const firstCopy = Object.assign(finalObj, target)
  const targetKeysArr = Object.keys(target)
  const sourceOmitted = omit(source, targetKeysArr)
  const final = Object.assign(finalObj, sourceOmitted)
  return final
}

function omit(target, keys) {
  return Object.keys(target)
    .filter(key => !keys.includes(key))
    .reduce((copy, key) =>
      Object.assign(copy, { [key]: target[key] })
    , {})
}

/*Define a function named groupBy.
SYNTAX:
groupBy(list, key)
PARAMETERS:
list
An Array of values to group.
key
A String property key whose value is used to group elements of list.
RETURN VALUE:
An Object with property keys found in the elements of list at key.
USAGE:
const foods = [
 { name: 'broccoli', type: 'veggie' },
 { name: 'kale', type: 'veggie' },
 { name: 'cheese', type: 'dairy' },
 { name: 'chicken', type: 'meat' },
 { name: 'oats', type: 'grain' },
 { name: 'milk', type: 'dairy' },
 { name: 'yogurt', type: 'dairy' },
 { name: 'bacon', type: 'meat' }
]

groupBy(foods, 'type')
/**
 * {
 *  veggie: [
 *   { name: 'broccoli', type: 'veggie' },
 *   { name: 'kale', type: 'veggie' }
 *  ],
 *  dairy: [
 *   { name: 'cheese', type: 'dairy' },
 *   { name: 'milk', type: 'dairy' },
 *   { name: 'yogurt', type: 'dairy' }
 *  ],
 *  meat: [
 *   { name: 'chicken', type: 'meat' },
 *   { name: 'bacon', type: 'meat' }
 *  ]
 *  grain: [
 *   { name: 'oats', type: 'grain' }
 *  ]
 * }
*/

function groupBy(list, key) {
  return list
  .reduce((grouped, item) => ({
    ...grouped,
    [item[key]]: item[key] in grouped ? [...grouped[item[key]], item] : [item]
  }), {})
}

/*Define a function named deepEquals.
SYNTAX:
deepEquals(val1, val2)
PARAMETERS:
val1 & val2
The values to compare.
RETURN VALUE:
A Boolean confirming or refuting the deep equality of val1 and val2
USAGE:
deepEquals(42, 42) // true

deepEquals([1, 2, 3], [1, 2, 3]) // true

deepEquals({ foo: 'bar' }, { foo: 'bar' }) // true

deepEquals(
 [{ baz: 'qux' }, { corge: 'grault' }],
 [{ baz: 'qux' }, { corge: 'grault' }]
) // true
*/

function typeEquals(val1, val2) {
  return Object.prototype.toString.call(val1) === Object.prototype.toString.call(val2)
}

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArray(val) {
  return Array.isArray(val)
}

function deepEquals(val1, val2) {
  if (!typeEquals(val1, val2)) return false
  if (isArray(val1)) {
    return val1.length === val2.length &&
    val1.every((element, i) => deepEquals(element, val2[i]))
  }
  if (isObject(val1)) {
    const keys1 = Object.keys(val1)
    const keys2 = Object.keys(val2)
    return keys1.length === keys2.length &&
    keys1.every(key => deepEquals(val1[key], val2[key]))
  }
  return val1 === val2
}

/*Define a function named throttle.
SYNTAX:
throttle(quota, timeFrame, procedure)
PARAMETERS:
quota
The maximum Number of times that procedure will be called within timeFrame.
timeFrame
The Number milliseconds that must elapse before quota is reset. timeFrame begins the first time procedure is called.
procedure
A Function to forward arguments to no more than quota times within a given timeFrame.
USAGE:
const $button = document.querySelector('button')

$button.addEventListener('click', throttle(5, 1000, event => {
 const count = parseInt($button.textContent, 10)
 $button.textContent = count + 1
})) */

function throttle(quota, timeFrame, procedure) {
  let calls = 0
  let timeout = null
  return (...args) => {
    if (calls === quota) return
    if (!timeout) {
      timeout = setTimeout(() => {
        calls = 0
        timeout = null
      }, timeFrame)
    }
    calls += 1
    procedure(...args)
  }
}

/*Define a function named sampleSize.
SYNTAX:
const randomSample = sampleSize(source, size)
PARAMETERS:
source
An Array of values.
size
The Number of elements to fill randomSample with.
RETURN VALUE:
randomSample
An Array of elements randomly chosen by unique position from source.
USAGE:
sampleSize([1, 2, 3], 2)
// [3, 1]

sampleSize([1, 2, 3], 4)
// [2, 3, 1]

sampleSize([1, 2, 3, 1], 3)
// [2, 1, 1] */

//my solution//
function sampleSize(source, size) {
  const finalArr = []
  if (size < source.length) {
    for (let i = 1; i <= size; i++) {
      let randomizer = (Math.random() * source.length)
      let ceiling = (Math.ceil(randomizer) -1)
      finalArr.push(source[ceiling])
    }
  }
  else if (size > source.length) {
    for (let i = 0; i < source.length; i++) {
      let randomizer = (Math.random() * source.length)
      let ceiling = (Math.ceil(randomizer) -1)
      finalArr.push(source[ceiling])
    }
  }
  return finalArr
}

//tims solution//
function sampleSize([ ...source ], size) {
  const sample = []
  while (source.length && sample.length < size) {
    const randomIndex = Math.floor(Math.random() * source.length)
    const [ item ] = source.splice(randomIndex, 1)
    sample.push(item)
  }
  return sample
}

// recursive://
function sampleSize([ ...source ], size) {
  if (!size) return []
  const randomIndex = Math.floor(Math.random() * source.length)
  return [...source.splice(randomIndex, 1), ...sampleSize(source, size - 1)]
}

/* Define a function named shuffle.
SYNTAX:
const shuffled = shuffle(list)
PARAMETERS:
list
An Array of values.
RETURN VALUE:
A new Array containing all values of list, but in a random order.
USAGE:
const numbers = [1, 2, 3, 4]

shuffle(numbers)
// [3, 2, 4, 1] */

function shuffle([ ...list ]) {
  const shuffled = []
  while (list.length) {
    const randomIndex = Math.floor(Math.random() * list.length)
    const [ item ] = list.splice(randomIndex, 1)
    shuffled.push(item)
  }
  return shuffled
}

// recursive: //
function shuffleR([ ...list ]) {
  if (!list.length) return []
  const randomIndex = Math.floor(Math.random() * list.length)
  return [...list.splice(randomIndex, 1), ...shuffleR(list)]
}

/* Define a function named compose.
SYNTAX:
const composed = compose(fn1[, ...fnN])
PARAMETERS:
fn1[, ...fnN]
One or more Functions.
RETURN VALUE:
A composed function that, when called, forwards its argument to the last Function, piping its return value through the remaining Functions from right to left.
USAGE:
const double = x => x * 2

const quarter = x => x / 4

const square = x => x * x

const composed = compose(square, quarter, double)

composed(2) // 1

composed(4) // 2

composed(5) // 6.25

composed(1) // 0.25 */

function compose(...theArgs) {
  return function(num) {
    let val = num
    for (let i = theArgs.length-1; i >= 0; i--) {
      let fxn = theArgs[i]
      val = fxn(val)
    }
    return val
  }
}

function compose(...fns) {
  return function(x) {
    return fns.reduceRight((value, fn) {
      return fn(value)
    }, x)
  }
}
