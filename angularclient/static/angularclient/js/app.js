angular.module('angularclient', []).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/dashboard', {templateUrl: '/adm/tpl/dashboard.html',   controller: PhoneListCtrl}).
    //when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
    otherwise({redirectTo: '/dashboard'});
}]);
