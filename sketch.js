const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;
var launcher;
var ground;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(320,320,50,50);
    box2 = new Box(470,320,50,50);
    box3 = new Box(370,320,50,50);
    box4 = new Box(420,320,50,50);
    box5 = new Box(350,270,50,50);
    box6 = new Box(400,270,50,50);
    box7 = new Box(450,270,50,50);
    box8 = new Box(430,220,50,50);
    box9 = new Box(380,220,50,50);
    box10 = new Box(400,170,50,50);
    log1 = new Log(400,350,220,PI/2);

    box11 = new Box(740,370,50,50);
    box12 = new Box(790,370,50,50);
    box13 = new Box(840,370,50,50);
    box14 = new Box(890,370,50,50);
    box15 = new Box(770,320,50,50);
    box16 = new Box(820,320,50,50);
    box17 = new Box(870,320,50,50);
    box18 = new Box(800,270,50,50);
    box19 = new Box(850,270,50,50);
    box20 = new Box(820,220,50,50);
    log2 = new Log(810,400,240,PI/2);
    bird = new Bird(100,300);

    launcher = new Launcher(bird.body,{x:100,y:300});
    getBackgroundColor()
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    log1.display();
    
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    log2.display();
    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    bird.display();
    launcher.display();
    fill("white")
    text("Press space for second chance",90,100);
    text("Score: "+score,750,40)
    textSize(50);
}

function mouseDragged() {
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
    
function mouseReleased() {
launcher.fly(); 
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(bird.body);
    }
}
async function getBackgroundColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json
    console.log(responseJSON)
}