function obtenerPorcentajeDescuento(totalNeto) {
    if (totalNeto >= 30000) return 15;
    if (totalNeto >= 10000) return 10;
    if (totalNeto >= 7000) return 7;
    if (totalNeto >= 3000) return 5;
    if (totalNeto >= 1000) return 3;
    return 0;
}

function calcularPrecioTotalConDescuento(totalNeto, impuesto) {
    const porcentajeDescuento = obtenerPorcentajeDescuento(totalNeto);
    const descuento = (totalNeto * porcentajeDescuento) / 100;
    const totalConImpuesto = totalNeto + impuesto;
    const totalConDescuento = totalConImpuesto - descuento;

    return parseFloat(totalConDescuento.toFixed(2));
}

export { calcularPrecioTotalConDescuento, obtenerPorcentajeDescuento };