function DashboardCtrl($scope) {

}

function UserListCtrl($scope) {
    $scope.phones = [
    {"name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S.",
        "age": 0},
    {"name": "Motorola XOOM™ with Wi-Fi",
        "snippet": "The Next, Next Generation tablet.",
        "age": 1},
    {"name": "MOTOROLA XOOM™",
        "snippet": "The Next, Next Generation tablet.",
        "age": 2}
    ];
}

function UserListCtrl($scope, User) {
    $scope.phones = User.query();
    $scope.orderProp = 'first_name';
}

//UserListCtrl.$inject = ['$scope', 'User'];

function UserDetailCtrl($scope, $routeParams, User) {
    $scope.phone = User.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}
