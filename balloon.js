class Balloon{
    constructor(x,y,width,height){
       var options = {
           density: 0.5
       } 
       this.image = loadImage("pro-C35 images/Hot Air Ballon-02.png")
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,100,100)
    }
}