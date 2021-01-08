class Slingshot {
    constructor(bodyA, pointB){
        //JSON = JavaScript Object Notataion format
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }


    display(){

        //this.sling.bodyA = null (false)
        //this.sling.bodyA = bird.body (true)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}


