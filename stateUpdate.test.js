let stateUpdate = require('./stateUpdate.js');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

describe("test of world update", function(){
    it("test with a 5*5 world", function(){
        let world = [
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ];
        let next_state = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
        expect(stateUpdate(world)).to.deep.equalInAnyOrder(next_state);

    });

    /*
    it("3*2 padded to 5*4", function(){
        expect(padding([[1,1],[2,2],[3,3]])).to.deep.equalInAnyOrder([[0,0,0,0],[0,1,1,0],[0,2,2,0],[0,3,3,0],[0,0,0,0]]);
    });*/
});