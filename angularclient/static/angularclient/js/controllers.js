'use strict';

var SourceCtrls = {
  //_authentication: function($scope, Authentication) {
  //    $scope.object_list = Authentication.query();
  //    console.log($scope.object_list);
  //},
    resourcelisting: {
        template: '/adm/tpl/resource-list.html',
        inject: ['$scope', 'Resources'], 
        controller: function($scope, Resources) {
            $scope.object_list = Resource.query();
            console.log($scope.object_list);
        }
    },
    crudresource: {
        template_list: '/adm/tpl/object-list.html',
        template_detail: '/adm/tpl/object-detail.html',
        inject: ['$scope', 'Objects'], 
        controller: function($scope, ObjectList) {
            $scope.object_list = ObjectList.query({app: 'auth', resource: 'user'}, function(){
                console.log($scope.object_list);
            });
        }
    }
};

SourceCtrls.resourcelisting.$inject = ['$scope', '$routeParams', 'Resources']
SourceCtrls.crudresource.$inject = ['$scope', '$routeParams', 'ObjectList']


function DashboardCtrl($scope, $route, Dashboard) {
    var state = Dashboard.query(function(){
        // Define routes dynamically
        for (var x=0;x<state.length;x++) {
            var rs = state[x];
            if (SourceCtrls[rs.resource_class]) {
                var ctrl_class = SourceCtrls[rs.resource_class];
                var app_url = '/'+ rs.resource_class +'/'+ rs.app_name
                var resource_url = app_url + '/'+ rs.resource_name
                var resource_detail_url = resource_url + '/:objectId'
                // WARNING: there is no documented way to build dynamic routes,
                // so we end up manipulating the internal routes property of
                // angular here. But since this is not ducmented, it is
                // potentially subject to changes.
                $route.routes[resource_url] = {
                    templateUrl: ctrl_class.template_list,
                    controller: ctrl_class.controller,
                    params: {app: rs.app_name, resource: rs.resource_name }
                };
                //$route.routes[resource_url] = {
                //    templateUrl: ctrl_class.template_detail,
                //    controller: ctrl_class
                //};
            }
            else if (rs.resource_class.length) {
                console.log('I cannot process this kind of resource: ', rs.resource_class);
            }
            else if (rs.app_name == '-authentication'){
                // TODO: Authentication resource handling
            }
            else {
                // This shouldn't happen
                console.log('What the shit.. ', rs);
            }
        }
    });

    // Retrieve the initial state of the application
    $scope.resources = state
}

DashboardCtrl.$inject = ['$scope', '$route' ,'Dashboard'];




//function UserListCtrl($scope, Users) {
//    console.log(Users.query());
//    $scope.phones = Users.query();
//    $scope.orderProp = 'first_name';
//}
//
//UserListCtrl.$inject = ['$scope', 'Users'];
//
//function UserDetailCtrl($scope, $routeParams, User) {
//    $scope.phone = User.get({phoneId: $routeParams.phoneId}, function(phone) {
//        $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    }
//}
//
//UserDetailCtrl.$inject = ['$scope', '$routeParams', 'User'];
