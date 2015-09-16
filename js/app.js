//app function
var app = {
    lockedStory: false,
    currentStoryId: 0,
    resize: function() {
        this._minisite = $('#minisite');
        $(window).resize(this.onResize);
        this.onResize();
    },
    onResize: function() {
        var domwidth = document.documentElement.clientWidth;
        var domheight = document.documentElement.clientHeight;

        var scale = Math.max(domwidth / 320, domheight / 539);
        var width = 320 * scale;
        var height = 539 * scale;
        app._minisite.css({
            scale: [scale, scale],
            left: -(width - domwidth) / 2,
            top: -(height - domheight) / 2
        });
    },

    showResult: function() {

    },
    showMode: function() {
        var $modeSelector = $("#modeSelector");
        $modeSelector.fadeIn(2000);
    },
    //double 
    detectShake: function() {
        //create a new instance of shake.js.
        var myShakeEvent = new Shake({
            threshold: 15
        });

        // start listening to device motion
        myShakeEvent.start();

        // register a shake event
        window.addEventListener('shake', shakeEventDidOccur, false);

        //shake event callback
        function shakeEventDidOccur() {

            //put your own code here etc.
            exportRoot.gotoAndPlay();
        }
    }
};




//creatjs touch event
createjs.Touch.enable(stage, true, false);

//init the canvas animation when it ready.
init();

//make screen viewport center
app.resize();

//global parts
$('.option').swipe({
    tap: function(event, target) {
        console.log(target.id);
        //exportRoot.gotoAndPlay("showResult1");
    }
})
$("#start").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        exportRoot.gotoAndPlay("toSence");
        $("#start").hide();
    },
    threshold: 150
});


//Single Mode
$("#spot").swipe({
    tap: function(event, target) {
        exportRoot.gotoAndPlay();

        //console.log('test');
    },
    threshold: 150
});


$('#swipeHint').swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        exportRoot.gotoAndPlay();
        $('#swipeHint').hide();
    },
    threshold: 200
})

//double Mode A
$("#QRcode").swipe({
    tap: function(event, direction, distance, duration, fingerCount, fingerData) {
        exportRoot.gotoAndPlay();

    }
});

//double Mode B
$("#drawCircle").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        console.log('test');
        exportRoot.gotoAndPlay();

    },
    threshold: 50
});
