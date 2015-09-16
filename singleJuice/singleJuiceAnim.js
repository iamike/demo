(function(window) {
juiceMix = function() {
	this.initialize();
}
juiceMix._SpriteSheet = new createjs.SpriteSheet({images: ["singleJuice/singleJuiceAnim.png"], frames: [[0,0,640,1078,0,320,539],[640,0,640,1078,0,320,539],[1280,0,640,1078,0,320,539],[1920,0,640,1078,0,320,539],[2560,0,640,1078,0,320,539],[3200,0,640,1078,0,320,539],[0,1078,640,1078,0,320,539],[640,1078,640,1078,0,320,539],[1280,1078,640,1078,0,320,539],[1920,1078,640,1078,0,320,539],[2560,1078,640,1078,0,320,539],[3200,1078,640,1078,0,320,539],[0,2156,640,1078,0,320,539],[640,2156,640,1078,0,320,539],[1280,2156,640,1078,0,320,539],[1920,2156,640,1078,0,320,539],[2560,2156,640,1078,0,320,539],[3200,2156,640,1078,0,320,539],[0,3234,640,1078,0,320,539],[640,3234,640,1078,0,320,539],[1280,3234,640,1078,0,320,539],[1920,3234,640,1078,0,320,539]]});
var juiceMix_p = juiceMix.prototype = new createjs.Sprite();
juiceMix_p.Sprite_initialize = juiceMix_p.initialize;
juiceMix_p.initialize = function() {
	this.Sprite_initialize(juiceMix._SpriteSheet);
	this.paused = false;
}
window.juiceMix = juiceMix;
}(window));

