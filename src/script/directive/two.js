'use strict';
angular.module('app').directive('appTwo', [function(){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'dist/view/template/two.html'
    };
}]);

