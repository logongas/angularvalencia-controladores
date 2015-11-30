var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "main.html",
        controller:"FacturaController",
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
        controller:"FacturaController",
        resolve:{
            controllerParams:function($route) {
                return {
                    idFactura:$route.current.params.idFactura,
                };
            }
        }
    });    
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});



app.controller("FacturaController", ['$scope',FacturaController]);
function FacturaController(vm) {
    vm.factura = {
        id: 4,
        importeTotal: 34,
        empresa: "Persianas López"
    };

    vm.tiposIVA = {
        general: 21,
        reducido: 10,
        superreducido: 4
    };

    vm.avisar=function(message) {
        alert(message);
    }; 
};

app.controller("LineaFacturaController", ['$scope',LineaFacturaController]);
function LineaFacturaController(vm) {
    vm.lineaFactura = {
        id: 45,
        cantidad: 2,
        precioUnitario: 5,
        concepto: "Mosquitera"
    }
}