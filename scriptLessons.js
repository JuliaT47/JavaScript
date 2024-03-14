// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

//Lesson 1
//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

//***2***
// Який буде результат виконання скрипта? // let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3*** //Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length); //19

//***8**
//вивести в консоль message великими літерами

// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers // вивести результат в консоль

// let user = {};
// user.name = "Olga";
// user.age = 23;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу “for...in” вивести в консоль ключі і значення об*єкта

// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let value = 234,
//   remainder,
//   sum = 0;
// while (value) {
//   remainder = value % 10;
//   sum = sum + remainder;
//   value = Math.floor(value / 10);
// }
// console.log(sum);

// Lesson 2

// alert(message);
// console.log(message);

// const isConfirm = confirm("Please confirm");
// console.log(isConfirm);

// const test = confirm("yes or no");
// console.log(test);

// const userName = prompt("Please type your name");
// console.log(userName);

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// value = "123";
// console.log(typeof value);
// const newValue = Number(value);
// console.log(typeof newValue);

// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false

// console.log(Boolean("Hello")); //true
// console.log(Boolean("")); //false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false

// console.log(2 + 3);
// console.log(10 - 4);
// console.log(5 * 5);
// console.log(6 / 2);
// console.log(8 % 3);
// console.log(5 ** 2);

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(7 <= 3);

// let value = 0; //setting value
// console.log(value == 0); //checking if it is equal with ==, using === is a stricter way

// console.log(5 !== 5); // is not equal

// console.log(5 === 5 && 6 > 3); // && means end, both conditions need to be performed
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

// console.log(5 + 5 === 25 || 2 * 2 === 6); //only one condition needs performing

// console.log(!true); // ! is not

// if (5 + 5 === 10) {
//   console.log("Hello");
// }

// if (5 + 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (2 + 2 === 4) {
//   console.log("Hello");
// } else {
//   console.log;
// }
// ("no hello");

// 2 + 2 === 4 ? console.log("1") : console.log("2"); // if first condition true give 1, is second give 2
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// if (5 + 5 === 7) {
//   console.log("5+5===7");
// } else if (2 + 2 === 6) {
//   console.log("2 + 2 === 6");
// } else {
//   console.log("no");
// }

// let leng = "ua";
// if (leng === "ua") {
//   console.log("Monday");
// } else if (leng === "em") {
//   console.log("Tuesday");
// } else {
//   console.log("Reset");
// }

//switch same function as if else but cleaner to write
// let num = 0;
// switch (num) {
//   case 0:
//     console.log(0);
//     console.log(1);
//     break;

//   case 10:
//     console.log(10);
//     break;
// }

// let cost;
// const sub = "free";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;

//   default:
//     console.log("Invalid");
// }
// console.log(cost);

// const min = prompt("Enter minutes");
// if (min >= 0 && min <= 14) {
//   console.log("Morning");
// } else if (min >= 15 && min <= 29) {
//   console.log("afternoon");
// } else if (min >= 30 && min <= 44) {
//   console.log("Evening");
// } else if (min >= 45 && min <= 59) {
//   console.log("Night");
// }

// const value = prompt("Enter product name").toLocaleLowerCase();
// let cost;
// switch (value) {
//   case "apple":
//     cost = 10;
//     break;
//   case "pear":
//     cost = 15;
//     break;
//   case "banana":
//     cost = 12;
//     break;
//   case "watermelon":
//     cost = 20;
//     break;
//   default:
//     alert(`${value} is out of stock`); // needs backtick instead of quotes
// }
// alert(`${value} cost ${cost} pounds`);

//Lesson 3

// let a = 0;
// while (a < 5) {
//   console.log("a", a);
//   a++; // or use a = a + 1, otherwise, browser buffers
// }

// let a = 3;
// while (a) {
//   console.log("a", a);
//   a--;
// }

// sorter version of the same code
// let a = 3;
// while (a) console.log(a--);

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

