'use strict';

angular.module('userServices', ['ngResource']).
    factory('Dashboard', function($resource){
        return $resource('/hyperapi/?_HTTP_ACCEPT=application/json', {}, {
            query: {method:'GET', params:{}, isArray: true}
        });
    }).
    factory('User', function($resource){
        return $resource('/hyperapi/auth/user/:userId/', {}, {
            query: {
                method:'GET', params:{userId: 1}, isArray:true,
                headers : {
                   'Accept': 'application/vnd.Collection.hyperadmin+JSON'
                }
            }
        });
    }).
    factory('Users', function($resource){
        return $resource('/hyperapi/auth/user/', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    });
