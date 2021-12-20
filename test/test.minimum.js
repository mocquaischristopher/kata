import chai from 'chai';
const assert = chai.assert;
import {min} from '../04-minimum/minimum.js';

describe('#min()', () => {
    let num1 = 8;
    let num2 = 6;
    let test = min(num1, num2);

    it('Should type would equal string', () => {
        assert.isNumber(test, 'number is ok');
    });
    it('should value less', () => {
        assert.isBelow(4, 6, '4 is good');
    });
    it('should indexes 1 as been 1 elements inside', () => {
        assert.operator(num1, '>', num2, 'it is ok');
    });
    it('should paramèters would number integer', () => {
        assert.isFinite(min(7, 9), 8, 'number integer of start');
    });
});