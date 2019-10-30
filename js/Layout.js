class Layout extends THREE.Object3D{

    constructor(){
        super();

        this.objects = [];

        this.origin = new THREE.Object3D();
        this.add(this.origin)

        var geom = new THREE.SphereGeometry(0.3,6,6);
        var material = new THREE.MeshBasicMaterial({color: 0x0000FF});
        var sphere = new THREE.Mesh(geom, material);
        this.origin.add(sphere);

    }

    addElements(){};
    layoutElements(){};
    displayElements(){};
    updateElements(){};
    removeAllElements(){};

 
}