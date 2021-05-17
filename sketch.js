const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON)
    var datetime = responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour >=04 && hour <=06){
        bg = "sunrise1.png"
    }else if(hour >=06 && hour <=08){
        bg = "sunrise2.jpg"
    }else if(hour >=23 && hour <=00){
        bg = "sunset10.png"
    }else if(hour >=00 && hour <=03){
        bg = "sunset11.jpg"
    }else if(hour >=03 && hour <=06){
        bg = "sunset12.jpg"
    }
    backgroundImg= loadImage(bg);
}
