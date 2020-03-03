function jumper() {
    this.x = 0; //jumper has an x value of 0 (this is apart of jumper)
    this.y = 0; //jumper has a y value of 0 (this is apart of jumper)
    this.gravity = 0.5; // (half a pixel) the force of gravity
    this.lift = -10; //opposition of gravity when I jump
    this.velocity = 0; //speed of gravity force

    //I am building a function to display on the screen. This is where I put my values of what the jumper will look like.
    this.show = function() {
        fill(255,0,0);
        ellipse(this.x, this.y, 50, 50); //this.x & this.y are global to this function
    }

    //Build a function called UP that will take the initial velocity & modify by opposing gravity
    this.up = function() { //waits for your command
        this.velocity += this.lift; //when up is called, add -10 to velocity
    }

    //This will continuously update the jumper.
    this.update = function() {
        this.velocity += this.gravity; 
        this.y += this.velocity; 
        this.velocity *= 0.9; //air resistance

        //This will prevent the jumper from leaving the ground.
        if (this.y > h) { 
            this.y = h;
            this.velocity = 0;
        }

        //This will prevent the jumper from leaving the ceiling.
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}