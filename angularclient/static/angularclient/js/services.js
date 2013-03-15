'use strict';

/*
'application/vnd.Collection.hyperadmin+JSON', 
'application/json', 
'application/vnd.Collection+JSON', 
'application/vnd.Collection.hyperadmin.angularclient+JSON', 
 * */
var url = function(i) {
    return i +'?_HTTP_ACCEPT=application/json';
    //return i +'?_HTTP_ACCEPT=application/vnd.Collection.hyperadmin.angularclient+JSON';
};

angular.module('userServices', ['ngResource']).
    factory('Dashboard', function($resource){
        return $resource(url('/hyperapi/'), {}, {
            query: {method:'GET', params:{}, isArray: true}
        });
    }).
    factory('User', function($resource){
        return $resource(url('/hyperapi/auth/user/:userId/'), {}, {
            query: {
                method:'GET', params:{userId: 1}, isArray:true,
                headers : {
                   'Accept': 'application/vnd.Collection.hyperadmin+JSON'
                }
            }
        });
    }).
    factory('ObjectList', function($resource){
        return $resource(url('/hyperapi/:app/:resource/'), {
            app: '@app',
            resource: '@resource'
        }, {
            query: {method:'GET', params:{}, isArray:true}
        });
    });
