var app=angular.module("app",[]);

app.directive("miFactura",FacturaDirective);
function FacturaDirective() {
    return {
        templateUrl :"mi-factura-tpl.html",
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
            
            this.privateValue="s3cret";
        },
        controllerAs :"miFactura",
        bindToController:{
            
        },
        scope: {
            
        }
    }
}

app.directive("miLineaFactura",LineaFacturaDirective);
function LineaFacturaDirective() {
    return {
        require:"^miFactura",
        templateUrl :"mi-linea-factura-tpl.html",
        controller:function() {
            this.lineaFactura={
                id:45,
                cantidad:2,
                precioUnitario:5,
                concepto:"Mosquitera"
            };
        },
        controllerAs :"miLineaFactura",
        bindToController:{
            factura:"="
        },
        scope: {
            
        },
        link: function(scope, element, attrs, miFacturaController) {
          console.log("Accediendo a valor privado del controlador:"+miFacturaController.privateValue)
        }        
    }    

};




