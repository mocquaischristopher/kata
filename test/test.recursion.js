import chai from 'chai';
import {isEven} from '../05-recursion/recursion.js';
const assert = chai.assert;

describe('#isEven()', () => {
    let number = 50;
    let even = isEven(number);
    
    it('should type must be boolean', () => {
        assert.isBoolean(even, 'not a boolean');
    });

});