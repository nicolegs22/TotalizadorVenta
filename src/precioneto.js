function precioneto(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}

function calcularPrecioTotal(cantidad, precioUnitario, porcentajeCA) {
  const precioNeto = precioneto(cantidad, precioUnitario);
  const impuesto = (precioNeto * porcentajeCA) / 100;
  const precioTotal = precioNeto + impuesto;
  return parseFloat(precioTotal.toFixed(2));
}

function calcularPrecioConDescuento(precioNeto, porcentajeDescuento) {
  const descuento = (precioNeto * porcentajeDescuento) / 100;
  return parseFloat((precioNeto - descuento).toFixed(2));
}

export { precioneto, calcularPrecioTotal, calcularPrecioConDescuento };
