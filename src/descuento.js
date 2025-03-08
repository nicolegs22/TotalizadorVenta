function calcularPrecioConDescuento(precioNeto, porcentajeDescuento) {
    const descuento = (precioNeto * porcentajeDescuento) / 100;
    return parseFloat((precioNeto - descuento).toFixed(2));
  }
  
  function calcularPrecioTotalConDescuento(precioNeto, impuesto, porcentajeDescuento) {
    const precioConDescuento = calcularPrecioConDescuento(precioNeto, porcentajeDescuento);
    const precioFinal = precioConDescuento + impuesto;
    return parseFloat(precioFinal.toFixed(2));
  }
  
  export { calcularPrecioConDescuento, calcularPrecioTotalConDescuento };
  