'use strict';
angular.module('app').directive('appPositionList', [function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'dist/view/template/positionList.html',
        scope:{
            data:'=',

        }
    };
}]);