// for (let a = 0; a < 3; a++) {
//   console.log(a);
// }
/*for needs to have 3 conditions in the(): declare a variable; 
second condition needs to be a true or false one; 
third what we want the action to be. First condition does not 
necessarly need need to be perform if it has been declared earlier
but ; should always be used in the equation*/

// let sum = 0;
// while (true) {
//   let value = +prompt("Enter number");
//   if (!value) break;
//   sum += value;
// }
// console.log("Sum", sum);

// for (let i = 0; 1 < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

//Arreys

// let arr = ["Apple", "Orange"];
// console.log(arr[1]);
// arr[2] = "Lemon";
// arr[3] = "Plum";
// console.log(arr[2]);
// console.log(arr.length);
// arr2 = [1, "hello", { key: "Ornage" }];
// console.log(arr2);
// arr.push("Tomato");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("Tomato");
// console.log(arr);

// arr = ["tomato"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }
// for (let key in arr) {
//   console.log(arr[key]);
// }
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1]);

// let a = 5;
// let b = a;
// console.log(a);
// a = 10;
// console.log(a);
// console.log(b); // b not updated

// let arr = [1, 2, 3];
// let arr2 = arr;
// arr.push(4);
// console.log(arr); // arr updated

// let arr = ["a", "b", "c", "d", "e"];
// delete arr[2];
// console.log(arr); // did not delete the space that was taken by the letter, do not use this method to delete arreys
// arr.splice(2, 1);
// console.log(arr);
// console.log(arr.slice(1, 3));
// let a = [1, 2, 3];
// arr.concat(a); // concat used to combine arreys, combinig like a string does not work.
// console.log(arr);
// console.log(arr.indexOf("c", 1));
// console.log(arr.includes("c"));
// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Orange" },
//   { id: 2, name: "Pear" },
//   { id: 3, name: "Banana" },
// ];
// console.log(fruits.find((item) => item.id === 2));
// console.log(fruits.filter((item) => item.id < 2));
// let result = fruits.map((item) => item.name.length);
// console.log(result);

// let names = "Olga, Julia, Anne";
// let arr = names.split(", ");
// console.log(arr); // turn string into arrey
// let newString = arr.join(" +");
// console.log(newString); // turn from arrey to string

// let arr1 = [123, 45, 30];
// let sum = arr1.reduce((sum, item) => sum + item) / arr1.length;
// console.log(sum); // (123 + 45 + 30) / 3 = 66

//Lesson 24 Functions

/*function showMessage(name,city){
    console.log("Hello, my name is " + name + " I am from " + city);
}
showMessage("Julia", "London");
showMessage("Olga", "Kyiv");*/

/*const userName = "Julia";
const sayHi = function(){
    let message = "Hello, my name is Julia"
    console.log(message + userName);
}
sayHi();*/

/*function sum(a, b){
    let c = a + b;
    return c;
}
let result = sum(7, 8);
console.log(result);*/

/*const testFunc = function(a, b){
    console.log("a :", a);
    console.log("b :", b);
    
    return;
};
testFunc(5, 8);*/ //after return function does not get executed

/*const a = function(){
    console.log("function a");
};

const b = function(){
    console.log("fucntion b");
};

const c = function(){
    console.log("fucntion c");
};
a();*/ // functions get executed in top to bottom order

// Arguments
/*const addName = function(){
    const arg = Array.from(arguments);
    console.log(arguments);
    console.log(arg);
}
addName(1, 3, 5);*/

/*const addName = function(...arg){
    console.log(arg);
}
addName(1, 3, 5);*/

// Callback

/*function ask(question, yes, no){
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk(){
    console.log("You said ok");
}
 function showCancel(){
     console.log("You said no");
 }
 
 ask("Yes or no?", showOk, showCancel);*/

// High order functions

/*const hello = function(name){
    console.log(`Hello, ${name}`);
};

hello("Ann");*/

/*const hello = function(name){
    console.log(`Hello, ${name}`);
};
const searchName = function(callback){
    const name = "Ivan";
    callback(name);
}
searchName(hello);*/

