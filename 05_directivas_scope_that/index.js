var app=angular.module("app",[]);

app.directive("miFactura",FacturaDirective);
function FacturaDirective() {
    return {
        templateUrl :"mi-factura-tpl.html",
        controller:['$scope',function(that) {
            that.factura={
                id:4,
                importeTotal:34,
                empresa:"Persianas López"
            };

            that.tiposIVA={
                general:21,
                reducido:10,
                superreducido:4
            } 
        }],
        scope:{
            
        }
    }
}

app.directive("miLineaFactura",LineaFacturaDirective);
function LineaFacturaDirective() {
    return {
        templateUrl :"mi-linea-factura-tpl.html",
        controller:['$scope',function(that) {
            that.lineaFactura={
                id:45,
                cantidad:2,
                precioUnitario:5,
                concepto:"Mosquitera"
            };
        }],
        scope:{
            factura:"="
        }
    }    

};




