function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    onWinClose ? $.__views.index.addEventListener("close", onWinClose) : __defers["$.__views.index!close!onWinClose"] = true;
    $.__views.pauseResumeButton = Ti.UI.createButton({
        title: "Start/Stop",
        id: "pauseResumeButton"
    });
    $.__views.index.add($.__views.pauseResumeButton);
    playRadio ? $.__views.pauseResumeButton.addEventListener("click", playRadio) : __defers["$.__views.pauseResumeButton!click!playRadio"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: Alloy.CFG.radio_url,
        allowBackground: true
    });
    var playRadio = function() {
        if (audioPlayer.playing || audioPlayer.paused) {
            audioPlayer.stop();
            audioPlayer.release();
        } else audioPlayer.start();
    };
    var onWinClose = function() {
        audioPlayer.stop();
        audioPlayer.release();
    };
    $.index.open();
    __defers["$.__views.index!close!onWinClose"] && $.__views.index.addEventListener("close", onWinClose);
    __defers["$.__views.pauseResumeButton!click!playRadio"] && $.__views.pauseResumeButton.addEventListener("click", playRadio);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;