app.controller('teamController', function($scope, $http, $rootScope, $state, saveData) {
    $scope.bgimg = "./images/stadium-at-night.jpg";

    $http({
        method: 'GET',
        url: 'http://localhost:8081/team',
        //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function(data) {
        console.log("inside get");
        $scope.teamlogo = data.data;
        console.log(data);
        saveData.dataipl = data.data;
        $scope.clickadd = function(id) {
            console.log("inside team " + id);
            $rootScope.id1 = id;
        };
    }, function(error) {
        console.log(error);
    });
});
