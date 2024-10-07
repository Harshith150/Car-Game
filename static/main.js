const carCanvas=document.getElementById("carCanvas")
carCanvas.width=window.innerWidth*0.2;
const networkCanvas=document.getElementById("networkCanvas")
networkCanvas.width=0;


const carCtx=carCanvas.getContext("2d");
const networkCtx=carCanvas.getContext("2d");
const road=new Road(carCanvas.width/2,carCanvas.width*0.9);
const N=1000;
const cars=genrateCars(N); 
let bestcar=cars[0];
if(localStorage.getItem('bestBrain'))
{
    for(let i=0;i<cars.length;i++)
    {
        cars[i].brain=JSON.parse(localStorage.getItem('bestBrain'));
        if(i!=0)
        {
            NeuralNetwork.mutate(cars[i].brain,0.2);
        }
    }
}
const traffic=[
    new Car(road.getLaneCenter(2),-100,30,50,"NPC",5),
    new Car(road.getLaneCenter(1),-100,30,50,"NPC",5),
    new Car(road.getLaneCenter(0),-350,30,50,"NPC",5),
    new Car(road.getLaneCenter(2),-300,30,50,"NPC",5),
]
// const traffic=[
//     new Car(road.getLaneCenter(2),-100,30,50,"NPC",4),
//     new Car(road.getLaneCenter(1),-100,30,50,"NPC",4),
//     new Car(road.getLaneCenter(0),-300,30,50,"NPC",4),
//     new Car(road.getLaneCenter(1),-300,30,50,"NPC",4),
// ]
animate();
function save()
{
    localStorage.setItem("bestBrain",JSON.stringify(bestcar.brain));
}
function discard()
{
    localStorage.removeItem('bestBrain');
    localStorage.clear();
}
function genrateCars(n)
{
    const cars=[];
    for(let i=0;i<n;i++)
    {
        cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI",7));
    }
    return cars;

}
function animate(time)
{
    carCtx.save();
    for(let i=0;i<traffic.length;i++)
    {
        traffic[i].update(road.borders,[]);
    }
    for(let i=0;i<cars.length;i++)
    {
        cars[i].update(road.borders,traffic);
    }
    const bestcar=cars.find(e=>e.y==Math.min(...cars.map(c=>c.y)));

    carCanvas.height=window.innerHeight
    networkCanvas.height=window.innerHeight
    carCtx.translate(0,-bestcar.y+carCanvas.height*0.7);
    road.draw(carCtx); 
    for(let i=0;i<traffic.length;i++)
    {
        traffic[i].draw(carCtx,'#2E3840');
    }
    carCtx.globalAlpha=0.2;
    for(let i=0;i<cars.length;i++)
    {
        cars[i].draw(carCtx,'blue');
    }
    carCtx.globalAlpha=1;
    bestcar.draw(carCtx,"blue",true);
    carCtx.restore();
    Visualizer.drawNetwork(networkCtx,cars[0].brain);
    requestAnimationFrame(animate);
}