const computeState = require('./computeState.js');
const padding = require('./padding.js')


function stateUpdate(world){

    let num_row = world.length;
    let num_col = world[0].length;

    //padding
    padded_world = padding(world);

    //iterate
    new_world = new Array();
    //let num_row = padded_world.length;
    //let num_col = padded_world[0].length;
    let i,j;
    for(i=1; i<num_row+1; i++)
    {
        for(j=1; j<num_col+1; j++)
        {
            array3 = [
                    [padded_world[i-1][j-1],padded_world[i-1][j],padded_world[i-1][j+1]],
                    [padded_world[i][j-1],padded_world[i][j],padded_world[i][j+1]], 
                    [padded_world[i+1][j-1],padded_world[i+1][j],padded_world[i+1][j+1]]
                    ];
            let new_state = computeState(array3);
            world[i-1][j-1] = new_state;
        }
    }

    return world;

}


module.exports = stateUpdate;