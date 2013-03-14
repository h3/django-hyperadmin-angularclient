function DashboardCtrl($scope) {

}

function UserListCtrl($scope, Users) {
    console.log(Users.query());
    $scope.phones = Users.query();
    $scope.orderProp = 'first_name';
}

UserListCtrl.$inject = ['$scope', 'Users'];

function UserDetailCtrl($scope, $routeParams, User) {
    $scope.phone = User.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}'users'
