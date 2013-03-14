angular.module('angularclient', ['userServices']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/dashboard', {templateUrl: '/adm/tpl/dashboard.html',   controller: UserListCtrl}).
                when('/users/:userId', {templateUrl: 'partials/phone-detail.html', controller: UserDetailCtrl}).
                otherwise({redirectTo: '/dashboard'});
    }]);
