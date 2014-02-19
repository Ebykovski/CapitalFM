var twitterAPI = function(init) {
    init = init || {};
    var key = init.key || null, secret = init.secret || null;
    this.screen_name = init.screen_name || null;
    var Codebird = require("codebird");
    this.codebird = new Codebird();
    this.codebird.setConsumerKey(key, secret);
};

twitterAPI.prototype.getTweets = function(countTweets, callback) {
    var self = this;
    Ti.API.info("Get tweets...");
    var bearerToken = Ti.App.Properties.getString("TwitterBearerToken", null);
    if (null == bearerToken) {
        Ti.API.info("We do NOT have a bearer token...");
        this._get_token(function(token) {
            Ti.API.info(token);
            token ? self.getTweets(countTweets, callback) : Ti.API.info("Already NO token...");
        });
    } else {
        Ti.API.info("We do have a bearer token...");
        self.codebird.setBearerToken(bearerToken);
        self.codebird.__call("statuses/user_timeline", "count=" + countTweets + "&include_rts=1&screen_name=" + self.screen_name, function(reply) {
            callback(reply);
        }, true);
    }
};

twitterAPI.prototype._get_token = function(callback) {
    this.codebird.__call("oauth2_token", {}, function(reply) {
        var bearer_token = false;
        if (reply.hasOwnProperty("access_token")) {
            bearer_token = reply.access_token;
            Ti.App.Properties.setString("TwitterBearerToken", bearer_token);
        }
        callback(bearer_token);
    });
};

module.exports = twitterAPI;