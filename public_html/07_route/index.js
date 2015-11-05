var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "main.html",
        controller:"ControllerParams",
        resolve:{
            controllerParams:function() {
                return {
                    idFactura:34
                };
            }
        }
    });
    $routeProvider.when('/:idFactura', {
        templateUrl: "main.html",
        controller:"ControllerParams",
        resolve:{
            controllerParams:function($route) {
                return {
                    idFactura:$route.current.params.idFactura
                };
            }
        }
    });    
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});

app.controller("ControllerParams", ['$scope','controllerParams',ControllerParams]);
function ControllerParams($scope,controllerParams) {
    angular.extend($scope,controllerParams)
}

app.controller("FacturaController", ['$scope',FacturaController]);
function FacturaController(that) {
    that.factura = {
        id: 4,
        importeTotal: 34,
        empresa: "Persianas López"
    };

    that.tiposIVA = {
        general: 21,
        reducido: 10,
        superreducido: 4
    }

    that.pulsadoBoton = function (a, b) {
        alert("pulsado:" + a + "," + b);
    }
};

app.controller("LineaFacturaController", ['$scope',LineaFacturaController]);
function LineaFacturaController(that) {
    that.lineaFactura = {
        id: 45,
        cantidad: 2,
        precioUnitario: 5,
        concepto: "Mosquitera"
    }
}