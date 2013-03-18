'use strict';

var url = function(i) {
    return i +'?_HTTP_ACCEPT=application/vnd.Collection.hyperadmin.angularclient+JSON';
};

angular.module('userServices', ['ngResource']).
    factory('crudSourceService', function($resource){
        return $resource(url('/hyperapi/:app/:resource/'), {
            app: '@app', resource: '@resource'
        }, {
            query: {method:'GET', params:{}, isArray: false},
            //headers : {'Accept': 'application/vnd.Collection.hyperadmin.angularclient+JSON'}
        });
    }).
    factory('resourceListingService', function($resource){
        return $resource(url('/hyperapi/:app/:resource/'), {
            app: '@app', resource: '@resource'
        }, {
            query: {method:'GET', params:{}, isArray: false},
            //headers : {'Accept': 'application/vnd.Collection.hyperadmin.angularclient+JSON'}
        });
    });
