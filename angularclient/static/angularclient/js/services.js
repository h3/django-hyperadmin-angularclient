angular.module('userServices', ['ngResource']).
    factory('User', function($resource){
        return $resource('/hyperapi/auth/user/:userId/', {}, {
            query: {
                method:'GET', params:{userId: 1}, isArray:true,
                headers : {
                   'Accept': 'application/vnd.Collection.hyperadmin.emberclient+JSON'
                }
            }
        });
    }).
    factory('Users', function($resource){
        return $resource('/hyperapi/auth/user/', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    });
