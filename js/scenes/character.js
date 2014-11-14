function characterScene() {
    this.bg = new sprite("mock/char.png");

    this.entities = [
        new stats( 500, 500),
    ]

    this.initItems();
}
characterScene.prototype = new scene();

characterScene.prototype.initItems = function() {
    this.entities.push(new dragable(new item(100,100, new sprite('mock/button.png'))))
}
