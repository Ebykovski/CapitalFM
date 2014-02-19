module.exports = {

	daysBetween : function(first, second) {
		Ti.API.info(first + ' ' + second);
		try {
			// Copy date parts of the timestamps, discarding the time parts.
			var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
			var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

			// Do the maths.
			var millisecondsPerDay = 1000 * 60 * 60 * 24;
			var millisBetween = two.getTime() - one.getTime();
			var days = millisBetween / millisecondsPerDay;

			// Round down.
			return Math.floor(days);
		} catch(e) {

		}
	},

	hoursBetween : function(first, second) {
		Ti.API.info(first + ' ' + second);
		try {

			var millisecondsPerHour = 1000 * 60 * 60;
			var millisBetween = second - first.getTime();
			var hours = millisBetween / millisecondsPerHour;

			// Round down.
			return Math.floor(hours);
		} catch(e) {

		}
	},

	timeAgo : function(time) {

		var days = this.daysBetween(Date.parse(time), Date.today());
		console.log('days: '+days);
		if (days == 1) {
			time = '1 день';
		} else if (days > 1) {
			time = days + this.declension(days, [' день', ' дня', ' дней']);
		} else {

			var hours = this.hoursBetween(Date.parse(time), new Date().getTime());
			console.log('hours: '+hours);
			
			if (hours == 1) {
				time = '1 час';
			} else if (hours > 1) {
				time = hours + this.declension(days, [' час', ' часов', ' часов']);;
			} else {
				time = '';
			}
		}

		return time ? time + " назад" : '';
	},
	
	declension : function(num, vars){
		var cases = [2, 0, 1, 1, 1, 2];
   		return vars[ (num%100>4 && num%100<20) ? 2 : cases[Math.min(num%10, 5)] ];
	}
};
