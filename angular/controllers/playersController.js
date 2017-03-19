app.controller('playerController', function($scope, $rootScope, saveData) {
    console.log("inside playerController ");
    var ipldata = saveData.dataipl;

    console.log(ipldata);
    angular.forEach(ipldata, function(value, key) {
        ipldata.push(value.team_players);

        if ($rootScope.id1 == value._id) {

            console.log(value.team_players);
            $scope.players = value.team_players;


        }
    });


});
