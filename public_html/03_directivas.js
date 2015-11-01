var app=angular.module("app",[]);

app.directive("miFactura",FacturaDirective);
function FacturaDirective() {
    return {
        restrict:"E",
        templateUrl :"03_mi-factura-tpl.html",
        controller:function() {
            this.factura={
                id:4,
                importeTotal:34,
                empresa:"Persianas López"
            };

            this.tiposIVA={
                general:21,
                reducido:10,
                superreducido:4
            } 
        },
        controllerAs:"miFactura",
        scope:{
            
        },
        bindToController:{
            
        }
    }
}

app.directive("miLineaFactura",LineaFacturaDirective);
function LineaFacturaDirective() {
    return {
        restrict:"E",
        templateUrl :"03_mi-linea-factura-tpl.html",
        controller:function() {
            this.lineaFactura={
                id:45,
                cantidad:2,
                precioUnitario:5,
                concepto:"Mosquitera"
            };
        },
        controllerAs:"miLineaFactura",
        scope:{
            
        },
        bindToController:{
            factura:"="
        }
    }    

};




