var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
    loader.loadFile({src:"fla/images/singleAnim_atlas_.json", type:"spritesheet", id:"singleAnim_atlas_"}, true);


    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["singleAnim_atlas_"] = queue.getResult("singleAnim_atlas_");

    exportRoot = new lib.singleAnim();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);



    //hide progress
    $('#loadBody').hide();
    

}

function handleProgress(evt) {
    var loaded = Math.floor(evt.loaded * 100);
    $(".progress").text(loaded + "%");

}