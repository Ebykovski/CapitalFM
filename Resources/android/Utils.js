module.exports = {
    daysBetween: function(first, second) {
        try {
            var millisecondsPerDay = 864e5;
            var millisBetween = second - first;
            var days = millisBetween / millisecondsPerDay;
            return Math.floor(days);
        } catch (e) {}
    },
    hoursBetween: function(first, second) {
        try {
            var millisecondsPerHour = 36e5;
            var millisBetween = second - first;
            var hours = millisBetween / millisecondsPerHour;
            return Math.floor(hours);
        } catch (e) {}
    },
    timeAgo: function(time) {
        var days = this.daysBetween(Date.parse(time), new Date().getTime());
        if (1 == days) time = "1 день"; else if (days > 1) time = days + this.declension(days, [ " день", " дня", " дней" ]); else {
            var hours = this.hoursBetween(Date.parse(time), new Date().getTime());
            time = 1 == hours ? "1 час" : hours > 1 ? hours + this.declension(days, [ " час", " часов", " часов" ]) : "";
        }
        return time ? time + " назад" : "";
    },
    declension: function(num, vars) {
        var cases = [ 2, 0, 1, 1, 1, 2 ];
        return vars[num % 100 > 4 && 20 > num % 100 ? 2 : cases[Math.min(num % 10, 5)]];
    }
};