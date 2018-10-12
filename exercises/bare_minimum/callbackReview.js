/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(err, data){
    if(err){
    //  throw err;
    callback(err)
    // console.log(arguments)
    }else {
      var firstLine = data.toString().split("\n");
      callback(err,firstLine[0])// firstLine
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, function (err, url){
    if(err){
      callback(err)
    }else {
  
      callback(err, url.statusCode)
    }
  })
  // request(url,function(err){
    
  // })
}
// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
