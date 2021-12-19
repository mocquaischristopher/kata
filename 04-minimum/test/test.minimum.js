import chai from 'chai';
const assert = chai.assert;
import {min} from '../minimum.js';

describe('#min()', () => {
    it('should nomber function would equal n', () => {
        assert.equal(min(1, 2), '1', 'coerces values to strings');
        assert.equal(min(2, 5), '2', 'coerces values to strings');
    });
    it('Should type would equal string', () => {
        assert.isNumber(min(5, 7), 'number is ok');
    });
    it('should value less', () => {
        assert.isBelow(4, 6, '4 is good');
    });
    it('should indexes 1 as been 1 elements inside', () => {
        assert.operator(min(8 , 9), '>', 7, 'it is ok');
    });
    it('should paramèters would number integer', () => {
        assert.isFinite(min(7, 9), 8, 'number integer of start');
    });
});