var app = angular.module("app", []);


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

app.factory("inheritFromController", ['$controller', function ($controller) {
        
        /**
         * Hace que un controlador herede de otro
         * @param {Controller} childController - El controlador que quiere heredar de otro
         * @param {String} parentController - Nombre del controlador del que queremos heredar
         * @param {$Scope} childScope - El $scope del controlador que quiere heredar
         */
        return function (childController,parentController, childScope) {
            var parent = $controller(parentController, {$scope: childScope});
            Object.setPrototypeOf(childController, parent);
        };
    }]);


