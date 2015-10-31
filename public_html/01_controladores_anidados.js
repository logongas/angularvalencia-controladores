var app=angular.module("app",[]);


app.controller("FacturaController",FacturaController);
function FacturaController($scope) {
    $scope.factura={
        id:4,
        importeTotal:34,
        empresa:"Persianas López"
    };
    
    $scope.tiposIVA={
        general:21,
        reducido:10,
        superreducido:4
    }
}

app.controller("LineaFacturaController",LineaFacturaController);
function LineaFacturaController($scope) {
    $scope.lineaFactura={
        id:45,
        cantidad:2,
        precioUnitario:5,
        concepto:"Mosquitera"
    }
}




