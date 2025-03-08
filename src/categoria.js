function calcularPrecioConCategoria(totalNeto, impuesto, categoria) {
    if (categoria === "Alimentos") {
        const impuestoAdicional = 0;
        const descuentoAdicional = 2;
        const totalConImpuesto = totalNeto + impuesto;
        const descuento = (totalConImpuesto * descuentoAdicional) / 100;
        return parseFloat((totalConImpuesto - descuento).toFixed(2));
    }

    return totalNeto + impuesto;  
}

export { calcularPrecioConCategoria };
