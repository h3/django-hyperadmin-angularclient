var app = angular.module('angularclient', ['userServices']);

//app.constant('API_KEY', 'API_KEY_HERE');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/adm/tpl/dashboard.html', controller: DashboardCtrl}).
        otherwise({redirectTo: '/'});
}]);
