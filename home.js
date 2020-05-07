console.log('hello ');


// alert ('hello this is Vicky');

// *****variable******
let juice = 'orange';
console.log(juice);

let someNumber = 45;
console.log(someNumber);


// you can change code on html using javascript*******
// let age = prompt('what is your age?');
// let name = prompt('what is your name');

// document.getElementById('someText').innerHTML = age;
// document.getElementById('someText').innerHTML = name;

// Numbers in Javascript
let num1 = 10;
// num1 = num1 - 1.2;
// increment num1 by 1
num1++;

// decrement num1 by 1
num1--;

console.log(num1);

// divide, multiply *, remainder %
console.log(num1 % 6);
console.log(num1 * 3);

// increment/decrement by any number that i want
num1 +=10;
console.log(num1);

/* functions in Javascript
 step 1: Create a function
 step 2: call the function
*/
// create
function fun(){
    // alert('this is a function');
    console.log('this is a function');
}
// call
fun();
/* let's create a function that take in a name and says hello followed by your name
for example
Name: "vicky"
Return: "Hello Vicky"
*/
// function greeting(){
//   let name =  prompt('what is your name?');
//   let result = 'Hello' + ' ' +name;   // string concatenation
//   console.log(result);
// }

// greeting();

// // how do arguments work in function (like input)
// function greetings(yourName) {
//     let name = prompt('what is your name?');
//     let result = 'hello' + ' '+ yourName;
//     console.log(result);
// }

// greetings(name);
//  how do we add 2 number togeda in a function?
function sumNumber(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
sumNumber(10, 10);
sumNumber ('Hello ', 'vicky')

/* while loops

let num = 0
while (num < 100){
    num += 1;
    console.log(num);
}
*/
// // for loop
// for (let num = 0; num<=100; num++) {
//     console.log(num);
// }
// data types

let yourAge = 18;                                    //number
let yourName = 'Vicky'                               //string
let name = {first: 'Vicky', last: 'Alabi'};          //Object
let truth = false;                                  //Boolean
let groceries = ['apple', 'banana', 'oranges'];     // arrays
let random;                                         //undefined
let nothing = null;                                  //value null

// strings in Javascript (common methods)

let fruit = 'banana, orange, blackberry, mango';
let moreFruit = 'banana\napple';                    //new line
console.log(moreFruit);      
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));                      //split by characters
console.log(fruit.split(','));                     // split by comma

// ******Arrays*********
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
 fruits = new Array('banana', 'apple', 'orange', 'pineapples');

// alert(fruits[2]);
console.log(fruits[2]);    // access value at index 2nd

fruits[0] = 'pearl';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);                  //to list out the fruit
}

// array common methods
console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits);
console.log(fruits.pop(), fruits);   //remove last item
console.log(fruits.push('blackberries'), fruits); //appends
console.log(fruits[4]);
fruits[4] = 'new fruit';
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift();  //remove first element from the list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['ewedu', 'water leaf', 'tomato'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5,10,2,25,3,255,3,1,2,334,2,334];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a, b){return a-b}));             //arranging in alphabeth ascending order
console.log(someNumbers.sort(function(a, b){return b-a}));             //sorted in alphabeth descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

//**************object in Javascript

let student = {
    first: 'Vicky', 
    last: 'Alabi',
    age: '30',
    height: '150',
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'Tori';        // change value
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
//***********Dictionaries in python*********

// ************ conditionals, control flows (if else)***************
// ************ 18 -35 is my target demographic************
// && AND
// || OR


let age = 45;  //prompt('what is your age?');

if ( ( age >= 18) && (age <= 35) ){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//  Switch statement in Javascript
//  differenciate between weekday vs. weekend
//  day 0 --> Sunday  --> weekend
//  day 1 --> monday --> weekday
//  day 2 --> Tuesday --> weekday
//  day 3 --> Wednesday --> weekday
//  day 4 --> Thursday --> weekday
//  day 5 --> friday --> weekend
//  day 6 --> Saturday --> weekend

switch (2) {
    case 0:
        text = 'weekend';
    case 5:
        text = 'weekend';
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);
  /******** inside of using if statement */
   
//  jason in javascript








