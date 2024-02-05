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

if (4 == 4) {
    console.log("ok!");
} else {
    console.log("error");
};

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("many");
} else {
    console.log("ok!");
};

(num === 50) ? console.log("ok!") : console.log("Error");

const num1 = 50;

switch (num1) {
    case 49:
        console.log("error");
        break;
    case 100:
        console.log("many");
        break;
    case 51:
        console.log("ok!");
        break;
    default:
        console.log("NO!");
        break;
};

const hamburger = 5;
const fries = 2;

if (hamburger && fries){
    console.log("i m not hungry");
};
console.log((hamburger && fries));

const hamburger1 = 3;
const fries1 = 1;
const cola = 0;

console.log(hamburger1 === 3 && cola && fries1);
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "hjhhghjfghjg");

if (hamburger1 === 3 && cola ===1 && fries1) {
    console.log("everybody not hungry");
} else {
    console.log("go to the other restaurant");
};

if (hamburger1 === 3 || cola ===1 || fries1) {
    console.log("everybody not hungry");
} else {
    console.log("go to the other restaurant");
};

console.log(hamburger1 || cola || fries1);

let johnReport, alexReport, samReport, mariaReport = "done";
console.log(johnReport || alexReport || samReport || mariaReport);

const hamburger2 = 3;
const fries2 = 3;
const cola2 = 0;
const nugets = 2;

if (hamburger2 === 3 && cola2 ===2 || fries2 ===3 && nugets) {
    console.log("everybody not hungry");
} else {
    console.log("go to the other restaurant");
};

console.log(hamburger2 === 3 && cola2 ===2 || fries2 ===3 && nugets);
console.log(!0);


let num3 = 50;

// while ( num3 <= 55) {
//     console.log(num3);
//     num3++;
// };

// do {
//     console.log(num3);
//     num3++;
// }
// while (num3 < 55);

for(let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
};

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result2 = "";
const length = 7;

for(i = 1; i < length; i++) {
    for(let j = 0; j < i; j++){
        result2 += "*";
    }
    result2 += "\n";
}
console.log(result2);

first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`third level: ${k}`);
        }
    }
}

function firstTask() {
    // Пишем решение вот тут
    for (i = 5; i <= 10; i++){
    console.log(i);
}
}
firstTask();

function secondTask() {
    // Пишем решение вот тут
    for (i = 20; i > 0; i--){
        if (i == 13){
            break;
        }
        console.log(i);
    }
}
secondTask();

function thirdTask() {
    // Пишем решение вот тут
    for (i = 1; i <= 10; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
    
}
thirdTask();

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask()

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask();


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}
secondTask();

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();

let result1 = "";
const length1 = 7;

for(i = 1; i < length1; i++) {
    for(let j = 0; j < i; j++){
        result1 += "*";
    }
    result1 += "\n";
}
console.log(result1);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) {
        output += "Fizz";
    } if (n % 5 == 0) {
        output += "Buzz";
    }
    console.log(output || n);
  }


let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

let num2 = 20;

function showFirstMessage(text) {
    console.log(text);
    num2 = 10;
};
showFirstMessage("Hello world");
console.log(num2);

function calc(a, b) {
    return (a + b);
};
console.log(calc(4, 3));
console.log(calc(5,6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
};
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc1 = (a, b) => {return a + b};
const calc2 = a => a + b;
const calc3 = (a, b) => {
    console.log('1');
    return a + b
};

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
};

function promotion (result) {
    console.log(result * discount);
};

const res = promotion(convert(500, usdCurr));
promotion(res);
convert(500, usdCurr);
convert(500, eurCurr);

function test () {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if(i == 3) {
            return
        }
    }
    console.log("Done"); //Неп работает так как ретурн закончил работу ф-ции
};

test ();

function doNothing() {}
console.log(doNothing()===undefined);

function sayHello(name) {
    return 'Привет, '+ name;
}
sayHello('John');
console.log(sayHello('John'));

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5));

function getMathResult(base, progresja) {
    if (typeof(progresja) !== 'number' || progresja <= 0) {
        return base;
    }

    let str = '';

    for (let i = 1; i <= progresja; i++) {
        if (i === progresja) {
            str += `${base * i}`;
            // Тут без черточек в конце
        } else {
            str += `${base * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    return str;
};
console.log(getMathResult(10, 5));

const str = "test";
const arr1 = [1, 2, 3];
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(arr1.length);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 3));

const nut = 12.2;
console.log(Math.round(nut));

const test1 = "12.2px";
console.log(parseInt(test1));
console.log(parseFloat(test1));