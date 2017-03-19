var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var iplteam = require('./model/teamSchema');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended:true
// }));
app.use("/", express.static("angular"));

// fs.readFile("ipl.json", 'utf8', function (err, data) {
// objJSON = JSON.parse( data );
// for (var i = 0, len = objJSON.length; i < len; ++i) {
//      var team1 = objJSON[i];
//
//       iplteam(team1).save(function (err,data) {
//         console.log(data);
//         console.log("data inserted");
//       });
// }
// });

app.get('/team', function(req, res) {
    console.log('getting all teams');
    iplteam.find({})
        .exec(function(err, result) {
            if (err) {
                res.send('error has occured');
            } else {
                console.log(result);
                res.json(result);
            }
        });
});

app.listen(8081, function() {
    console.log("hii");
});
