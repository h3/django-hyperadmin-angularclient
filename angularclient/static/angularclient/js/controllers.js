'use strict';


function CRUDResourceCtrl($scope, $routeParams, crudSourceService) {
    $scope.resource = crudSourceService.query($routeParams, function(){
        //console.log($scope.resource);
    });
};
CRUDResourceCtrl.$inject = ['$scope', '$routeParams', 'crudSourceService']


function ResourceListingCtrl($scope, $routeParams, resourceListingService) {
    $scope.resource = resourceListingService.query($routeParams, function(){
        //console.log($scope.resource);
    });
};
ResourceListingCtrl.$inject = ['$scope', '$routeParams', 'resourceListingService']
