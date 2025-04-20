function key(event) {
    var soundw=0;

function sbutton() {
    var sbt=document.getElementById("soundb");
    var soundimg=document.getElementById("soundimg");
    if (soundw==0) {
    
        soundimg.src="soundmute.png";
        soundw=1;
    }
    else if (soundw==1) {
        soundimg.src="soundable.png";
        soundw=0;
    }
}

    if (event.which==13) {
        f();
        if(rw==0){
            rw =setInterval(run,100);
            rs.play();
            bw=setInterval(b,100);   
            sw=setInterval(updateScore,100);
            fw=setInterval(move,100);
        }
    }
    if (event.which==32) {
        f();
        clearInterval(rw);
        rs.pause();
        rw=0;
        if (jw==0) {
            jw=setInterval(jump,100);
            js.play();
            if (sw==0) {
            sw=setInterval(updateScore,100);
            }
            if (fw==0) {
                
            
            fw=setInterval(move,100);
            }
        }
    }
}
var rw=0;
var r=1;

function run() {
    r=r+1;
    if (r==9) {
        r=1;
    }
    var rimg =document.getElementById("boy");
    rimg.src =" Run ("+r+").png";


}

var j=1;
var jw=0;
var mt=400;

var js =new Audio("jump.mp3");
js.loop=true;

function jump() {
    var jimg=  document.getElementById("boy");
    
    if(bw==0){
        bw=setInterval(b,100);
        }
    if (j<=6) {
        
        mt=mt-30;

    }

    if (j>=7) {
        mt=mt+30;
        
    }
    jimg.style.marginTop=mt+"px";

    j=j+1;
    if (j==13) {
        j=1;
        clearInterval(jw);
       
        jw=0;
        rw =setInterval(run,100);
        rs.play();
        if(bw==0){
        bw=setInterval(b,100);
        }
        

    }
    
    
    jimg.src="Jump ("+j+").png";
}

var rs= new Audio("run.mp3");
rs.loop=true;

var js= new Audio("jump.mp3");

var ds= new Audio("dead.mp3");

var fid=0;
var m=700;


function f() {
    for (var y =0; y <15;  y++) {
        var i=document.createElement("img");
        i.src="flame.gif";
        i.className="f";
        i.style.marginLeft=m+"px";
        i.id="a"+y;
        m=m+500;
        document.getElementById("b").appendChild(i);
      
    }
    
   
}

var x=0;
var bw=0;

function b() {

    x=x-20;
    var bs=document.getElementById("b").style.backgroundPositionX=x+"px";
    
     
    
}

var sw=0;
var u=0;

function updateScore() {
    u=u+5;
    document.getElementById("score").innerHTML=u;
    if (u>2000) {
        
        nextl.play();
        document.getElementById("level1cdiv").style.visibility="visible";
                clearInterval(jw);
                
                clearInterval(rw);
                rs.pause();
                clearInterval(bw);
                clearInterval(fw);
                clearInterval(sw);

            
    }
}
function level2() {
    document.getElementById("level1cdiv").style.visibility="hidden";
    document.getElementById("updated").style.visibility="visible";
    
}
function uppbtn() {
   
    document.getElementById("updated").style.visibility="hidden";
    location.reload();
    nextl.pause();

}
var count=0;
var fw=0;
function move() {
    for (var y = 0; y <15; y++) {
        var d=document.getElementById("a"+y);
        var z=getComputedStyle(d);
        var p=parseInt(z.marginLeft);
        p=p-20;
        d.style.marginLeft=p+"px";

        
        
        
        if (p>80 & p<160) {
            if (mt>295) {
               count=count+1;
               if(count>1){
                document.getElementById("health2").style.width="170px";
                if(count>5){
                    document.getElementById("health2").style.width="100px";
                    if(count>8){
                        document.getElementById("health2").style.width="0px";
                clearInterval(jw);
                jw=-1;
                rw-1;
                clearInterval(rw);
                rs.pause();
                clearInterval(bw);
                clearInterval(fw);
                clearInterval(sw);

                setInterval(dead,100);
                ds.play();
                    }
                }
               }
            }
            
        }
    }
    
}
var dw=0;
var d=1;
function dead() {
    var dimg=document.getElementById("boy");
    d=d+1;
    if (d==11) {
        d=10;
        dimg.style.marginTop="400px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=u;
    }
    dimg.src="Dead ("+d+").png";
    
}

function re() {
    location.reload();
}
var homs =new Audio("alexander-nakarada-superepic.mp3");
homs.loop=true;
var nextl =new Audio("Cipher2.mp3");
nextl.loop=true;
var soundw=0;

function sbutton() {
    var sbt=document.getElementById("soundb");
    var soundimg=document.getElementById("soundimg");
    if (soundw==0) {
        homs.pause();
        soundimg.src="soundmute.png";
        soundw=1;
    }
    else if (soundw==1) {
        homs.play();
        soundimg.src="soundable.png";
        soundw=0;
    }
}

function startbutton() {
    var homepage=document.getElementById("hpage");
    homepage.style.visibility="hidden";
    var gamepage=document.getElementById("b");
    gamepage.style.visibility="visible";
    homs.pause();
}

var dm=-400;
setInterval(drgonfly,25);

homs.play();

function drgonfly(){ 
    for (let df = 0; df < 0.5; df++) {
        var flyd=document.getElementById("flydragon");
        flyd.style.marginLeft=dm+"px";
        dm=dm+2;
        
        if (dm>1550) {
            dm=-400;
        }
        
    }
}

function menubutton() {
    var menuin=document.getElementById("menuin");
    menuin.style.visibility="visible";
}

function exitbutton() {
    var menuin=document.getElementById("menuin");
    menuin.style.visibility="hidden";
}

function sbutton1() {
    var sbt=document.getElementById("soundb");
    var soundimg=document.getElementById("soundimg");
     if (soundw==1) {
        homs.play();
        soundimg.src="soundable.png";
        soundw=0;
    }
    document.getElementById("soundmenu").style.visibility="hidden";
}
function sbutton2() {
    var sbt=document.getElementById("soundb");
    var soundimg=document.getElementById("soundimg");
    if (soundw==0) {
        homs.pause();
        soundimg.src="soundmute.png";
        soundw=1;
    }
    document.getElementById("soundmenu").style.visibility="hidden";
}
function soundopen() {
    document.getElementById("soundmenu").style.visibility="visible";
}
function gamepalyexitbutton() {
    document.getElementById("gameplaymenu").style.visibility="hidden";
}
function gamepalyexitbutton2() {
    document.getElementById("gameplaymenu").style.visibility="visible";
}

function homegoing() {
    document.getElementById("hpage").style.visibility="visible";
    document.getElementById("b").style.visibility="hidden";
}