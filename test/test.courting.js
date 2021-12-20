import chai from 'chai';
import {countBs, countChar} from '../06-bean-courting/courting.js';

const assert = chai.assert;


describe('#countBs()', () => {

    
    it('should length chessboard would equal size', () => {
        assert.isNumber(countBs('BaobaB'), 'must be a string');
    });


});

describe('#countChar()', () => {


    
    it('should length chessboard would equal size', () => {
        assert.isNumber(countChar('BaoBab', 'B'), 'must be a number');
    });


});