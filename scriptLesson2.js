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
