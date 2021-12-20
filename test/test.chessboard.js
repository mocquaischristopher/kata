import chai from 'chai';
import {chess} from '../03-chessboard/chessboard.js';

const assert = chai.assert;


describe('#chess()', () => {

    let size = 8;
    let arrayTest = chess(size);

    
    it('should length chessboard would equal size', () => {
        assert.lengthOf(arrayTest, size, 'must to number size multiply size');
    });
    it('should type must be array', () => {
        assert.isArray(arrayTest, 'not an array');
    });
    it('should type must be string', () => {
        assert.typeOf(arrayTest[size - 1], 'string', "it's not a string");
    });
    it('shoud be # in array', () => {
        assert.include(arrayTest[2], '#', 'not #');
    });
    it('Should be a number in param', () => {
        assert.isNumber(arrayTest.length, size, 'number in param');
    });

});