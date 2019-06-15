let computeState = require('./computeState.js');
let expect = require('chai').expect;

describe("test of computeState function", function(){
    it("dead(0)/alive(1) of a cell", function(){
        expect(computeState([1,1,1],[0,0,0],[0,0,0])).to.be.equal(1);
    });
});