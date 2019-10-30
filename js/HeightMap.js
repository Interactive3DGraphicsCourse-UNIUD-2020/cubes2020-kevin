'use strict'

class HeightMap{

    //Inizializza un HeightMap con un array di valori
    constructor(data, width, height){
        this.data = data;
        this.width = width;
        this.height = height;
    }

    heightForPosition(i, j){
        return this.data[this.width * i + j];
    }


}