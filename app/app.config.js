(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        // this line is optional
        $locationProvider.html5Mode(true)

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'app',
            })
            .state({
                name: 'about',
                url: '/about-us',
                component: 'about',
            })
    }

}());
