// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;


var TwitterApi = require('twitterApi');

Alloy.Globals.twitterApi = new TwitterApi({
	key : Alloy.CFG.twitter.api_key,
	secret : Alloy.CFG.twitter.api_secret,
	screen_name : Alloy.CFG.twitter.screen_name
});

Ti.include('date.js');

Alloy.Globals.Utils = require("Utils");
