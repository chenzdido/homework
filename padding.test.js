let padding = require('./padding.js');
let expect = require('chai').expect;
var deepEqual = require('deep-equal');

describe("test of padding of array", function(){
    it("3*3 array padded to 5*5", function(){
        expect(padding([[1,1,1],[2,2,2],[3,3,3]])).to.be.deepEqual([[0,0,0,0,0],[0,1,1,1,0],[0,2,2,2,0],[0,3,3,3,0],[0,0,0,0,0]]);
    });

    /*
    it("3*2 padded to 5*4", function(){
        deepEqual(padding([[1,1],[2,2],[3,3]]), [[0,0,0,0],[0,1,1,0],[0,2,2,0],[0,3,3,0],[0,0,0,0]]);
    });*/
});
