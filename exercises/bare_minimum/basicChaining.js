/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var util = require('util');

var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var writeFileAsync = util.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // pluckFirstLineFromFileAsync(readFilePath);
  // .then
  // getGitHubProfileAsync()
  // .then
  // writeFileAsync

  return pluckFirstLineFromFileAsync(readFilePath)
  // .then(function(data){
  //   if(!data){
  //     throw new Error('no data');
  //   }else {
  //     return data;
  //   }
  // })
  .then(function(username){
    return getGitHubProfileAsync(username)
  })
  .then(function(userdata){
    console.log(userdata);
    return writeFileAsync(writeFilePath, JSON.stringify(userdata))
    // , "utf-8", function(e){
    //   if(e){
    //     console.log(e)
    //   }else{
    //     console.log('success')
    //   }
    // });
  })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
