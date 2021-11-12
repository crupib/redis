var redis = require("redis"); //1
var client = redis.createClient(); //2
function upVote(id) { //3
  var key = "article:" +id + ":votes"; //4
  client.incr(key); //5
}
function downVote(id) { //1
  var key = "article:" +id + ":votes"; //2
  client.decr(key); //3
}
function showResults(id) {
  var headlineKey = "article:" + id + ":headline";
  var voteKey = "article:" + id + ":votes";	
  client.mget([headlineKey, voteKey], function(err,replies) {
    console.log('The article "' + replies[0] + '" has', replies[1], 'votes');
  });
}
upVote(12345);
upVote(12345);
upVote(12345);
upVote(10001);
upVote(10001);
downVote(10001);
upVote(60056);
showResults(12345);
showResults(10001);
showResults(60056);
client.quit();
