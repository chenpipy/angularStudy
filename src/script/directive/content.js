angular.module('app').directive('appContent', [function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'dist/view/template/content.html',
        scope:{
            name:'='
        }
    }
}])
