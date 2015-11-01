var app = angular.module("app", []);

app.component("miFactura", {
    templateUrl :"04_mi-factura-tpl.html",
    controller: function () {
        this.factura = {
            id: 4,
            importeTotal: 34,
            empresa: "Persianas López"
        };

        this.tiposIVA = {
            general: 21,
            reducido: 10,
            superreducido: 4
        }
    },
    bindings: {
    }
});


app.component("miLineaFactura", {
    templateUrl :"04_mi-linea-factura-tpl.html",
    controller: function () {
        this.lineaFactura = {
            id: 45,
            cantidad: 2,
            precioUnitario: 5,
            concepto: "Mosquitera"
        };
    },
    bindings: {
        factura: "="
    }
});




