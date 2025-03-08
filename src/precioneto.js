function precioneto(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}

function obtenerCostoEnvio(pesoVolumetrico) {
  if (pesoVolumetrico >= 0 && pesoVolumetrico <= 10) return 0;
  if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) return 3.5;
  if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) return 5;
  if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) return 6;
  if (pesoVolumetrico >= 81 && pesoVolumetrico <= 100) return 6.5;
  if (pesoVolumetrico >= 101 && pesoVolumetrico <= 200) return 8;
  return 9; // > 200
}

function calcularPrecioTotal(cantidad, precioUnitario, porcentajeCA, pesoVolumetrico) {
  const precioNeto = precioneto(cantidad, precioUnitario);
  const impuesto = (precioNeto * porcentajeCA) / 100;
  const costoEnvio = obtenerCostoEnvio(pesoVolumetrico);
  const precioTotal = precioNeto + impuesto + costoEnvio; // Incluye el costo de envío
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
