'use strict'


//Extends Object3D class to repeat 3D objects 
//for a rows*columns grid
class Grid2D extends THREE.Object3D{

    constructor(rows, columns){
        super();
        this.rows = rows;
        this.columns = columns;

        this.objects = new Array(rows);
        for(let row=0; row < rows; row++){
            this.objects[row] = new Array(columns);
        }
        
        for(let i=0; i < this.rows; i++){
            for(let j=0; j< this.columns; j++){
                var origin = new THREE.SphereGeometry(0.3,12,12);
                var material = new THREE.MeshBasicMaterial({color: 0xFF0000});
                var object = new THREE.Mesh(origin, material);
                this.objects[i][j] = object;
            }
        }

        //Grid size is the distance from the leftest element center 
        //to the rightest element center (for the width)
        this.innerGridSize = {
            width: 0,
            height: 0
        }

        this.origin = new THREE.Object3D();
        this.add(this.origin)

        var geom = new THREE.SphereGeometry(0.3,12,12);
        var material = new THREE.MeshBasicMaterial({color: 0x0000FF});
        var sphere = new THREE.Mesh(geom, material);
        this.origin.add(sphere);

    }

    //Computes the inner grid size,
    //the distance from the leftest element center 
    //to the rightest element center (for the width)
    //Call computeInnerGridSize to make sure that the 
    //innerGridSize is initialized
    computeInnerGridSize(){

    }

    //Place all elements in their place on the grid
    //with respect to the origin
    //positionForElement is a function that must accept
    //2 integer parameters, the discrete position (i,j) in the grid,
    //and must return a THREE.Vector3 that represents the position
    //of the final point with respect to the grid origin in the 
    //middle of the grid
    layoutElements(positionForElement){
        for(let i=0; i < this.rows; i++){
            for(let j=0; j< this.columns; j++){
                var object = this.objects[i][j];
                var position = positionForElement(i,j);
                object.position.set(position.x, position.y, position.z);
                this.add(object);
            }
        }
    }

    //Updates all elements in the grid using 
    //the function changesForElement which must take
    //the grid coords (i,j), an Object3D and return 
    //nothing
    updateElements(changesForElement){
        for(let i=0; i < this.rows; i++){
            for(let j=0; j< this.columns; j++){
                var object = this.objects[i][j];
                changesForElement(i, j, object);
            }
        }
    }



}