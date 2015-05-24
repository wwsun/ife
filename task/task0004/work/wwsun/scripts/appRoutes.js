angular.module('appRoutes', [])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'TodoCtrl as todoCtrl'
            })

            .state('item', {
                url: '/item',
                templateUrl: 'views/item.html',
                controller: ''
            })
    });