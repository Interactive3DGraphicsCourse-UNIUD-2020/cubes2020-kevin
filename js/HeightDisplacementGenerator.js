'use strict'

//Generates height displacement using an instance of HeightMap
class HeightDisplacementGenerator extends Generator{

    constructor(heightMap){
        super();
        this.heightMap = heightMap;
    }

    //Returns y displacement for the position (i,j) on the heightmap
    displacementFor(i, j){
        return this.heightMap.heightForPosition(i,j);
    }

}