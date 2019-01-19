angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('position',{
        url:'/position',
        templateUrl:'view/position.html',
        controller:'positionCtrl'
        }
    )
    $urlRouterProvider.otherwise('main');
}])