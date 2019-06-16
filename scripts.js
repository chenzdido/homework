const computeState = require('./computeState.js');
const padding = require('./padding.js')
const stateUpdate = require('./stateUpdate.js')


//初始化world
var world=new Array();
for(var i=0;i<20;i++)
{	world[i]=new Array();
	for(var j=0;j<30;j++)
	{
		world[i][j]=0;
	}
}

var canvas=document.getElementById("test-canvas");
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var clear=document.getElementById("clear");
var speed=document.getElementById("speed");
var speedValue=speed.value;
var pause=false;
//初始化矩阵
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
    if (!pause)
	    startAutoPlay();
})

//自动更新
function startAutoPlay(){
	speedValue=speed.value;

	timer=setInterval(function(){
		updateWorld();
	},speedValue);
    pause = false;
}

//停止更新
function stopAutoPlay(){
	if(timer){
		clearInterval(timer);
    }
    pause = true;
}

//点击start按钮后自动更新
function pageLoad(){
    start.onclick=startAutoPlay;
}

//点击暂停后停止
function stopRun(){
    stop.onclick=stopAutoPlay;
}

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
    //clear world
    for(var i=0;i<20;i++)
    {	    
        world[i]=new Array();
        for(var j=0;j<30;j++)
        {
            world[i][j]=0;
        }
    }
})


pageLoad();
stopRun();