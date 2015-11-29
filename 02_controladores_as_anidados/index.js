var app=angular.module("app",[]);


app.controller("FacturaController",FacturaController);
function FacturaController() {
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
    
    this.avisar=function(message) {
        alert(message);
    }
    
}

app.controller("LineaFacturaController",LineaFacturaController);
function LineaFacturaController() {
    this.lineaFactura={
        id:45,
        cantidad:2,
        precioUnitario:5,
        concepto:"Mosquitera"
    }
}



