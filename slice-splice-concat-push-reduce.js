// var numbers = [12, 14, 16, 17, 19, 20]
// var result = numbers.slice(1, 3)
// console.log(result)

var numbers = [12, 14, 16, 17, 19, 20, 7, 8, 9]
var splice = numbers.splice(1, 4, 188, 666, 888, 3333) // start, koita katbo, kata jaigai baki gulu dukbe
console.log('splice', splice);

// var numbers1 = [12, 14, 16, 17, 19, 20];
// var numbers2 = [5, 7, 9, 7];
// var numbers3 = [12, 3, 6];
// var result = numbers1.concat(numbers2, numbers3);
// console.log(result);


// var numbers = [12, 14, 16, 20];
// numbers.push(6);
// console.log(numbers);

// var numbers = [12, 14, 16, 20];
// var result = numbers.push(17, 19, 20, 6);
// console.log(result);

var numbers = [12, 14, 16, 20];
var sum = numbers.reduce((prevValue, currtValue, currtIndex, arr) => {
    return prevValue + currtValue
}, 0);

console.log(sum)

// React ema john simple cart.js
 // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);