'use strict';
angular.module('app').controller('searchCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache',  function ($log, $q, $http, $state, $scope, cache) {
    $scope.tabList = [
        {
            id: '01',
            name: '城市'
        }, {
            id: '02',
            name: '薪水'
        }, {
            id: '03',
            name: '公司规模'
        }
    ]
    $scope.selectId='02'
    $scope.tempName='aaa'
}]);

