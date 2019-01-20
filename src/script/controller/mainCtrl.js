'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
    /*
    * controller的名称：mainCtrl
    * 如何知道mainCtrl和哪个html模板对应，需要在route中进行配置templateUrl
    * */
    $http.get('/data/positionList.json').success(function(resp){
        $scope.list = resp;
    });
}]);
