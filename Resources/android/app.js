var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

var TwitterApi = require("twitterApi");

Alloy.Globals.twitterApi = new TwitterApi({
    key: Alloy.CFG.twitter.api_key,
    secret: Alloy.CFG.twitter.api_secret,
    screen_name: Alloy.CFG.twitter.screen_name
});

Ti.include("date.js");

Alloy.Globals.Utils = require("Utils");

Alloy.createController("index");