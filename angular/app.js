/**
 * FileName:app.js
 * CreatedBy: Tanvi Raul
 * purpose : perform routing according to state
 */

/**
 * @define module
 * @param {string} ngApp - parameter refers to the HTML element in which app will run
 * @param {Array} injector - loading modules through injector
 * */
var app = angular.module('IPLModule', ['ui.router', 'firebase']);
/** configure existing services */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('team');
    $stateProvider
        .state("team", {
            url: '/team',
            templateUrl: './templates/team.html',
            controller: 'teamController'
        })
        .state("player", {
            url: '/team/players/:id',
            templateUrl: './templates/players.html',
            controller: 'playerController'
        });



});
