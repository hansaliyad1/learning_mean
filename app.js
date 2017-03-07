/**
 * Created by hansa on 3/7/2017.
 */
var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function ($scope) {
        $scope.posts = [
            'post 1',
            'post 2',
            'post 3',
            'post 4',
            'post 5'
        ];
    }
]);