/*function checkAge(age){
    if(age>18){
        return console.log("Hello");
    } 
    return console.log("Goodbye");
}
checkAge(22);*/

/*function showFilm(age){
    if(age<21) {
        return
    }
    return console.log("Go to film!")
}
showFilm(23);*/

// Arrow functions
/*const test = (arg)=>{
    console.log(arg);
};
test("hello");*/

/*const showFilm = (age)=>{
    if(age>21){
        return console.log("Hello");
    }
    return console.log("Bye");
};
showFilm(20);*/

/*const a = ()=>{
    console.log("a");
}
const b = ()=>{
    console.log("b");
}
const c = ()=> {
    console.log ("c");
    a();
    b();
}

c();*/ // c executed first

/*console.log(document);

const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => {
  console.log(numberRef.value);
});*/

/*const addNumber = (number) => {
  let sum = Number(number) + 10;
  return console.log(sum);
};
const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => addNumber(numberRef.value));*/

/*function checkAge() {
  const age = prompt("Enter age");
  if (age >= 18) {
    return true;
  } else {
    return confirm("Батьки дозволили?");
  }
}
const result = checkAge();
console.log(result);*/

// Lesson 25

//Closure

/*function creatNewSum (n){
    return function(){
        console.log(10*n);
    };
}
const calc = creatNewSum(5);
calc();*/

/*function creatNewNumber(n){
    return function(num){
        return n + num;
    };
}
const addFive = creatNewNumber(5);
console.log(addFive(10));*/

/*function createUrl(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = createUrl("com");
console.log(comUrl("google"));*/

//This

/*function hello(){
    console.log("hello", this);
}
hello();

const user = {
    name: "Ivan",
    city: "Kyiv",
    sayHello: hello,
};

user.sayHello();*/

/*function abc() {
  console.log("In function");
  console.log(this);
}
abc();

document.querySelector("p").onclick = abc;*/

/*function changeColor() {
  console.log(this);
  this.style.background = "green";
}
document.querySelector("div").onclick = changeColor;*/

/*function changeColor() {
  this.style.background = "green";
}
let user = document.querySelectorAll("div");
user.forEach(function (element) {
  element.onclick = changeColor;
});*/

/*const showList = () => {
  console.log(this);
};
showList();
const list = {
  names: ["Ann", "Olga", "Nata"],
  showList: showList,
};
list.showList();*/
// this cannot be used with =>

/*function hello() {
  console.log(this);
}
const user = {
  name: "Ivan",
  age: 30,
  hello: hello,
};
user.hello();*/

// Bind

/*function hello() {
  console.log(this);
}
const user = {
  name: "Ivan",
  age: 30,
  hello: hello,
  sayHelloWindow: hello.bind(window),
  info: function (city) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`City is ${city}`);
  },
};
user.info();

const Ann = {
  name: "Ann",
  age: 23,
};

const Nata = {
  name: "Nata",
  age: 35,
};

user.info.bind(Ann)("Kyiv");
user.info.bind(Nata, "Odesa")();*/

// Call

/*const userInfo = {
  name: "name",
  age: 89,
  logInfo: function (job) {
    console.group(`${this.name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.groupEnd();
  },
};

const Ivan = {
    name:"Ivan",
    age: 45,
}
userInfo.logInfo.call(Ivan, "developer");*/

// difference between bind and call, bind binds the function,
//call binds it and calls it at the same time.

// Apply

/*const showUserInfo = {
  name: name,
  age: 87,
  logInfo: function (job, city) {
    console.group(`${this.name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.log(`City is : ${city}`);
    console.groupEnd();
  },
};
const Ivan = {
  name: "Ivan",
  age: 45,
};

showUserInfo.logInfo.apply(Ivan, ["developer", "Lviv"]);*/
// when adding a few new conditions (job, city), they need to be put in []

