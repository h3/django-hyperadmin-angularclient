angular.module('userServices', ['ngResource']).
    factory('User', function($resource){
        return $resource('/hyperapi/auth/user/:userId/', {}, {
            query: {method:'GET', params:{userId: 'users'}, isArray:true}
        });
    });
