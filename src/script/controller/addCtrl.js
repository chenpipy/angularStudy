'use strict';
angular.module('app').controller('addCtrl', ['$http', '$scope', function($http, $scope){
    /*
    * controller的名称：mainCtrl
    * 如何知道mainCtrl和哪个html模板对应，需要在route中进行配置templateUrl
    * */
    $scope.one="我是ctrl中的one"
    $scope.two="我是ctrl中的two"
    $scope.three="我是ctrl中的three"
    $scope.onOne=function () {
        $scope.abcd();
    }

}]);
