var app = angular.module('App', []);

app.controller('Todo', ['$scope', function($scope){

    $scope.user = {}; //form
    var count = 1;

    $scope.rows = [];

    $scope.save = function(user){

        user.id = count;
        $scope.rows.push(user);

        count++;

        //clear form data
        $scope.user = {};
    }
}]);