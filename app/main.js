requirejs.config({
    paths: {
        'angular':       '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'jquery':        '../bower_components/jquery/dist/jquery',
        'lodash':        '../bower_components/lodash/dist/lodash',
        'ng-grid':        '../js/ng-grid/ng-grid-2.0.11.min'
    },
    shim: {
        'angular': {
            exports: "angular"
        },
        'angular-route': {
            deps: ['angular']
        },
        'ng-grid': {
            deps: ['angular']
        },
        'jquery': {
            exports: "$"
        },
        'lodash': {
            exports: "_"
        }
    }
});

var dependencies = [
    'angular',
    'angular-route',
    'ng-grid',
    'jquery',
    'lodash',
    'app'
];

require(dependencies, function (angular) {
    angular.bootstrap(document, ['app']);
});