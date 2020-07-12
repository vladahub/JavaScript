/**
 * @param {String} arg
 * @returns {Object}
 */
module.exports = function (arg) {
    
    var date = new Date(arg);
    var timeManager = {
        _time: date
    }

// Adds a number of years/months/days and etc. to the given date
    Object.defineProperty(timeManager, 'add', {
        value: function(num, type) {
            if(num < 0) {
                throw new TypeError('Invalid value passed');
            }
            switch(type) {
                case 'years': {
                    this._time.setFullYear(this._time.getFullYear() + num);
                    return this;
                }
                case 'months': {
                    this._time.setMonth(this._time.getMonth() + num);
                    return this;
                }
                case 'days': {
                    this._time.setDate(this._time.getDate() + num);
                    return this;
                }
                case 'hours': {
                    this._time.setHours(this._time.getHours() + num);
                    return this;
                }
                case 'minutes': {
                    this._time.setMinutes(this._time.getMinutes() + num);
                    return this;
                }
            }

            throw new TypeError('Unknown time unit passed');
        },
        enumerable: true
    });

// Subtracts a number of years/months/days and etc. from the given date
    Object.defineProperty(timeManager, 'subtract', {
        value: function(num, type) {
            if(num < 0) {
                throw new TypeError('Invalid value passed');
            }

            num = -num;

            switch(type) {
                case 'years': {
                    this._time.setFullYear(this._time.getFullYear() + num);
                    return this;
                }
                case 'months': {
                    this._time.setMonth(this._time.getMonth() + num);
                    return this;
                }
                case 'days': {
                    this._time.setDate(this._time.getDate() + num);
                    return this;
                }
                case 'hours': {
                    this._time.setHours(this._time.getHours() + num);
                    return this;
                }
                case 'minutes': {
                    this._time.setMinutes(this._time.getMinutes() + num);
                    return this;
                }
            }

            throw new TypeError('Unknown time unit passed');
        },
        enumerable: true
    });
 
// Returns the date as a string like "YYYY-MM-DD HH:MM"
    Object.defineProperty(timeManager, 'value', {
        get: function() {
            var dateParts = [this._time.getFullYear().toString(), 
                            (this._time.getMonth() + 1) < 10? '0' + (this._time.getMonth() + 1) : '' + (this._time.getMonth() + 1), 
                             this._time.getDate() < 10? '0' + this._time.getDate() : '' + this._time.getDate(),
                             this._time.getHours() < 10? '0' + this._time.getHours() : '' + this._time.getHours(),
                             this._time.getMinutes() < 10? '0' + this._time.getMinutes() : '' + this._time.getMinutes()] 
        
        return dateParts.slice(0, 3).join('-')+ ' ' + dateParts.slice(3).join(':');
        }
    });

    return timeManager;
};
