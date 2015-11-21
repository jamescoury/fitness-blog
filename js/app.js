console.log('Your app.js file is working!');
(function() {
'use strict';

var app = angular.module('app', [])
    .controller('mainCtrl', function($scope) {
        var something;
        $scope.something = something;
    });

})();