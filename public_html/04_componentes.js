var app = angular.module("app", []);

app.component("miFactura", {
    template: "<h3>Dentro del controlador Factura</h3>Empresa:{{factura.factura.empresa}}<br><mi-linea-factura factura='factura.factura' ></mi-linea-factura>",
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
    template: "<h3>Dentro del controlador LineaFactura</h3>Empresa:{{lineaFactura.factura.empresa}}<br>Concepto:{{lineaFactura.lineaFactura.concepto}} ",
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




