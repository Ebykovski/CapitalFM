/*<p><em>
 * The provided MP3 file URL works at the moment of writing this. You can of course replace it with any
 * other URL or include a sample MP3 file in the app itself. After starting the
 * app, audio playback will start. Double click the iPhone's home button to see the task
 * bar. Slide right on it to get the audio controls. Use the play/pause button to
 * send the remote control events. You can also use earphones and other external
 * hardware which has remote controls. When connecting the XCode organizer you can
 * also have a look at the console where the app writes a log line for each remote control
 * event received. This also works when the app is in the background. You have to
 * enable the background audio capability via the "tiapp.xml" file for this to work. The
 * app itself is capable of background audio.
 </em>/</p>
<p>// Background audio
Titanium.Media.audioSessionMode = Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK;</p>
<p>// Window
var win = Titanium.UI.createWindow({backgroundColor:"#CCCCCC"});</p>
<p>// Codewave Media Controls and dummy view
var mediaControls = require("de.codewave.ti.mediacontrols");
var mediaControlsView = mediaControls.createView({left:0,top:0,right:0,bottom:0});
win.add(mediaControlsView);</p>
<p>// Label for audio player state
var label = Titanium.UI.createLabel({text:"state:",top:100,left:20});</p>
<p>// Audio player with sample MP3 URL
var audioPlayer = Titanium.Media.createAudioPlayer({bufferSize:4096,allowBackground:true,url:"http://robtowns.com/music/blind_willie.mp3"});
audioPlayer.addEventListener("change", function(e) {
    label.setText("state: " + e.state);
});</p>
<p>// Codewave Now Playing Info Proxy
var nowPlayingInfo = mediaControls.createNowPlayingInfo();</p>
<p>// Event listeners
mediaControlsView.addEventListener("remoteControlPlay", function() {
    Titanium.API.info("Remote control 'play'.");
    audioPlayer.play();
    nowPlayingInfo.setTitle("Test Title");
    nowPlayingInfo.setAlbumTitle("Test Album");
    nowPlayingInfo.setArtist("Test Artist");
    nowPlayingInfo.setAlbumArtist("Test Album Artist");
    nowPlayingInfo.setArtwork("http://www.codewave.de/images/mytunesrss_3d.png")
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
mediaControlsView.addEventListener("remoteControlPreviousTrack", function() {
    Titanium.API.info("Remote control 'previous track'.");
}); 
mediaControlsView.addEventListener("remoteControlNextTrack", function() {
    Titanium.API.info("Remote control 'next track'.");
}); </p>
<p>// Adding views to the media controls view
mediaControlsView.add(label);</p>
<p>// Opening window
win.open();</p>
<p>// And starting playback
audioPlayer.play();</p>*/