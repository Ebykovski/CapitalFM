var twitterAPI = function(init) {
	init = init || {};

	var key = init.key || null, secret = init.secret || null;

	this.screen_name = init.screen_name || null;

	// this.httpClient = Ti.Network.createHTTPClient();
	//
	// this._get_token(key, secret);

	var Codebird = require("codebird");
	this.codebird = new Codebird();
	this.codebird.setConsumerKey(key, secret);

	// var self = this;
	// this.codebird.__call('oauth2_token', {}, function(reply) {
	// self.codebird.setBearerToken(reply.access_token);
	//
	// self.codebird.__call('statuses/user_timeline', "count=3&screen_name="+self.screen_name, function(reply) {
	// console.log(JSON.stringify(reply));
	// // if( reply.hasOwnProperty('status') && reply.status.hasOwnProperty('text')) {
	// // console.log(reply.status.text);
	// // }
	// }, true);
	// });
};

twitterAPI.prototype.getTweets = function(countTweets, callback) {
	var self = this;
	
	Ti.API.info("Get tweets...");
	
	var bearerToken = Ti.App.Properties.getString('TwitterBearerToken', null);
	if (bearerToken == null) {
		Ti.API.info("We do NOT have a bearer token...");
		this._get_token(function(token) {
			Ti.API.info(token);
			if (token) {
				self.getTweets(countTweets, callback);
			} else {
				Ti.API.info("Already NO token...");
			}
		});
	} else {
		Ti.API.info("We do have a bearer token...");
		self.codebird.setBearerToken(bearerToken);
		self.codebird.__call('statuses/user_timeline', "count=" + countTweets + "&include_rts=1&screen_name=" + self.screen_name, function(reply) {

			callback(reply);

		}, true);
	}
};

twitterAPI.prototype._get_token = function(callback) {
	this.codebird.__call('oauth2_token', {}, function(reply) {
		var bearer_token = false;

		if (reply.hasOwnProperty('access_token')) {
			bearer_token = reply.access_token;
			Ti.App.Properties.setString('TwitterBearerToken', bearer_token);
		}

		callback(bearer_token);
	});
};

// twitterAPI.prototype._get_token = function(key, secret){
//
// var self = this;
//
// if(!key || !secret){
// return false;
// }
//
// this.httpClient.setRequestHeader("Authorization", "Basic " + Ti.Utils.base64encode(Ti.Network.encodeURIComponent(key)+":"+Ti.Network.encodeURIComponent(secret)).toString());
// this.httpClient.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
//
// this.httpClient.setOnload(function(e){
// if(!e.success){
// return;
// }
//
// var response = JSON.parse(this.responseText);
//
// console.log(this.responseText);
// console.log(response);
// //  ...
//
// //self.token = response.token;
// });
//
// this.httpClient.open("POST", "https://api.twitter.com/oauth2/token");
// this.httpClient.send({grant_type : "client_credentials"});
// };
//
// twitterAPI.prototype.getTweets = function(countTweets, callback){
// countTweets = countTweets || 1;
//
// var self = this;
// //
// // if(!self.token){
// // callback(false);
// // }
//
// this.httpClient.setRequestHeader("Authorization", "Bearer 199223669-roMX3QeB9vYLEl7synx6aU8EldrPENRVytOyoWte"/* + self.token*/);
// this.httpClient.setRequestHeader("Content-Type", "application/json");
//
// this.httpClient.setOnload(function(e){
// if(!e.success){
// return;
// }
//
// var response = JSON.parse(this.responseText);
// console.log(this.responseText);
// console.log(response);      //  ...
//
// // callback(response.tweets);
// });
//
// this.httpClient.open("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+self.screen_name);
// this.httpClient.send();
// };

module.exports = twitterAPI;
