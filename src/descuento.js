function obtenerPorcentajeDescuento(totalNeto) {
    if (totalNeto >= 1000 && totalNeto <= 2999) {
        return 3;
    } else if (totalNeto >= 3000 && totalNeto <= 6999) {
        return 5;
    } else if (totalNeto >= 7000 && totalNeto <= 9999) {
        return 7;
    } else if (totalNeto >= 10000 && totalNeto <= 29999) {
        return 10;
    } else if (totalNeto >= 30000) {
        return 15;
    }
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
