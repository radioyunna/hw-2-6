// Задание 1

const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] == 10) break;
    console.log(num[i]);
}

// Задание 2

const num = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));

// Задание 3

let num = [1, 3, 5, 10, 20];
num = num.join(' ');
console.log(num);

// Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [1, 1, 1]; 

    for (let n = 0; n < 3; n++) {
        arr[n].push(1); 
    }
}
console.log(arr);

//Задание 5

let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//Задание 6

let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr.pop());
console.log(arr);

// Задание 7

let arr = [9, 8, 7, 6, 5];
let i = number(promt('Угадай число'));
if (arr.includes(i)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8

const n = 'abcdef';
const i = n.split('').reverse().join('');
console.log(i);

// Задание 9

const arr = [[1, 2, 3,],[4, 5, 6]];
let newArr = arr.flat(Infinity);
console.log(newArr);

// Задание 10
let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);

// Задание 11
let arr = [2, 4, 6];

const newArr = arr.map((n) => n ** 2);
console.log(newArr);

// Задание 12
// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

const getLengthWords = source => source.map(n => n.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Задание 13

function filterPositive(arr) {
	let negativeNumber = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < 0) {
		negativeNumber.push(arr[i]);
	  }
	}
	return negativeNumber;
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56]));
  console.log(filterPositive([-25, 25, 0, -1000, -2]));
