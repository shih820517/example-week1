/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = Number(process.env.PORT || 1337);
var request = require("request");
var url = "http://graph.facebook.com/Boo/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "<html><head></head><body><table><tr><td>Photo</td><td>description</td></tr>"
  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      data += "<tr><td><img src='" + val.images[5].source + "'></td><td>" + val.name + "</td></tr>";
    });
    
    data += "</table></body></html>";
    res.end(data);
  });

}).listen(port);

console.log("start server port: " + port);


