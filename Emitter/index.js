module.exports = {
    data: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        //console.log('ON');
        var args = [].slice.call(arguments);
        //var curData = {};
        //curData.push(args);
        this.data.push(args);
        //console.log(this.data);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        //console.log('OFF'); 
        function match(elem) {
            return !(elem[0] === event && elem[1] === subscriber);
        }
        //console.info(event, subscriber, this.data);
        this.data = this.data.filter(match);
        //console.log(this.data);
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        //console.log('EMIT');
        for(var i in this.data) {
            //console.info(this.data[i][1].logs);
            if(this.data[i][0] === event) { this.data[i][2].apply(this.data[i][1]); }
        }
        //console.log(this.data);
        return this;
    }   
};
