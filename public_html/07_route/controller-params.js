app.decorator("$route",function($delegate) {
    var $route=$delegate;
    for(var route in $route.routes) {
        if (!$route.routes[route].controller) {
            $route.routes[route].controller="ControllerParams";
        }
    }
    
    return $delegate;
});

ControllerParams.$inject=['$scope','controllerParams'];
function ControllerParams($scope,controllerParams) {
    angular.extend($scope,controllerParams)
}
app.controller("ControllerParams",ControllerParams);