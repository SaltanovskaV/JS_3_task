/*1*/

let counter = (function () {
  let count = 0;
  return function(n) {
    if (n !== undefined) 
      count = n;
    return count++;
  }
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(50));
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(5));
console.log(counter());

/*2*/
let counting = (function () {
  let count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());

console.log(counting.value()); 
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); 
counting.decrement();
counting.decrement();
console.log(counting.value()); 
console.log(counting.value(70)); 
counting.decrement();
console.log(counting.value()); 
console.log(counting.value(40)); 
counting.increment();
console.log(counting.value()); 

/*3*/
let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);
    return x;
  };
  return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint));  
console.log(myPow(2, 3, myPrint)); 

/*4-6*/

let currentYear = new Date().getFullYear();
let car = {
  engine: 3000,
  model: 'Camry',
  name: 'Toyota',
  year: 2020,
  info: fullInfo,
  get used() {
    return this.year !== currentYear ? 'used' : 'new';
  },
  set used(value) {
  /*this.year = value < currentYear ? 'used': value > currentYear ? 'new' : value;*/
    if (value === 'new' && this.year < currentYear) this.year = currentYear;
  }
};
function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
car.used = 'used';

/*7*/
let list = [370, 0, 450, 78, 96, 29, 743, 0, 1050];
/*let myMax = (arg) => Math.max.apply(Math, arg);
let myMin = (arg) => Math.min.apply(Math, arg); */
function myMax(arg) {
  let max = Math.max.apply(Math, arg);
  return max;
}
function myMin(arg) {
  let min = Math.min.apply(Math, arg);
  return min;
}
console.log(myMax(list));
console.log(myMin(list));

/*8*/
function myMul(a, b) {
  return a * b;
}
let myDouble = myMul.bind(null, 2); 

console.log(myDouble(10)); 
console.log(myDouble(15)); 

let myTriple = myMul.bind(null, 3); 

console.log(myTriple(20)); 
console.log(myTriple(25)); 

/*9*/

let num = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8 , 9, 10];

let myUniq = (array) => {
  let set = new Set();
  array.forEach((val) => {
    set.add(val);
  });
  return set;
};
console.log(myUniq(num));


