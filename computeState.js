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

module.exports = computeState;