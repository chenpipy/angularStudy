'use strict';
angular.module('app').directive('appOne', [function(){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'dist/view/template/one.html',
        scope:{
            two :'=',
            oneClick:'='
        },
        link:function (scope,elm,attr,controller) {
            scope.one="我是direct中的one"
            scope.oneClick=function () {
                alert("我是one中的事件")
                scope.itemShow=!scope.itemShow;
            }
            scope.itemShow=false;
        }
    };
}]);

