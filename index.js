var http = require('http');
var Watcher = require('./lib/watcher');

var watcher = new Watcher('./files/watched.txt');
watcher.startWatch();
watcher.on('process', function (currStat) {
    console.log('indexjs', currStat);
});

