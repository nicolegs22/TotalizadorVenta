function calcularPrecioConCategoria(totalNeto, impuesto, categoria) {
    const categorias = {
        "Alimentos": { impuestoAdicional: 0, descuentoAdicional: 2 },
        "Bebidas alcohólicas": { impuestoAdicional: 7, descuentoAdicional: 0 },
        "Material de escritorio": { impuestoAdicional: 0, descuentoAdicional: 1.5 },
        "Muebles": { impuestoAdicional: 3, descuentoAdicional: 0 },
        "Electrónicos": { impuestoAdicional: 4, descuentoAdicional: 1 },
        "Vestimenta": { impuestoAdicional: 2, descuentoAdicional: 0 },
        "Varios": { impuestoAdicional: 0, descuentoAdicional: 0 },
    };

    const config = categorias[categoria] || { impuestoAdicional: 0, descuentoAdicional: 0 };

    // Calcular impuesto adicional
    const impuestoAdicional = (totalNeto * config.impuestoAdicional) / 100;
    const totalConImpuesto = totalNeto + impuesto + impuestoAdicional;

    // Calcular descuento adicional
    const descuentoAdicional = (totalConImpuesto * config.descuentoAdicional) / 100;
    const totalConDescuento = totalConImpuesto - descuentoAdicional;

    return parseFloat(totalConDescuento.toFixed(2));
}

export { calcularPrecioConCategoria };