'use strict'
angular.module('app').controller('searchCtrl', ['$log', '$q', '$http', '$state', '$scope','cache', function ($log, $q, $http, $state, $scope,cache) {
    /*
       * 遇到的问题
       * 1、 cache没有引用，因为service的位置写错了，应该写到script文件夹下，所以造成路径错误
       * 2、 def.promise不是一个函数，因为def.resolve def.reject用错了
       * */

    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin?'投个简历':'去登录';
    function getPosition() {
        var def = $q.defer();
        $http.get('data/position.json', {
            params: {
                id: $state.params.id
            }
        }).success(function(resp) {
            $scope.position = resp;
            if(resp.posted) {
                $scope.message = '已投递';
            }
            def.resolve(resp);
        }).error(function(err) {
            def.reject(err);
        });
        return def.promise;
    }
    function getCompany(id) {
        $http.get('data/company.json?id='+id).success(function(resp){
            $scope.company = resp;
        })
    }
    getPosition().then(function(obj){
        getCompany(obj.companyId);
    });
    $scope.go = function() {
        if($scope.message !== '已投递') {
            if($scope.isLogin) {
                $http.post('data/handle.json', {
                    id: $scope.position.id
                }).success(function(resp) {
                    $log.info(resp);
                    $scope.message = '已投递';
                });
            } else {
                $state.go('login');
            }
        }
    }
}])
