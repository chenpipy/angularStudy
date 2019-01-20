angular.module('app').directive('appTab', [function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/tab.html',
        scope: {
            data: '=',
            selectId :'=',
            name:'='
        },
        link: function ($scope) {
            $scope.toggleTab = function (item) {
                /*修改同样会修改父作用域中的数据*/
                $scope.selectId=item.id
            }
        }
    }
}])
