
var world=new Array();
for(var i=0;i<20;i++)
{	world[i]=new Array();
	for(var j=0;j<30;j++)
	{
		world[i][j]=0;
	}
}
console.log(world);
var canvas=document.getElementById("test-canvas");
var start=document.getElementById("start");
var stop=document.getElementById("stop");

var clear=document.getElementById("clear");
var speed=document.getElementById("speed");
var speedValue=speed.value;

var ctx=canvas.getContext('2d');
for(var i=0;i<=300;i++)
{
	for(var j=0;j<=200;j++)
	{
		ctx.fillStyle = 'grey';
		ctx.fillRect(i,j,9,9);
		
		j+=9;
	}
	i+=9;
}
//点击矩阵时矩阵变色
canvas.addEventListener("click", function(event) {
	p=getEventPosition(event);
	var i=parseInt(p.x/10)*10;
	var ii=parseInt(p.x/10);
	var jj=parseInt(p.y/10);
	var j=parseInt(p.y/10)*10;
	ctx.fillStyle="blue";
	ctx.fillRect(i,j,9,9);
	world[jj][ii]=1;
});
//获取鼠标点击canvas的位置
function getEventPosition(ev){  
    var x, y;  
    if (ev.layerX || ev.layerX == 0) {  
        x = ev.layerX;  
        y = ev.layerY;  
    }
    return {x: x, y: y};  
} 
//更新图像
function updateWorld(){
	stateUpdate(world);
	for(var i=0;i<20;i++){
	for(var j=0;j<30;j++)
	{
		ctx.fillStyle = 'grey';
		ctx.fillRect(j*10,i*10,9,9);
		if(world[i][j]==1)
		{
		//console.log(i);
		//console.log(j);
		ctx.fillStyle="blue";
		ctx.fillRect(j*10,i*10,9,9);
		}

	}
}
}
//获取speedValue的值
speed.addEventListener("click",function(){
	speedValue=speed.value;
	clearInterval(timer);
	startAutoPlay();
})
//自动更新
//var set1=setInterval(startAutoPlay,speedValue);
function startAutoPlay(){
	speedValue=speed.value;

	timer=setInterval(function(){
		updateWorld();
		//speedValue=speed.value;
		console.log(speedValue);
		/*var t=setInterval(function(){
			updateWorld();
			if()
			{
				clearInterval(t);
			}
		},speedValue);*/

		//console.log(world);
	},speedValue);
	//clearInterval(timer);
}
//停止更新
function stopAutoPlay(){
	if(timer){
		clearInterval(timer);
	}
}
//点击start按钮后自动更新
function pageLoad(){
	start.onclick=startAutoPlay;
}
//点击暂停后停止
function stopRun(){
	stop.onclick=stopAutoPlay;
}
//stop.addEventListener("click",stopAutoPlay());
//点击清除按钮清除canvas上的图像
clear.addEventListener("click",function(){
	for(var i=0;i<=300;i++)
	{
	for(var j=0;j<=200;j++)
	{
		ctx.fillStyle = 'grey';
		ctx.fillRect(i,j,9,9);
		
		j+=9;
	}
	i+=9;
}
})
//返回更新后的word矩阵
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

}
pageLoad();
stopRun();