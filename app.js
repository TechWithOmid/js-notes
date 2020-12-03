// // my javasript notes
// // copy the part you want and run it



// let x = 5 
// console.log(x)

// let sen = 31;
// //let sen = 30; // we got SyntaxError
// console.log(sen)

// const adad = 10
// //adad = 10 
// // // we got TypeError because we cant reasign const


// let a = '1'
// // console.log(a)

// // String, Number, Boolean, Null, Undifiend, Symbol
// // String:
// let name = 'omid'
// let family = "mamadi"

// // Number
// let age = 17
// let floatNum = 4.5

// //Boolean
// let isCool = true
// let isBad = false

// // null
// let nullValue = null

// // undefined
// let b = undefined

// // console.log(typeof floatNum) // for know the variable type


// // concatenation
// let info = name + ' ' + family
// // console.log(info)

// info = 'my name is '+name+'and Iam ' + age 
// // console.log(info)

// // template string
// const hello = `my name is ${name} and Iam ${age}`
// // console.log(hello)

// // some string method

// const s = 'Hello World!'

// console.log(s.length) // give us the char length
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5)) // Hello
// console.log(s.split(' ')) // split string to array

// // Array
// // there is two way to declare array:

// // method 1
// const num = new Array(1, 2, 3, 4)
// console.log(num[0])

// // method 2
// const fruit = ['apple', 'kivy', 'orange']
// console.log(fruit)

// // also we can use multiple data type in one array
// const test = ['apple', 1, true, null, undefined]
// console.log(test)

// // for change a value of array item 
// test[2] = 'pears'
// console.log(test)

// // add item to first and end of array
// test.push('final') // end
// test.unshift('start') // start

// console.log(test)

// console.log(Array.isArray(test)) // return false and true
// console.log(test.indexOf('apple')) // return index of given value

// // Object

// const person = {
//     firstName : 'omid', 
//     lastName : 'mamadi',
//     age : 17, 
//     hobbies:['music', 'movie', 'game'],
//     address:{
//         city: 'dehgolan',
//         state: 'kurdestan',
//         street:'namaz street'
//     }
// }
// // bad way 
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['address'])

// // better way
// console.log(person.age)
// console.log(person.hobbies)
// console.log(person.hobbies[1])
// console.log(person.address.city)

// // intrested thing
// const {firstName, age} = person
// console.log(firstName)
// console.log(age)
// // one more
// const {address: {city}} = person
// console.log(city)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isComplete: true
//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isComplete: true
//     },
//     {
//         id: 3,
//         text: 'Dentist app',
//         isComplete: false
//     }
// ]

// console.log(todos[1].text)

// // and for turn it to JSON
// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)

// For
// for (let i =0; i<10; i++){
//     console.log(i)
// }

// // While loop
// let i = 0;
// while(i<10){
//     console.log(i)
//     i++
// }

//// the is better way for itrate trough array
//// forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// const todoText = todos.map(function (todo){
//     return todo.text
// })
 
// console.log(todoText)

// const todoCompleted = todos.filter(function(todo){
//     return todo.isComplete === true
// })

// // also we can use filter and map
// const todoCompleted1 = todos.filter(function(todo){
//     return todo.isComplete === true
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted1)


// //  conditions
// // we have two equal sign first one just check value
// // but second one check value and type 
// // ==, ===
// x = 10
// y = '10'
// if (x == y){
//     console.log('thats work')
// }else if(x === y){
//     console.log('this one not work')
// }else{
//     console.log('this is else statement')
// }

// // inline conditions
// // we call "?" this "then" in js
// const color = 11 > x ? 'red':'blue'
// console.log(color)

// // switch statement 
// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'blue':
//         console.log('color is blue')
//         break;
//     default:
//         console.log('color not match')
//         break;
// }


// // function

// function add_num(num1, num2){
//     return num1, num2
// }

// // // arow function
// const addNum1 = (num1, num2) => {
//     return num1 + num2
// } 

// // // we can make it cleaner
// const addNum2 = (num1, num2) => num1+num2

// // // one more step
// const addNum3 = num1 => num1 + 5

// console.log(addNum3(6))

// // // for set defualt params 
// function addnum(num1=5, num2=5){
//     return num1, num2
// }

// console.log(addnum())



//  // BOM Browser Object Model
// // DOM Document Object Model

// let output;
// output = document.all;
// output = document.links[10].text;
// output = document.URL;
// output = document.domain;

// console.log(output)


// // get element by id

// let heading = document.getElementById('heading')
// heading = heading.textContent
// heading.textContent = 'new'
// heading.style.color = 'blue'

// console.log(heading)

// // also we can access to element with tag
// let heading = document.getElementsByTagName('h1')

// console.log(heading)

// // and we can access element by class name
// let card = document.getElementsByClassName('card')

// console.log(card) 
// let heading = document.querySelector('#heading') // id
// heading = document.querySelector('.heading') // class
// heading = document.querySelector('h1') // tag name

// console.log(heading)

// let card = document.querySelector('.card') // return first element with card class
// card = document.querySelectorAll('.crad') // return all of element with card class in nodeList

// console.log(card)

// querySelector vs get element

// // in getElementsByClassName we can itrate it with forEach becuase saved as HTMLCollection
// // but in querySelectorAll we can itrate with forEach but this save as nodeList

// let cardG = document.getElementsByClassName('card')

// cardG.forEach(element => {
//     console.log(element)
// });

// let cardQ = document.querySelectorAll('.card')
// cardQ = document.querySelectorAll('.main-bar')

// cardQ.forEach(element => {
//     // console.log(element)
//     element.remove()
// });

// // traversing from parent to children

// let primary = document.querySelector('#primary').textContent
// console.log(primary)

// let cards = document.querySelector('.card')
// console.log(cards)

// let footer = document.querySelector('.footer').children[0].firstElementChild.children[1].firstElementChild.children[1]
// footer.textContent = 'اینو تغییر دادم'

// console.log(footer)


// // Ading new html tag
// // creating new element

// // create element
// let newLink = document.createElement('a')

// // set attribute
// newLink.classList = 'link'
// newLink.href = '#'
// // another way of creat attribute is :
// // newLink.setAttribute('href', '#')

// // adding child
// newLink.appendChild(document.createTextNode('لینک جدید'))

// // adding to html
// document.querySelector('#primary').append(newLink)

// console.log(newLink)

// // replace html tag

// const h2 = document.createElement('h2')
// // h2.classList.add('heading')
// h2.id = 'heading'
// h2.classList.add('heading')

// h2.appendChild(document.createTextNode('OMID'))

// const oldHeading = document.querySelector('#heading')
// const parent = oldHeading.parentElement

// // replace 
// parent.replaceChild(h2, oldHeading)


// // remove html tag
// const rmHeading = document.querySelector('#heading')
// rmHeading.remove()

// // one more example
// const links = document.querySelectorAll('#primary .link')
// links[0].remove() // remove first link
// links[2].remove() // remove 3th link

