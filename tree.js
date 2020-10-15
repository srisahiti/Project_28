class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        pop();
    }
}