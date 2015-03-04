/**
 * Created by le on 03/03/15.
 */

var event = require('events');
var fs = require('fs');
var util = require('util');

var Watcher = function (filePath) {
    this.fileName = filePath;
};

util.inherits(Watcher, event.EventEmitter);

Watcher.prototype.startWatch = function () {
    var watcher = this
    fs.watchFile(watcher.fileName, function (curr) {
        watcher.emit('process', curr);
    });
}

module.exports = Watcher;