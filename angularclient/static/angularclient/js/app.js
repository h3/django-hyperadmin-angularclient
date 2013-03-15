Resources = {};

Resources.resourcelisting = function() {};
Resources.crudresource = function() {};


angular.module('angularclient', ['userServices']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: '/adm/tpl/dashboard.html',   controller: DashboardCtrl}).
            when('/users/', {templateUrl: '/adm/tpl/object-list.html', controller: UserListCtrl}).
            when('/users/:userId', {templateUrl: '/adm/tpl/object-detail.html', controller: UserDetailCtrl}).
            otherwise({redirectTo: '/'});
    }]);
    //directive('dashboard', Dashboard);
