"use strict";

export function triangle(n) {
    let diez = '';
    let array = [];

    for (let i = 0; i < n; ++i) {
        array.push((diez += '#'));
    }
    return array;
}
triangle(7);