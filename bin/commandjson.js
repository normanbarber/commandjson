var Q = require('q');
var readermain = require('../lib/codeReaderMain');
var readerview = require('../lib/codeReaderView');
var readercss = require('../lib/codeReaderCss');
var _ = require('underscore');

module.exports = {

    'getReader': function(format){
        return format === '.html' || format === '.jade' ? readerview : readercss;
    },
    'getFiles': function(data) {
        var self = this;
        var file = data.paths;
        var format = data.type;
        var readermodule;
        var promise;
        var all = [];

        if(format.slice(0,1) != '.')
            format = '.' + format;

        promise = Q.nfcall(readermain, file, format, self.getReader(format))
            .then(function(code) {
                return code;
            })
            .fail(function(error){
                console.log(error);
                return Q.reject(error);
            })
        all.push(promise);

        if(all.length > 0){
            return Q.allResolved(all)
                .then(function(promises) {
                    return Q(_.map(promises, Q.nearer));
                })
        }

    }
};
