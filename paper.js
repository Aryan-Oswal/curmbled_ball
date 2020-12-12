class Paper {
    
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density: 100,
            mass: 150
	}
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world , this.body)
    }
    display() {
        push()
        fill('red');
        strokeWeight(0)
        ellipseMode(RADIUS)
        var pos = this.body.position
        translate(pos.x , pos.y)
        ellipse(0, 0, this.radius , this.radius)
        pop()
    }
}