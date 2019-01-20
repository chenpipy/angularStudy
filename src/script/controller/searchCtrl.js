'use strict';
angular.module('app').controller('searchCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache','index', function ($log, $q, $http, $state, $scope, cache,index) {
   index.setMessage("after")
   index.getGetMessage()

}]);

