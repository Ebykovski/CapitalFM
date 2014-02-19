function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {
            backgroundImage: "bg_sm.png",
            layout: "vertical",
            navBarHidden: true,
            orientationModes: [ Titanium.UI.PORTRAIT ]
        });
        Alloy.isTablet && _.extend(o, {
            backgroundImage: "bg_ipad.png"
        });
        _.extend(o, {
            id: "index"
        });
        return o;
    }());
    $.__views.index && $.addTopLevelView($.__views.index);
    onWinClose ? $.__views.index.addEventListener("close", onWinClose) : __defers["$.__views.index!close!onWinClose"] = true;
    $.__views.logo = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {
            image: "big_logo.png",
            top: "40dp"
        });
        Alloy.isTablet && _.extend(o, {
            image: "big_logo_lg.png",
            top: "100dp"
        });
        _.extend(o, {
            id: "logo"
        });
        return o;
    }());
    $.__views.index.add($.__views.logo);
    $.__views.nowplayed = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            top: "10dp",
            left: "10dp",
            right: "10dp",
            font: {
                fontSize: "14dp",
                fontFamily: "Liberation Mono"
            },
            color: "#555",
            height: "20dp",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            shadowOffset: {
                x: 1,
                y: 1
            },
            shadowColor: "#88ffffff"
        });
        Alloy.isTablet && _.extend(o, {
            top: "20dp",
            left: "65dp",
            right: "65dp",
            font: {
                fontSize: "30dp",
                fontFamily: "Liberation Mono"
            },
            height: "60dp"
        });
        _.extend(o, {
            id: "nowplayed"
        });
        return o;
    }());
    $.__views.index.add($.__views.nowplayed);
    $.__views.menu = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: "5dp",
            backgroundImage: "menu_bg.png",
            height: "112dp"
        });
        Alloy.isTablet && _.extend(o, {
            top: "10dp",
            backgroundImage: "menu_bg_lg.png",
            height: "224dp"
        });
        _.extend(o, {
            id: "menu"
        });
        return o;
    }());
    $.__views.index.add($.__views.menu);
    $.__views.playButton = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {
            backgroundImage: "play_button_on.png",
            width: "106dp",
            height: "112dp"
        });
        Alloy.isTablet && _.extend(o, {
            backgroundImage: "play_button_on_lg.png",
            width: "212dp",
            height: "224dp"
        });
        _.extend(o, {
            id: "playButton"
        });
        return o;
    }());
    $.__views.menu.add($.__views.playButton);
    playRadio ? $.__views.playButton.addEventListener("click", playRadio) : __defers["$.__views.playButton!click!playRadio"] = true;
    $.__views.twitterPanel = Ti.UI.createView({
        top: "30dp",
        left: "10dp",
        right: "20dp",
        bottom: "20dp",
        height: Ti.UI.FILL,
        id: "twitterPanel",
        layout: "horizontal"
    });
    $.__views.index.add($.__views.twitterPanel);
    $.__views.twitterLogo = Ti.UI.createImageView({
        image: "tweet.png",
        top: "0",
        width: "40dp",
        id: "twitterLogo"
    });
    $.__views.twitterPanel.add($.__views.twitterLogo);
    var __alloyId0 = {};
    var __alloyId3 = [];
    var __alloyId5 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId6 = [];
            var __alloyId8 = {
                type: "Ti.UI.Label",
                bindId: "message",
                properties: {
                    color: "white",
                    backgroundColor: "transparent",
                    width: Ti.UI.FILL,
                    font: {
                        fontSize: "13dp"
                    },
                    bindId: "message"
                }
            };
            __alloyId6.push(__alloyId8);
            var __alloyId10 = {
                type: "Ti.UI.Label",
                bindId: "date",
                properties: {
                    color: "white",
                    backgroundColor: "transparent",
                    width: Ti.UI.FILL,
                    top: "5dp",
                    font: {
                        fontSize: "12dp"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
                    bindId: "date"
                }
            };
            __alloyId6.push(__alloyId10);
            return __alloyId6;
        }(),
        properties: {
            backgroundColor: "transparent",
            layout: "vertical",
            height: Ti.UI.SIZE,
            left: "10dp",
            right: "10dp",
            top: "10dp"
        }
    };
    __alloyId3.push(__alloyId5);
    var __alloyId2 = {
        properties: {
            backgroundColor: "transparent",
            height: Ti.UI.SIZE,
            rigth: "10dp",
            left: "10dp",
            name: "template"
        },
        childTemplates: __alloyId3
    };
    __alloyId0["template"] = __alloyId2;
    var __alloyId13 = [];
    $.__views.__alloyId14 = {
        message: {
            text: "Загрузка твитов..."
        },
        properties: {
            id: "__alloyId14"
        }
    };
    __alloyId13.push($.__views.__alloyId14);
    $.__views.__alloyId11 = Ti.UI.createListSection({
        id: "__alloyId11"
    });
    $.__views.__alloyId11.items = __alloyId13;
    var __alloyId15 = [];
    __alloyId15.push($.__views.__alloyId11);
    $.__views.twitterMessages = Ti.UI.createListView({
        backgroundColor: "#33ffffff",
        borderRadius: "10dp",
        separatorColor: "transparent",
        left: "10dp",
        sections: __alloyId15,
        templates: __alloyId0,
        id: "twitterMessages",
        defaultItemTemplate: "template"
    });
    $.__views.twitterPanel.add($.__views.twitterMessages);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var mediaControls = require("de.codewave.ti.mediacontrols");
    var mediaControlsView = mediaControls.createView({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    });
    $.index.add(mediaControlsView);
    var nowPlayingInfo = mediaControls.createNowPlayingInfo();
    mediaControlsView.addEventListener("remoteControlPlay", function() {
        Titanium.API.info("Remote control 'play'.");
        audioPlayer.play();
        nowPlayingInfo.setTitle("Test Title");
        nowPlayingInfo.setAlbumTitle("Test Album");
        nowPlayingInfo.setArtist("Test Artist");
        nowPlayingInfo.setAlbumArtist("Test Album Artist");
        nowPlayingInfo.setArtwork("http://www.codewave.de/images/mytunesrss_3d.png");
    });
    mediaControlsView.addEventListener("remoteControlPause", function() {
        Titanium.API.info("Remote control 'pause'.");
        audioPlayer.pause();
    });
    mediaControlsView.addEventListener("remoteControlStop", function() {
        Titanium.API.info("Remote control 'stop'.");
        audioPlayer.stop();
        nowPlayingInfo.clear();
    });
    mediaControlsView.addEventListener("remoteControlTogglePlayPause", function() {
        Titanium.API.info("Remote control 'toggle play/pause'.");
        audioPlayer.playing ? audioPlayer.pause() : audioPlayer.paused && audioPlayer.play();
    });
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: Alloy.CFG.radio_url,
        allowBackground: true,
        bufferSize: 64532
    });
    var statePlays = $.createStyle({
        classes: "statePlays",
        apiName: "Button"
    });
    var stateStop = $.createStyle({
        classes: "stateStop",
        apiName: "Button"
    });
    audioPlayer.addEventListener("change", function(e) {
        e.state == audioPlayer.STATE_PLAYING ? $.playButton.applyProperties(stateStop) : (e.state == audioPlayer.STATE_PAUSED || e.state == audioPlayer.STATE_STOPPED) && $.playButton.applyProperties(statePlays);
    });
    var playRadio = function() {
        audioPlayer.playing || audioPlayer.paused ? audioPlayer.stop() : audioPlayer.start();
    };
    var onWinClose = function() {
        clearInterval(timer);
        clearInterval(timerPlayed);
        audioPlayer.stop();
        "android" === Ti.Platform.osname && audioPlayer.release();
    };
    var newSongTitle = "", scoreboardLength = 35;
    Ti.Network.createHTTPClient({
        onload: function() {
            var result = this.responseXML;
            newSongTitle = result.getElementsByTagName("trackList").item(0).getElementsByTagName("track").item(0).getElementsByTagName("title").item(0).textContent;
            Ti.API.info(newSongTitle);
            var s = "";
            _.times(scoreboardLength, function() {
                s += " ";
            });
            newSongTitle = s + newSongTitle;
            console.log(newSongTitle.length);
        },
        timeout: 1e3
    });
    var getTweets = function() {
        Alloy.Globals.twitterApi.getTweets(7, function(data) {
            if (data) {
                var messages = [];
                for (var i in data) messages.push({
                    message: {
                        text: data[i].text
                    },
                    date: {
                        text: Alloy.Globals.Utils.timeAgo(data[i].created_at)
                    }
                });
                $.twitterMessages.sections[0].setItems(messages);
            }
        });
    };
    setInterval(getTweets, 6e4);
    getTweets();
    $.index.open();
    __defers["$.__views.index!close!onWinClose"] && $.__views.index.addEventListener("close", onWinClose);
    __defers["$.__views.playButton!click!playRadio"] && $.__views.playButton.addEventListener("click", playRadio);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;