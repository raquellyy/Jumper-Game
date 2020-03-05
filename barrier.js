function barrier() {

    //change axis of gravity from jumper
    this.width = 50;
    this.height = 200;

    this.x = w - 100; //barrier has an x value of 0 (this is apart of barrier)
    this.y = h - 300; //barrier has a y value of 0 (this is apart of barrier)
    this.gravity = 0.5; // (half a pixel) the force of gravity
    this.lift = -10; //opposition of gravity when I jump
    this.velocity = 0; //speed of gravity force

    //I am building a function to display on the screen. This is where I put my values of what the barrier will look like.
    this.show = function() {
        fill(0,0,255);
        rect(this.x, this.y, this.width, this.height); //this.x & this.y are global to this function
    }

  

    //This will continuously update the barrier.
    this.update = function() {
        this.velocity += this.gravity; 
        this.x -= this.velocity; 
        this.velocity *= 1; //air resistance

        //This will prevent the barrier from leaving the ground.
        if (this.x < 0) { 
            this.x = w + this.width;
            this.y = Math.floor((Math.random() * h) + 10);
            this.velocity = 0;
        }

      
    }
}



