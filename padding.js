function padding(world)
{
    let num_row = world.length;
    let num_col = world[0].length;
    padded_world = new Array();

    let i,j;
    for(i=0; i<num_row+2; i++)
    {
        padded_world[i] = Array(num_col+2);
        for(j=0; j<num_col+2; j++)
        {
            if (i==0 || j==0 || i==num_row+1 || j==num_col+1)
                padded_world[i][j] = 0;
            else
                padded_world[i][j] = world[i-1][j-1];
        }
    }

    return padded_world;
}

module.exports = padding;
    