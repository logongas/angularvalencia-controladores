var app=angular.module("app",[]);

app.directive("miFactura",FacturaDirective);
function FacturaDirective() {
    return {
        templateUrl :"mi-factura-tpl.html",
        controller:['$scope',function(vm) {
            vm.factura={
                id:4,
                importeTotal:34,
                empresa:"Persianas López"
            };

            vm.tiposIVA={
                general:21,
                reducido:10,
                superreducido:4
            } 
            
            that.avisar=function(message) {
                alert(message);
            };             
            
            vm.privateValue="s3cret";
            this.publicValue="hola";
            
        }],
        scope:{
            
        }
    }
}

app.directive("miLineaFactura",LineaFacturaDirective);
function LineaFacturaDirective() {
    return {
        require:"^miFactura",        
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
            factura:"=",
            onButton:"&"
        },
        link: function(scope, element, attrs, miFacturaController) {
          console.log("Accediendo a valor privado del controlador:"+miFacturaController.privateValue)
          console.log("Accediendo a valor público del controlador:"+miFacturaController.publicValue)
        }
    }    

};




