var mediaControls = require("de.codewave.ti.mediacontrols");
var mediaControlsView = mediaControls.createView({
	left : 0,
	top : 0,
	right : 0,
	bottom : 0
});
$.index.add(mediaControlsView);

var nowPlayingInfo = mediaControls.createNowPlayingInfo();
// Event listeners
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
	if (audioPlayer.playing) {
		audioPlayer.pause();
	} else if (audioPlayer.paused) {
		audioPlayer.play();
	}
});

var audioPlayer = Ti.Media.createAudioPlayer({
	url : Alloy.CFG.radio_url,
	allowBackground : true,
	bufferSize : 64532
});

// dynamic TSS styles
var statePlays = $.createStyle({
	classes : "statePlays",
	apiName : 'Button'
});

var stateStop = $.createStyle({
	classes : "stateStop",
	apiName : 'Button'
});

audioPlayer.addEventListener('change', function(e) {
	if (e.state == audioPlayer.STATE_PLAYING) {
		$.playButton.applyProperties(stateStop);
	} else if (e.state == audioPlayer.STATE_PAUSED || e.state == audioPlayer.STATE_STOPPED) {
		$.playButton.applyProperties(statePlays);
	}
});

var playRadio = function() {
	// When paused, playing returns false.
	// If both are false, playback is stopped.
	if (audioPlayer.playing || audioPlayer.paused) {
		audioPlayer.stop();

		if (Ti.Platform.name === 'android') {
			audioPlayer.release();
		}
	} else {
		audioPlayer.start();
	}
};

var onWinClose = function() {
	clearInterval(timer);
	clearInterval(timerPlayed);

	audioPlayer.stop();
	if (Ti.Platform.osname === 'android') {
		audioPlayer.release();
	}
};

var songTitle = '', newSongTitle = '', position = 0, scoreboardLength = 35;

var client = Ti.Network.createHTTPClient({
	onload : function(e) {
		var result = this.responseXML;

		newSongTitle = result.getElementsByTagName('trackList').item(0).getElementsByTagName('track').item(0).getElementsByTagName('title').item(0).textContent;
		Ti.API.info(newSongTitle);

		var s = '';
		_.times(scoreboardLength, function() {
			s += " ";
		});
		newSongTitle = s + newSongTitle;
		console.log(newSongTitle.length);

	},
	timeout : 1000
});

// var timer = setInterval(function() {
	// if (audioPlayer.playing || audioPlayer.paused) {
		// client.open("GET", Alloy.CFG.now_played_url);
		// client.send();
	// }
// }, 1000);

// var timerPlayed = setInterval(function() {
	// // if (songTitle == "" && newSongTitle == ""){
	// // // $.nowplayed.backgroundColor = "#FFFFFFFF";
	// // return;
	// // }
// 
	// if (songTitle !== newSongTitle || position > newSongTitle.length) {
		// position = 0;
	// }
// 
	// $.nowplayed.text = newSongTitle.substr(position, scoreboardLength).toUpperCase();
	// console.log($.nowplayed.text);
// 
	// position++;
	// songTitle = newSongTitle;
// }, 200);

var getTweets = function(){
	Alloy.Globals.twitterApi.getTweets(7, function(data){
		if(data){
			var messages = [];
			for(var i in data){
				messages.push({
					message : { 
						text : data[i].text 
					},
					date : { 
						text : Alloy.Globals.Utils.timeAgo(data[i].created_at)
					}
				});
			}
			
			$.twitterMessages.sections[0].setItems(messages);
		}
	});
};

var tweetTimer = setInterval(getTweets, 60000);
getTweets();

$.index.open();
