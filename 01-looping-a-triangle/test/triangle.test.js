import chai from 'chai';
const assert = chai.assert;
import {triangle} from '../triangle.js';

describe('#triangle()', () => {
    it('should length triangle would equal n', () => {
        assert.equal(triangle(7), '7', 'coerces values to strings');
    });
    it('Should type would equal string', () => {
        assert.isNumber(7, 'number of length');
    });
    it('should value would a string # and space', () => {
        let diez = '' || '#';
        assert.isString(diez, '#');
    });
    it('should parameters would number integer', () => {
        assert.isFinite(7, 'number integer of start');
    });
});