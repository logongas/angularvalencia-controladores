var app=angular.module("app",[]);

app.directive("miFactura",FacturaDirective);
function FacturaDirective() {
    return {
        restrict:"E",
        templateUrl :"mi-factura-tpl.html",
        controller:function($scope) {
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
        },
        scope:{
            
        }
    }
}

app.directive("miLineaFactura",LineaFacturaDirective);
function LineaFacturaDirective() {
    return {
        restrict:"E",
        templateUrl :"mi-linea-factura-tpl.html",
        controller:function($scope) {
            $scope.lineaFactura={
                id:45,
                cantidad:2,
                precioUnitario:5,
                concepto:"Mosquitera"
            };
        },
        scope:{
            factura:"="
        }
    }    

};




