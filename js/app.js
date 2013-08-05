var app = angular.module('App', []);

app.controller('Todo', ['$scope', function ($scope) {

    $scope.user = {}; //form
    var count = 1;

    $scope.rows = [];

    $scope.save = function (user) {

        user.id = count;
        $scope.rows.push(user);

        count++;

        //clear form data
        $scope.user = {};
    }

    $scope.remove = function (user) {
        for (var i = 0, len = $scope.rows.length; i < len; i++) {
            if ($scope.rows[i].id === user.id) {
                $scope.rows.splice(i, 1);
                break;
            }
        }
    }
}]);