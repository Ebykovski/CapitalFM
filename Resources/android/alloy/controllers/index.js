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
            backgroundImage: "/images/bg_sm.png",
            layout: "vertical",
            navBarHidden: true,
            orientationModes: [ Titanium.UI.PORTRAIT ]
        });
        Alloy.isTablet && _.extend(o, {
            backgroundImage: "/images/bg_ipad.png"
        });
        _.extend(o, {
            exitOnClose: "true",
            id: "index"
        });
        return o;
    }());
    $.__views.index && $.addTopLevelView($.__views.index);
    onWinClose ? $.__views.index.addEventListener("close", onWinClose) : __defers["$.__views.index!close!onWinClose"] = true;
    $.__views.logo = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {
            image: "/images/big_logo.png",
            top: "40dp"
        });
        Alloy.isTablet && _.extend(o, {
            image: "/images/big_logo_lg.png",
            top: "100dp"
        });
        _.extend(o, {
            width: "275dp",
            height: "65dp",
            image: "/images/big_logo_lg.png"
        });
        Alloy.isTablet && _.extend(o, {
            top: "80dp",
            width: "550dp",
            height: "130dp",
            image: "/images/big_logo_lg@2x.png"
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
            width: Ti.UI.FILL,
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            font: {
                fontSize: "14dp",
                fontFamily: "Liberation Mono"
            },
            color: "#555",
            height: "20dp",
            shadowOffset: {
                x: 1,
                y: 1
            },
            shadowColor: "#88ffffff"
        });
        Alloy.isTablet && _.extend(o, {
            top: "20dp",
            font: {
                fontSize: "30dp",
                fontFamily: "Liberation Mono"
            },
            height: "60dp"
        });
        _.extend(o, {
            height: "14dp",
            font: {
                fontSize: "13dp",
                fontFamily: "LiberationMono-Regular"
            }
        });
        Alloy.isTablet && _.extend(o, {
            height: "30dp",
            font: {
                fontSize: "24dp",
                fontFamily: "LiberationMono-Regular"
            }
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
            backgroundImage: "/images/menu_bg.png",
            height: "112dp"
        });
        Alloy.isTablet && _.extend(o, {
            top: "10dp",
            backgroundImage: "/images/menu_bg_lg.png",
            height: "224dp"
        });
        _.extend(o, {
            backgroundImage: "/images/menu_bg_lg.png",
            id: "menu"
        });
        return o;
    }());
    $.__views.index.add($.__views.menu);
    $.__views.playButton = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {
            backgroundImage: "/images/play_button_on.png",
            width: "106dp",
            height: "112dp"
        });
        Alloy.isTablet && _.extend(o, {
            backgroundImage: "/images/play_button_on_lg.png",
            width: "212dp",
            height: "224dp"
        });
        _.extend(o, {
            backgroundImage: "/images/play_button_on_lg.png",
            id: "playButton"
        });
        return o;
    }());
    $.__views.menu.add($.__views.playButton);
    playRadio ? $.__views.playButton.addEventListener("click", playRadio) : __defers["$.__views.playButton!click!playRadio"] = true;
    $.__views.activityIndicator = Ti.UI.createActivityIndicator(function() {
        var o = {};
        _.extend(o, {
            style: Titanium.UI.ActivityIndicatorStyle.BIG,
            top: "15dp"
        });
        Alloy.isTablet && _.extend(o, {
            top: "67dp"
        });
        _.extend(o, {
            id: "activityIndicator"
        });
        return o;
    }());
    $.__views.menu.add($.__views.activityIndicator);
    $.__views.twitterPanel = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal",
            top: "30dp",
            left: "10dp",
            right: "10dp",
            height: Ti.UI.FILL
        });
        Alloy.isTablet && _.extend(o, {
            left: "10dp",
            right: "20dp"
        });
        _.extend(o, {
            id: "twitterPanel"
        });
        return o;
    }());
    $.__views.index.add($.__views.twitterPanel);
    $.__views.twitterLogo = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {
            image: "/images/tweet.png",
            top: "0",
            width: "40dp"
        });
        Alloy.isTablet && _.extend(o, {
            image: "/images/tweet_lg.png",
            top: "0",
            width: "80dp"
        });
        _.extend(o, {
            image: "/images/tweet_lg.png",
            id: "twitterLogo"
        });
        return o;
    }());
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
                properties: function() {
                    var o = {};
                    _.extend(o, {
                        color: "white",
                        backgroundColor: "transparent",
                        width: Ti.UI.FILL,
                        font: {
                            fontSize: "13dp"
                        }
                    });
                    Alloy.isTablet && _.extend(o, {
                        font: {
                            fontSize: "18dp"
                        }
                    });
                    _.extend(o, {
                        bindId: "message"
                    });
                    return o;
                }()
            };
            __alloyId6.push(__alloyId8);
            var __alloyId10 = {
                type: "Ti.UI.Label",
                bindId: "date",
                properties: function() {
                    var o = {};
                    _.extend(o, {
                        color: "white",
                        backgroundColor: "transparent",
                        width: Ti.UI.FILL,
                        font: {
                            fontSize: "12dp"
                        },
                        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
                    });
                    Alloy.isTablet && _.extend(o, {
                        font: {
                            fontSize: "15dp"
                        },
                        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
                    });
                    _.extend(o, {
                        bindId: "date"
                    });
                    return o;
                }()
            };
            __alloyId6.push(__alloyId10);
            return __alloyId6;
        }(),
        properties: {
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
    $.__views.twitterMessages = Ti.UI.createListView(function() {
        var o = {};
        _.extend(o, {
            backgroundColor: "#33ffffff",
            borderRadius: "10dp",
            separatorColor: "transparent",
            left: "10dp",
            bottom: "10dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
        Alloy.isTablet && _.extend(o, {
            bottom: "20dp"
        });
        _.extend(o, {
            borderRadius: "10",
            sections: __alloyId15,
            templates: __alloyId0,
            id: "twitterMessages",
            defaultItemTemplate: "template"
        });
        return o;
    }());
    $.__views.twitterPanel.add($.__views.twitterMessages);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var songTitle = "", newSongTitle = "", position = 0, scoreboardLength = 35, timerGetTweets = null, timerGetNowPlaying = null, timerMarquee = null;
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: Alloy.CFG.radio_url,
        allowBackground: true,
        bufferSize: 65535
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
        if (e.state == audioPlayer.STATE_PLAYING) {
            $.playButton.applyProperties(stateStop);
            $.playButton.touchEnabled = true;
            $.activityIndicator.hide();
        } else if (e.state == audioPlayer.STATE_PAUSED || e.state == audioPlayer.STATE_STOPPED) {
            $.playButton.applyProperties(statePlays);
            $.playButton.touchEnabled = true;
            $.activityIndicator.hide();
        }
    });
    var playRadio = function() {
        $.playButton.touchEnabled = false;
        $.activityIndicator.show();
        if (audioPlayer.playing || audioPlayer.paused) {
            audioPlayer.stop();
            audioPlayer.release();
        } else audioPlayer.start();
    };
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var result = this.responseXML;
            newSongTitle = result.getElementsByTagName("trackList").item(0).getElementsByTagName("track").item(0).getElementsByTagName("title").item(0).textContent;
            var s = "";
            _.times(scoreboardLength, function() {
                s += " ";
            });
            newSongTitle = s + newSongTitle;
        },
        timeout: 1e3
    });
    var getTweets = function() {
        Alloy.Globals.twitterApi.getTweets(7, function(data) {
            if (data) {
                var messages = [];
                for (var i in data) {
                    console.log(data[i].created_at);
                    messages.push({
                        message: {
                            text: data[i].text
                        },
                        date: {
                            text: Alloy.Globals.Utils.timeAgo(data[i].created_at)
                        }
                    });
                }
                $.twitterMessages.sections[0].setItems(messages);
            }
        });
    };
    var startTweets = function() {
        timerGetTweets = setInterval(getTweets, 6e4);
    };
    var startNowPlaying = function() {
        timerGetNowPlaying = setInterval(function() {
            if (audioPlayer.playing || audioPlayer.paused) {
                client.open("GET", Alloy.CFG.now_played_url);
                client.send();
            }
        }, 1e3);
    };
    var startMarquee = function() {
        timerMarquee = setInterval(function() {
            (songTitle !== newSongTitle || position > newSongTitle.length) && (position = 0);
            var txt = newSongTitle.substr(position, scoreboardLength).toUpperCase();
            var s = "";
            _.times(scoreboardLength - txt.length, function() {
                s += " ";
            });
            $.nowplayed.text = txt + s;
            position++;
            songTitle = newSongTitle;
        }, 200);
    };
    var onWinClose = function() {
        clearInterval(timerGetNowPlaying);
        clearInterval(timerMarquee);
        clearInterval(timerGetTweets);
        audioPlayer.stop();
        audioPlayer.release();
    };
    $.index.addEventListener("open", function() {
        $.index.activity.addEventListener("pause", function() {
            clearInterval(timerMarquee);
            clearInterval(timerGetTweets);
        });
        $.index.activity.addEventListener("resume", function() {
            startTweets();
            startMarquee();
        });
    });
    startNowPlaying();
    getTweets();
    $.index.open();
    __defers["$.__views.index!close!onWinClose"] && $.__views.index.addEventListener("close", onWinClose);
    __defers["$.__views.playButton!click!playRadio"] && $.__views.playButton.addEventListener("click", playRadio);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;