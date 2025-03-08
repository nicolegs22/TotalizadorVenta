// precioneto.js
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
  return 9;
}

function calcularPrecioTotal(cantidad, precioUnitario, porcentajeCA, pesoVolumetrico) {
  const precioNeto = precioneto(cantidad, precioUnitario);
  const impuesto = (precioNeto * porcentajeCA) / 100;
  const costoEnvio = obtenerCostoEnvio(pesoVolumetrico);
  const precioTotal = precioNeto + impuesto + costoEnvio;

  
  console.log(`Detalles del cálculo de precio total:`);
  console.log(`Precio neto: ${precioNeto}`);
  console.log(`Impuesto (${porcentajeCA}%): ${impuesto}`);
  console.log(`Costo de envío (peso volumétrico ${pesoVolumetrico}): ${costoEnvio}`);
  console.log(`Precio total: ${precioTotal.toFixed(2)}`);
  
  return parseFloat(precioTotal.toFixed(2));
}

function calcularPrecioConDescuento(precioNeto, porcentajeDescuento) {
  const descuento = (precioNeto * porcentajeDescuento) / 100;
  const precioFinal = precioNeto - descuento;
  
 
  console.log(`Detalles del cálculo con descuento porcentual:`);
  console.log(`Precio neto: ${precioNeto}`);
  console.log(`Descuento (${porcentajeDescuento}%): ${descuento}`);
  console.log(`Precio con descuento: ${precioFinal.toFixed(2)}`);
  
  return parseFloat(precioFinal.toFixed(2));
}

function calcularPrecioConDescuentoFijo(precioNeto, descuentoFijo) {
  const precioFinal = precioNeto - descuentoFijo;
  const precioFinalConDescuento = Math.max(precioFinal, 0);
  
 
  console.log(`Detalles del cálculo con descuento fijo:`);
  console.log(`Precio neto: ${precioNeto}`);
  console.log(`Descuento fijo: ${descuentoFijo}`);
  console.log(`Precio con descuento: ${precioFinalConDescuento.toFixed(2)}`);
  
  return parseFloat(precioFinalConDescuento.toFixed(2));
}

function calcularPrecioConDescuentoPorcentajeFijo(precioNeto, porcentajeDescuento) {
  const descuento = (precioNeto * porcentajeDescuento) / 100;
  const precioFinal = precioNeto - descuento;
  
  
  console.log(`Detalles del cálculo con descuento porcentual fijo:`);
  console.log(`Precio neto: ${precioNeto}`);
  console.log(`Descuento (${porcentajeDescuento}%): ${descuento}`);
  console.log(`Precio con descuento: ${precioFinal.toFixed(2)}`);
  
  return parseFloat(precioFinal.toFixed(2));
}

export { precioneto, calcularPrecioTotal, calcularPrecioConDescuento, calcularPrecioConDescuentoFijo, calcularPrecioConDescuentoPorcentajeFijo };
