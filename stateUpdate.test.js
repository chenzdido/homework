let stateUpdate = require('./stateUpdate.js');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

describe("test of world update", function(){
    it("test with a non-terminate case", function(){
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

    it("test with a non-terminate case", function(){
        let world = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
        let next_state = [
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ];
        expect(stateUpdate(world)).to.deep.equalInAnyOrder(next_state);
    });

    it("test of cell on edge and corner", function(){
        let world = [
            [1,0,1,0,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [1,0,1,0,1]
        ];
        let next_state = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
        expect(stateUpdate(world)).to.deep.equalInAnyOrder(next_state);
    });

    it("test on a random case", function(){
        let world = [
            [0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,1,1,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ];
        let next_state = [
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,1,0,1,0],
            [0,0,1,1,0],
            [0,0,0,0,0]
        ];
        expect(stateUpdate(world)).to.deep.equalInAnyOrder(next_state);
    });

    it("test on edge", function(){
        let world = [
            [1,0,1,0,0],
            [0,0,0,0,0],
            [1,0,0,0,0],
            [0,0,0,0,0],
            [1,0,0,0,0]
        ];
        let next_state = [
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
        expect(stateUpdate(world)).to.deep.equalInAnyOrder(next_state);
    });
    
});