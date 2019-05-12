'use strict'
angular.module('app').directive('appFoot', [function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'dist/view/template/foot.html'
    }
}])
