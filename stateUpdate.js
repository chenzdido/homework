function computeState(arr)
{
    //count
    var count = 0;
    var state = 0;
    for(var a=0; a<=2;a++)
    {
        for(var b=0;b<=2;b++)
        {
            if(arr[a][b] == 1)
                count = count + 1;
        }
    }
    count  = count - arr[1][1]

    //determine state
    if(count>3 || count<2)
        state = 0;
    else if (count==3)
        state = 1;
    else if (count==2 && arr[1][1]==1)
        state=1;
    else
        state=0;

    return state;   //0: dead   1: alive
}


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


   /*
   new_world = new Array();
   let i,j;
   for(i=1; i<num_row+1; i++)
   {
       new_world[i] = Array(num_col);
       for(j=1; j<num_col+1; j++)
       {
           array3 = [
                   [padded_world[i-1][j-1],padded_world[i-1][j],padded_world[i-1][j+1]],
                   [padded_world[i][j-1],padded_world[i][j],padded_world[i][j+1]], 
                   [padded_world[i+1][j-1],padded_world[i+1][j],padded_world[i+1][j+1]]
                   ];
           let new_state = computeState(array3);
           new_world[i-1][j-1] = new_state;
       }
   }

   return new_world;
   */
}


module.exports = stateUpdate;