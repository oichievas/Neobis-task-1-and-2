 'use strict' 

//   Second task
  var data = document.querySelector('.data')
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
data.innerHTML = `Current Time : ${hour}  ${prepand} : ${minute} :  ${second}`;

// End second task

// Reverse a number
let reverseNum = document.querySelector('.reverseNum');
let numReverse = +prompt('Введите число для reverse', 12345);
let answerReverse;

function reverse_a_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}
answerReverse = (reverse_a_number(numReverse));

console.log(answerReverse);
reverseNum.innerHTML = answerReverse;


// End Reverse a number

// Factorial
let factorial_answer = document.querySelector('#factorial');
let ask_factorial = +prompt("Число для факториала?", 4);
let emptyBlock;

function factorial(a) { 
  if (a === 0) {
    return 1;
 } return a*factorial(a-1);     
}

emptyBlock = factorial(ask_factorial);
console.log(emptyBlock);
factorial_answer.innerHTML = emptyBlock;

// End Factorial

//  bigger Number
let biggerNum = document.querySelector('.biggerNum');
let firstNum = +prompt('Первое число:', 10);
let secondNum = +prompt('Второе число:', 50);

if (firstNum > secondNum ) {

    biggerNum.innerHTML = `Первое число : ${firstNum} > ${secondNum}`;
} else {
    biggerNum.innerHTML = `Второе число : ${secondNum} > ${firstNum}`;
}

// End  bigger Number


// Colors array
let colorArr = ["Red", "Green", "White", "Black"];
let colorsFirst = document.querySelector('.colorsFirst').innerHTML = colorArr.toString();
let colorsSecond = document.querySelector('.colorsSecond').innerHTML = colorArr.join('+');
console.log(colorArr.toString());
console.log(colorArr.join('+'));

// End Colors array

// UpperCase or no
let checkUpperCase = document.querySelector('.checkUpperCase')
let takeWord = prompt('Введите слово для проверки регистра слова', 'Big')

function startsWithCapital(word){
   if(word.charAt(0) === word.charAt(0).toUpperCase()) {
    checkUpperCase.innerHTML = `С заглавного начинается: ${takeWord}`;
   } else {
    checkUpperCase.innerHTML = `С прописного начинается: ${takeWord}`;
   }
}
startsWithCapital(takeWord);

// End UpperCase or no

// Smile
let smile = document.querySelector('.smile')

let ask_smile = confirm('Хотите увидеть улыбку?')
if (ask_smile) {
    smile.innerHTML = `<pre>
            |  |
          .       .  
          '.......'     
    </pre>`
} else {
    smile.innerHTML = 'Why?'
}

// End Smile

// get the month name from a particular date

var month_name = function(dt){
  let month_list=[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return month_list[dt.getMonth()];
  };
  console.log(month_name(new Date("10/11/2009")));
  console.log(month_name(new Date("11/13/2014")));

// End get the month name from a particular date