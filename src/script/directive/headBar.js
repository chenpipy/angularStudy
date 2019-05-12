'use strict';
angular.module('app').directive('appHeadBar', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'dist/view/template/headBar.html',
    scope: {
      text: '@'
    },
    link: function($scope) {
      $scope.back = function() {
        window.history.back();
      };
    }
  };
}]);
