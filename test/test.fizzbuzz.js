import chai from 'chai';
const assert = chai.assert;
import {fizzbuzz} from '../02-fizzbuzz/fizzbuzz.js';

describe('#fizzbuzz()', () => {
    it('should length array fizzbuzz would equal 100', () => {
        assert.lengthOf(fizzbuzz(), 100, 'array equal 100');
    });
    it('should type must be array', () => {
        assert.isArray(fizzbuzz(), 'not an array');
    });
    it('should type must be string', () => {
        assert.typeOf(fizzbuzz()[24], 'string', "it's not a string");
        assert.typeOf(fizzbuzz()[25], 'number', "it's not a number");

    });
    it('shoud be FizzBuzz in array', () => {
        assert.include(fizzbuzz(), 'FizzBuzz', 'not fizz or buzz or number');
    });
    
});