/*const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};

const Bukovel = { hotel: "Bukovel" };
const Tourist = { hotel: "Tourist" };

message.call(Bukovel, "Ivan", "5");
message.call(Tourist, "Ivan", "3");

message.apply(Bukovel, ["Ivan", "5"]);
message.apply(Tourist, ["Ivan", "4"]);

message.bind(Bukovel, "Ivan", "2")();
message.bind(Tourist, "Ivan", "1")();*/

/*const basket = {
  showItems() {
    console.log("In the basket: ", this.items);
  },
};

const women = {
  items: ["Dress", "shoes"],
};

const men = {
  items: ["Suit", "bag"],
};
const child = {
  items: ["Toys", "shorts"],
};

document
  .querySelector("#Wom")
  .addEventListener("click", basket.showItems.bind(women));
document
  .querySelector("#Men")
  .addEventListener("click", basket.showItems.bind(men));
document
  .querySelector("#Child")
  .addEventListener("click", basket.showItems.bind(child));*/
// when using bind in this case, it does not need to be called by ()
//as it gets called by the click on the button

/*const infoCar = {
  name: "BMW",
  model: "M7",
  color: "white",
  showInfo: function () {
    console.log(
      "Car: " + this.name + " model: " + this.model + " color: " + this.color
    );
  },
};

car2 = {
  name: "Opel",
  model: "XXX",
  color: "Yellow",
};

infoCar.showInfo();
infoCar.showInfo.bind(car2)();

infoCar.showInfo.call(car2);
infoCar.showInfo.apply(car2);*/

//Lesson 26

// Procedural programming, used more then object-oriented

/*const sum = 20000;
const month = 12;
const p = 1000;

const credit = (sum, month, p) => {
  return sum + p * month;
};

console.log(credit(sum, month, p));*/

// Object-Oriented Programming

/*const credit = {
  sum: 20000,
  month: 12,
  p: 1000,
  result() {
    return this.sum + this.p * this.month;
  },
};

console.log(credit.result());*/

// Class

/*class Bank {
    static type = "Privat";
    constructor (options){
        this.sum = options.sum;
        this.month = options.month;
        this.p = options.p;
    }
    
    credit(){
        return console.log("HI Privat");
    }
}

const userBank = new Bank({
    sum: 30000,
    month: 5,
    p: 500,
    }); 

userBank.credit();
console.log(Bank.type);

class NewBank extends Bank {
    constructor(options){
        super(options);
        this.card = options.card;
    }
    credit(){
        super.credit();
        return console.log("I am Aval");
    }
}
const aval = new NewBank({
    sum: 30000,
    month: 5,
    p: 500,
    card: true,
});
console.log(aval.credit());*/

// get & set

/*class User {
  constructor(props) {
    this.name = props.name;
  }

  firstName = "";
  lastName = "";
  age = "";
  city = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get name() {
    return `First name: ${this.firstName} last name : ${this.lastName}`;
  }
}
const Kris = new User({
  name: "Kristsina Happy",
});

const Dasha = new User({
  name: "Dasha First",
});
console.log(Kris);
console.log(Dasha);*/

// prototypes

/*const a = {
  x: 1,
  y: 2,
};

const b = Object.create(a);

console.log(b);*/

/*const Manager = function(name, discount){
    this.name = name;
    this.discount = discount;
};

const ann = new Manager("Anna", 5);
const ivan = new Manager("Ivan", 10);

Manager.prototype. increaseDiscount = function(){
    this.discount +=1;
};

console.log(ann.discount);
ann.increaseDiscount();
console.log(ann.discount);

console.dir(Manager);*/

/*class CoffeeMachine {
    _water = 0;
    #waterLimit = 500;
    
    constructor(power){
        this.power = power;
    }
    set waterAmount(value){
        if (value<0){
            value = 0;
        }
        this._water= value;
    }
}

let coffeeMachine = new CoffeeMachine(100);

console.log(coffeeMachine);
coffeeMachine.waterAmount = -20;
console.log(coffeeMachine);
coffeeMachine.waterAmount = 20;
console.log(coffeeMachine);*/
