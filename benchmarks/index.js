var fs = require('fs');

var files = fs.readdirSync(__dirname).filter(function(element, index, array){
    return element.match(/^.+\.js$/) && !element.match(/^index\.js/) && !element.match(/^\./) && !element.match(/^\#/);
});

module.exports = files.map(function(file) {
  var module_name = file.replace(/\.js$/,'');
  return './benchmarks/' + module_name;
});
