var app = angular.module('angularclient', ['userServices', 'hyperadmin']);

//app.constant('API_KEY', 'API_KEY_HERE');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/adm/tpl/dashboard.html', 
            controller: CRUDResourceCtrl
        }).
        when('/crudresource/:app/:resource', {
            templateUrl: '/adm/tpl/object-list.html', 
            controller: CRUDResourceCtrl
        }).
        when('/crudresource/:app/:resource/:pk', {
            templateUrl: '/adm/tpl/object-detail.html', 
            controller: CRUDResourceCtrl
        }).
        when('/resourcelisting/:app/:resource/', {
            templateUrl: '/adm/tpl/object-list.html', 
            controller: ResourceListingCtrl
        }).
        otherwise({redirectTo: '/'});
}]);
