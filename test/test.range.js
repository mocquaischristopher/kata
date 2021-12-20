import chai from 'chai';
import { it } from 'mocha';
import {range, ranged, sum} from '../07-sum-of-range/range.js';

const assert = chai.assert;


describe('#range()', () => {


    it('should type must be array', () => {
        assert.isArray(range(1, 10), 'not an array');
    });


});

describe('#ranged()', () => {

    let step = 2;
    it('should type must be array', () => {
        assert.isArray(ranged(1, 10, 2), 'not an array');
    });
    it('should step must be have 1 mini', () => {
        assert.operator(step, '>', 0, "step must be more 0");
    });
    it('should step not must be undefined', () => {
        assert.notStrictEqual(step, 'undefined', "step must not be undefined");
    });
    it('should step must be number', () => {
        assert.isNumber(step, 6, "step must be a number");
    });
});
describe('#sum()', () => {

    it('should type must be a number', () => {
        assert.isNumber(sum([1, 2, 3, 4, 5]), 'not an number');
    });


});