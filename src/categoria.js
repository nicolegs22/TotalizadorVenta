function calcularPrecioConCategoria(totalNeto, impuesto, categoria) {
    if (categoria === "Alimentos") {
        const impuestoAdicional = 0;
        const descuentoAdicional = 2;
        const totalConImpuesto = totalNeto + impuesto;
        const descuento = (totalConImpuesto * descuentoAdicional) / 100;
        return parseFloat((totalConImpuesto - descuento).toFixed(2));
    }

    if (categoria === "Bebidas alcohólicas") {
        const impuestoAdicional = 7;
        const descuentoAdicional = 0;
        const totalConImpuesto = totalNeto + impuesto + (totalNeto * impuestoAdicional) / 100;
        return parseFloat(totalConImpuesto.toFixed(2));
    }

    if (categoria === "Material de escritorio") {
        const impuestoAdicional = 0;
        const descuentoAdicional = 1.5;
        const totalConImpuesto = totalNeto + impuesto;
        const descuento = (totalConImpuesto * descuentoAdicional) / 100;
        return parseFloat((totalConImpuesto - descuento).toFixed(2));
    }

    if (categoria === "Muebles") {
        const impuestoAdicional = 3;
        const descuentoAdicional = 0;
        const totalConImpuesto = totalNeto + impuesto + (totalNeto * impuestoAdicional) / 100;
        return parseFloat(totalConImpuesto.toFixed(2));
    }

    return totalNeto + impuesto;  
}

export { calcularPrecioConCategoria };
