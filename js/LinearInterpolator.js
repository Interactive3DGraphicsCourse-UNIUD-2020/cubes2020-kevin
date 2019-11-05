'use strict'

//Linearly interpolates between values over time
class LinearInterpolator extends Interpolator{

    //Domain of the interpolation in seconds
    //animationStart = value1
    //animationEnd = value2
    constructor(animationStart, animationEnd){
        super();

        this.animationStart = animationStart*1000;
        this.animationEnd = animationEnd*1000;
    }

    //Value interpolated linearly between value1 and value2 at time
    between(value1, value2, time){
        var factor = (time-this.animationStart)/(this.animationEnd-this.animationStart);
        if(factor < 0 || time < this.animationStart) return value1;
        if(factor > 1 || time > this.animationEnd) return value2;

        var value = factor*value2 + (1-factor)*value1;	
        return value;
    }

}