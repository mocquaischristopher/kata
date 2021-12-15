function range(first, last) {
    let array = [];
    for (let i = 0; i < last; i++) {
        array[i] = first++;
    }
    return array;
}
range(1, 10);


function ranges(first, last) {
    let array = [];
    array.length = last;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        array[i] = first++;
        i++;
    }
    console.log(array);
}
ranges(1, 10);

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

function (sum(range(first, last))) {
    let arrayTotal = 0;
    
}