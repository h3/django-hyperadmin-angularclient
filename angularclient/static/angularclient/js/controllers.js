'use strict';

function CRUDResourceCtrl($scope, $routeParams, crudService) {
    $scope.resource = crudService.query($routeParams, function(){
        console.log($scope.resource);
    });
};
CRUDResourceCtrl.$inject = ['$scope', '$routeParams', 'crudService']
