var app = angular.module("app", []);


app.controller("FacturaController", FacturaController);
function FacturaController($scope) {
    $scope.factura = {
        id: 4,
        importeTotal: 34,
        empresa: "Persianas López"
    };

    $scope.tiposIVA = {
        general: 21,
        reducido: 10,
        superreducido: 4
    }

    $scope.pulsadoBoton = function (a, b) {
        alert("pulsado:" + a + "," + b);
    }
}

app.controller("LineaFacturaController", LineaFacturaController);
function LineaFacturaController($scope) {
    $scope.lineaFactura = {
        id: 45,
        cantidad: 2,
        precioUnitario: 5,
        concepto: "Mosquitera"
    }
}



app.directive('isolateController', miController);
function miController() {
    return {
        restrict: 'A',
        scope: {
        },
        priority: 500,
        transclude: true,
        controller: "@",
        link: function (scope, iElement, iAttrs, controller, $transcludeFn) {
            $transcludeFn(scope, function (clone) {
                iElement.append(clone);
            });
        }
    };
}
;


app.config(function ($provide) {
    $provide.decorator("$controller", function ($delegate, $interpolate, $parse) {

        var originalFn = $delegate;

        newFn = function (expression, locals, later, ident) {

            if ((locals.$attrs) && (locals.$attrs.isolateController)) {
                if (locals.$attrs) {
                    for (var propertyName in locals.$attrs) {
                        if (propertyName.charAt(0) !== "$") {
                            bindingPropertyToScope(locals.$scope, locals.$attrs[propertyName], propertyName, $interpolate, $parse);
                        }
                    }
                }
            }

            return originalFn(expression, locals, later, ident);
        };

        return newFn;



    });

    //initializeDirectiveBindings
    function bindingPropertyToScope(scope, rawValue, propertyName, $interpolate, $parse) {
        if (isStartAndEndWith(propertyName, "[(", ")]")) {
            var realPropertyName = removeStartAndEnd(propertyName, "[(", ")]");
            var getFn = $parse(rawValue);
            var setFn = $parse(rawValue).assign;
            scope[realPropertyName] = getFn(scope.$parent);
            scope.$parent.$watch(function () {
                return getFn(scope.$parent);
            }, function (newVal, oldVal) {
                if (newVal === oldVal) {
                    return
                }
                scope[realPropertyName] = newVal;
            }, true);
            scope.$watch(function () {
                return scope[realPropertyName];
            }, function (newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                setFn(scope.$parent, newVal);
            }, true);


        } else if (isStartAndEndWith(propertyName, "[", "]")) {
            var realPropertyName = removeStartAndEnd(propertyName, "[", "]");
            var getFn = $parse(rawValue);
            scope[realPropertyName] = getFn(scope.$parent);
            scope.$parent.$watch(function () {
                return getFn(scope.$parent);
            }, function (newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                scope[realPropertyName] = newVal;
            }, true);
        } else if (isStartAndEndWith(propertyName, "(", ")")) {
            var realPropertyName = removeStartAndEnd(propertyName, "(", ")");
            var getFn = $parse(rawValue);
            scope[realPropertyName] = function (locals) {
                getFn(scope.$parent, locals);
            };
        } else {
            var realPropertyName = propertyName;
            var templateFn = $interpolate(rawValue);
            scope[realPropertyName] = templateFn(scope.$parent);
            scope.$parent.$watch(function () {
                return templateFn(scope.$parent);
            }, function (newVal) {
                scope[realPropertyName] = newVal;
            });
        }

    }

});




function isStartAndEndWith(s, start, end) {
    if ((s) && (s.length > start.length + end.length)) {
        if ((s.indexOf(start) === 0) && (s.substring(s.length - end.length, s.length) === end)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function removeStartAndEnd(s, start, end) {
    return s.substring(start.length, s.length - end.length);
}