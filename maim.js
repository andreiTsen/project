"use strict";
let number = 5;
console.log(4/0);
console.log("string" * 9);
const person = 'Alex';
let und;
// console.log(und);
// console.log(something);
const obj = {
    name: 'John',
    age: 25,
    isMaried: false
};
console.log(obj.name);
console.log(obj ["age"]);

let arr = ['plun.png', 'orange.jpeg', 6, 'apple.bmp',{}, []];
console.log(arr[1]);
const array = ["a", "b", "c"];
const arrObj = {
    0: "a", 
    1: "b", 
    2: "c", 
    abc: {
        df: [{}, {}], 
        def: {}
    }
};
arrObj['f'] = {};
arrObj.c = '12345';
arrObj['d'] = 777;
const e = "e";
arrObj[e] = 9;
console.log(arrObj[e]);
console.log(array[1]);
console.log(arrObj['d']);
console.log(arrObj ['c']);
const Object = {a: 1, b: 2, c: 3};

// alert('Hello world');
// const result = confirm('Are you here');
// console.log(result);
// const answer = +prompt('Вам есть 18?', '');
// console.log(typeof(answer + 5));

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(++incr);
console.log(--decr);

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);
console.log(2 + 2 * 2 !== 8);