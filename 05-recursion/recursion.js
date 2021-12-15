function isEven(number) {
    if (number < 0) {
        // number = Math.abs(number);
        number *= -1;
    }

    while (number > 1 && number > 0) {
        number -= 2;
    }

    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    }
}
isEven(50);
isEven(75);
isEven(0);
isEven(-1);