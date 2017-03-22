'use strict'

/* ====== CONFIG =========== */

import Routing from './routing.js'


/* ======= DEPENDENCIES ==== */

import angular from 'angular'
import ngResource from 'angular-resource'
import ngSanitize from 'angular-sanitize'
import ngRoute from 'angular-route'
import ngDialog from 'ng-dialog'


/* ====== COMPONENTS ======= */

import exampleElement       from './directives/example-element/example-element.directive.js'
import exampleHandler       from './directives/example-handler/example-handler.directive.js'


/* ====== RESOURCES ===== */

import API      from './resources/api.resource.js'


/* ====== SERVICES ========= */

import exampleService   from './services/example.service.js'
import Dialogs          from './services/dialogs.service.js'


/* ======= STYLES =========== */

import '../style/reset.css'
import '../style/ngDialog.min.css'
import '../style/ngDialog-theme-default.min.css'
import '../style/style.css'


/* ======= APP INIT ======== */

const 
    MODULE_NAME = 'awpApp',
    APP_MODULES = [ 'ngRoute', 'ngResource', 'ngSanitize', 'ngDialog' ]

const app = angular.module(MODULE_NAME, APP_MODULES)
    .constant('apiBaseUrl', API_URL)

    //Directives
    .directive('exampleElement', exampleElement)
    .directive('exampleHandler', exampleHandler)

    //Resources & services
    .service('API', API)
    .service('exampleService', exampleService)
    .service('Dialogs', Dialogs)

//Apply config
Routing(app)

export default MODULE_NAME