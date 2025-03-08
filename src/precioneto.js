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

function calcularPrecioConDescuentoFijo(precioNeto, descuentoFijo) {
  const precioFinal = precioNeto - descuentoFijo;
  return parseFloat(Math.max(precioFinal, 0).toFixed(2)); // Evita valores negativos
}

function calcularPrecioConDescuentoPorcentajeFijo(precioNeto, porcentajeDescuento) {
  const descuento = (precioNeto * porcentajeDescuento) / 100;
  return parseFloat((precioNeto - descuento).toFixed(2));
}

export { precioneto, calcularPrecioTotal, calcularPrecioConDescuento, calcularPrecioConDescuentoFijo, calcularPrecioConDescuentoPorcentajeFijo };
