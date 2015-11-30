app.decorator("$route",function($delegate) {
    var $route=$delegate;
    for(var route in $route.routes) {
        if (($route.routes[route].resolve) && ($route.routes[route].resolve.controllerParams)) {
            var controller=$route.routes[route].controller;
            $route.routes[route].controller=['$scope','controllerParams',function($scope,controllerParams) {
                    angular.extend($scope,controllerParams);
                    if (controller) {
                        $scope.controller=controller;
                    }
            }];
        }
    }
    
    return $delegate;
});