var app = angular.module("app", []);


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



