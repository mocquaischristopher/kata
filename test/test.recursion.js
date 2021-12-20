import chai from 'chai';
const assert = chai.assert;
import {isEven} from '../05-recursion/recursion.js';

describe('#isEven()', () => {
    let number = 50;
    let isEven = isEven(number);
    
    it('should type must be boolean', () => {
        assert.isBoolean(isEven, 'not a boolean');
    });
    // it('should type must be string', () => {
    //     assert.typeOf(, 'string', "it's not a string");
    //     assert.typeOf(fizzbuzz()[25], 'number', "it's not a number");

    // });

    
});