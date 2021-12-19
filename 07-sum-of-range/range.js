function range(first, last) {
    let array = [];
    for (let i = 0; i < last; i++) {
        array[i] = first++;
    }
    return array;
}
range(1, 10);


function ranged(start, end, step) {
    let array = [];
    if (step == undefined) {
        step = 1;
    }
    numLoops = Math.abs((end - start) / step) + 1;
    for (let i = 0; i < numLoops; i++) {
        array.push(start);
        start += step;
    }
    return array;
}
ranged(5, 2, -1);



let array = [];

function range(first, last) {
    for (let i = 0; i < last; i++) {
        array[i] = first++;
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (let i in array) {
        total = total + array[i];
    }
    return total;
}
sum(range(1, 10));