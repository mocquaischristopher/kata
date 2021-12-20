import chai from 'chai';
import {triangle} from '../01-looping-a-triangle/triangle.js';

const assert = chai.assert;


describe('#triangle()', () => {

    let n = 7;
    let arrayTest = triangle(n);

    
    it('should length triangle would equal n', () => {
        assert.lengthOf(arrayTest, n, 'must to positif number');
    });
    it('should type must be array', () => {
        assert.isArray(arrayTest, 'not an array');
    });
    it('should type must be string', () => {
        assert.typeOf(arrayTest[n - 1], 'string', "it's not a string");
    });
    it('shoud be # in array', () => {
        assert.include(arrayTest, '#', 'not #');
    });
    it('Should be a number in param', () => {
        assert.isNumber(n, 7, 'number in param');
    });

});
