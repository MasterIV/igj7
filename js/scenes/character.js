function characterScene() {
    this.bg = new sprite("mock/char.png");

    this.entities = [
        new stats( 500, 500),
    ];

	this.dropareas = [

	]

    this.initItems();
}
characterScene.prototype = new scene();

characterScene.prototype.initItems = function() {
    this.entities.push(new dragable(new item(100,100,100,100, new sprite('mock/button.png'))))


    this.dropareas.push(new droparea(300,100,100,100,function () {console.log('drop place 2')},function () {console.log('remove place 2')}));
    this.dropareas.push(new droparea(100,100,100,100,function () {console.log('drop place 1')},function () {console.log('remove place 1')}));
}
