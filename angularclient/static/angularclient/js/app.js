angular.module('angularclient', ['userServices']).
    config(function($httpProvider){
        // This probably shouldn't be done globally
        $httpProvider.defaults.headers.post['Accept'] = 'application/vnd.Collection.hyperadmin.emberclient+JSON';
    }).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/dashboard', {templateUrl: '/adm/tpl/dashboard.html',   controller: UserListCtrl}).
            when('/users/:userId', {templateUrl: '/adm/tpl/object-detail.html', controller: UserDetailCtrl}).
            otherwise({redirectTo: '/dashboard'});
    }]);
