import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import TaskService from './services/services';

var app = angular.module('toDo', [
    Components,
    uiRouter
]);

app.service('TaskService', TaskService);

app.config(['$stateProvider', function ($stateProvider ) {
    $stateProvider
        .state('/main', {
            url: 'https://yanasharipbaeva.github.io/toDoTask/main',
            templateUrl: 'js/app/components/main/main.html'
        })

}]);



