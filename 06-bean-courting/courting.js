export function countBs(string) {
    let count = 0;
    let char = ' ';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'B') {
            count++;
        }
    }
    return count;
}
countBs("BaobaB");
countBs('Simplon');

export function countChar(string, B) {
    let count = 0;
    let char = ' ';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === B) {
            count++;
        }
    }
    return count;
}
countChar('BaoBaB', 'B');
countChar('online');
countChar('', "");
