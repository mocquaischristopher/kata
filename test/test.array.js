import chai from 'chai';
import {reverseArray, reverseArrayInPlace} from '../08-reversing-array/array.js';

const assert = chai.assert;


describe('#reverseArray()', () => {

    it('Should be a array in param', () => {
        assert.isArray(reverseArray(["A", "B", "C"]), 'is not a array');
    });

});
describe('#reverseArrayInPlace', () => {

    it('Should be a array in param', () => {
        assert.isArray(reverseArrayInPlace([1, 2, 3, 4, 5]), 'is not a array');
    });

});