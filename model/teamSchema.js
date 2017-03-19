var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = 'mongodb://localhost/ipl';
mongoose.connect(url);
var db = mongoose.connection;
db.once("open", function() {
    console.log("open");
})

var teamSchema = new Schema({
    team_captain: String,
    team_coach: String,
    team_home_venue: String,
    team_img_url: String,
    team_name: String,
    team_owner: String,
    team_players: {
        type: Array,
        items: {
            type: Object,
            properties: {
                player_batting_style: String,
                player_bowling_style: String,
                player_dob: String,
                player_img_url: String,
                player_name: String,
                player_nationality: String,
                player_role: String
            }
        }
    }
});

var iplteam = mongoose.model('iplteam', teamSchema);

module.exports = iplteam;
