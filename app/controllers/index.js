var songTitle = '', 
	newSongTitle = '', 
	position = 0, 
	scoreboardLength = 35,
	timerGetTweets = null, 
	timerGetNowPlaying = null, 
	timerMarquee = null;

if (OS_IOS) {
	var mediaControls = require("de.codewave.ti.mediacontrols");
	var mediaControlsView = mediaControls.createView({
		left : 0,
		top : 0,
		right : 0,
		bottom : 0
	});
	$.index.add(mediaControlsView);

	var nowPlayingInfo = mediaControls.createNowPlayingInfo();

	mediaControlsView.addEventListener("remoteControlPlay", function() {
		audioPlayer.play();
		nowPlayingInfo.setTitle("CapitalFM");
		nowPlayingInfo.setAlbumTitle("CapitalFM");
		nowPlayingInfo.setArtwork("/images/radio_artwork.png");
	});
	mediaControlsView.addEventListener("remoteControlPause", function() {
		audioPlayer.pause();
	});
	mediaControlsView.addEventListener("remoteControlStop", function() {
		audioPlayer.stop();
		nowPlayingInfo.clear();
	});
	mediaControlsView.addEventListener("remoteControlTogglePlayPause", function() {
		if (audioPlayer.playing) {
			audioPlayer.pause();
		} else if (audioPlayer.paused) {
			audioPlayer.play();
		}
	});
}

var audioPlayer = Ti.Media.createAudioPlayer({
	url : Alloy.CFG.radio_url,
	allowBackground : true,
	bufferSize : 65535
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

var client = Ti.Network.createHTTPClient({
	onload : function(e) {
		var result = this.responseXML;

		newSongTitle = result.getElementsByTagName('trackList').item(0).getElementsByTagName('track').item(0).getElementsByTagName('title').item(0).textContent;

		if (OS_IOS) {
			nowPlayingInfo.setTitle(newSongTitle);
		}

		var s = '';
		_.times(scoreboardLength, function() {
			s += " ";
		});
		newSongTitle = s + newSongTitle;
	},
	timeout : 1000
});

var getTweets = function() {
	Alloy.Globals.twitterApi.getTweets(7, function(data) {
		if (data) {
			var messages = [];
			for (var i in data) {
				// console.log(data[i].created_at);
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

var startTweets = function() {
	timerGetTweets = setInterval(getTweets, 60000);
};

var startNowPlaying = function() {
	timerGetNowPlaying = setInterval(function() {
		if (audioPlayer.playing || audioPlayer.paused) {
			client.open("GET", Alloy.CFG.now_played_url);
			client.send();
		}
	}, 1000);
};

var startMarquee = function() {
	timerMarquee = setInterval(function() {

		if (songTitle !== newSongTitle || position > newSongTitle.length) {
			position = 0;
		}

		var txt = newSongTitle.substr(position, scoreboardLength).toUpperCase();
		var s = '';
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
	if (Ti.Platform.osname === 'android') {
		audioPlayer.release();
	}
};

if (OS_ANDROID) {
	$.index.addEventListener('open', function() {
		$.index.activity.addEventListener('pause', function(e) {
			clearInterval(timerMarquee);
			clearInterval(timerGetTweets);
		});
		$.index.activity.addEventListener('resume', function(e) {
			startTweets();
			startMarquee();
		});
	});
} else {
	Ti.App.addEventListener("pause", function(e) {
		startTweets();
		startMarquee();
	});

	Ti.App.addEventListener("resume", function(e) {
		clearInterval(timerMarquee);
		clearInterval(timerGetTweets);
	});
	
	startTweets();
	startMarquee();
}

startNowPlaying();
getTweets();

$.index.open();
