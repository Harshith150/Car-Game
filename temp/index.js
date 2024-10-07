const canvas=document.getElementById("myCanvas");
const ctx=canvas.getContext('2d');
canvas.height=window.innerHeight*0.5;
canvas.width=window.innerWidth*0.5;
// Draw a rectangle at the default origin (0, 0)
// ctx.translate(200, 0);
// ctx.fillRect(0, 0, 50, 30);
// ctx.fillRect(200, 0, 50, 30);


// Translate the context 100 pixels to the right and 50 pixels down

// const xmin=100;
// const rangex=500;
// let p=0;
// let sign=1;

// animate();

// function animate()
// {
//     const x=xmin+rangex*Math.tan(p*Math.PI);
//     p+=0.01*sign;
//     if(p>1 || p<0)
//     {
//         sign*=-1;
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.beginPath();
//     ctx.arc(x,100,30,0,2*Math.PI);
//     ctx.strokeStyle="black";
//     ctx.stroke();
//     ctx.fill();
//     requestAnimationFrame(animate)
// }



// let x=200;
// let y=200;
// const minRad=0;
// const maxRad=20;
// let p=0;
// animate();
// function animate()
// {
//     let rad=minRad+maxRad*Math.tanh(p*Math.PI);
//     p+=0.02;
//     if(p>1)
//     {
//         p=0;
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.beginPath();
//     ctx.arc(x,y,rad,0,2*Math.PI);
//     ctx.stroke();
//     requestAnimationFrame(animate);
// }
// canvas.addEventListener("mousemove",function(info){
//     x=info.offsetX;
//     y=info.offsetY;
// })



// animation

// const minX=canvas.width/3;
// const MaxX=100;
// let p=0;

// canvas.addEventListener("mousemove",function(info){
//     p=info.offsetX/canvas.width;
// })

// animate();

// function animate()
// {
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     const x=minX+MaxX*p;
//     ctx.beginPath();
//     ctx.arc(x-25,170,20,0,2*Math.PI);
//     ctx.arc(x+25,170,20,0,2*Math.PI);
//     ctx.fill();
//     requestAnimationFrame(animate);
    
// }


// const A={x:200,y:150};
// const B={x:150,y:250};
// const C={x:50,y:100};
// const D={x:250,y:200};
// function lerp(A,B,t)
// {
//     return A+(B-A)*t;
// }

// function drawPoint(p,label)
// {
//     ctx.beginPath();
//     ctx.fillStyle="white";
//     ctx.arc(p.x,p.y,10,0,Math.PI*2);
//     ctx.fill();
//     ctx.stroke();
//     ctx.fillStyle="black";
//     ctx.textAlign="center";
//     ctx.textBaseline="middle";
//     ctx.font="bold 14px Arial"; 
//     ctx.fillText(label,p.x,p.y);
// }


// let p=0;
// let sign=1;
// animate();
// function animate()
// {
//     const x=p;
//     p+=0.005*sign;
//     if(p>1 || p<0)
//     {
//         sign*=-1;
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.beginPath();
//     ctx.moveTo(A.x,A.y);
//     ctx.lineTo(B.x,B.y);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(C.x,C.y);
//     ctx.lineTo(D.x,D.y);
//     ctx.stroke(); 

//     drawPoint(A,"A");
//     drawPoint(B,"B");
//     drawPoint(C,"C");
//     drawPoint(D,"D");
//     const M={x:lerp(A.x,B.x,x),y:lerp(A.y,B.y,x)}
//     const N={x:lerp(C.x,D.x,x),y:lerp(C.y,D.y,x)}
//     drawPoint(M,"M");
//     drawPoint(N,"N");
//     requestAnimationFrame(animate);
// }