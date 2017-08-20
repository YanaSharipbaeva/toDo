import angular from 'angular';
import Main from './main/main';

let componentModule = angular.module('toDo.components', [
    Main,
]).name;

export default componentModule;
