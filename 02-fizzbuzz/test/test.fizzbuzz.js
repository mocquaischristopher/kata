import chai from 'chai';
const assert = chai.assert;
import {fizzbuzz} from '../fizzbuzz.js';

describe('#fizzbuzz()', () => {
    it('should length triangle would equal n', () => {
        assert.equal(fizzbuzz(), 100, 'coerces values to strings');
    });
});