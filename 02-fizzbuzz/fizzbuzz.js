"use strict";

export function fizzbuzz() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.splice(i, i, 'FizzBuzz');
            // console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            arr.splice(i, i, 'Fizz');
            // console.log('Fizz');
        } else if (i % 5 == 0) {
            arr.splice(i, i, 'Buzz');
            // console.log('Buzz');
        } else {
            arr.splice(i, i, i);
        }
    }
    return arr;
}
fizzbuzz();