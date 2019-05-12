'use strict';
angular.module('app').directive('appAnimate', [function(){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'dist/view/template/animate.html',
        scope:{
            two :'=',
        },
        link:function (scope,elm,attr) {
            scope.one="我是direct中的one"

        }
    };
}]);

