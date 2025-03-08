import { calcularDescuentoCliente } from "./descuentosClientes";
import { calcularPrecioConCategoria } from "./categoria";
import porcentajedeimpuesto from "./porcentajedeimpuestos";
import { calcularPrecioTotalConDescuento } from "./descuento";

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

function calcularPrecioTotal(cantidad, precioUnitario, estado, pesoVolumetrico, tipoCliente = "Normal", categoria = "Varios") {
  const precioNeto = precioneto(cantidad, precioUnitario);

  const impuesto = porcentajedeimpuesto(precioNeto, estado);

  const costoEnvio = obtenerCostoEnvio(pesoVolumetrico);

  const totalConCategoria = calcularPrecioConCategoria(precioNeto, impuesto, categoria);

  const descuentoFijo = calcularDescuentoCliente(precioNeto, categoria, tipoCliente);

  const precioTotal = totalConCategoria + costoEnvio - descuentoFijo;

  return parseFloat(precioTotal.toFixed(2));
}

function calcularPrecioConDescuento(precioNeto, porcentajeDescuento) {
    const descuento = (precioNeto * porcentajeDescuento) / 100;
    const precioFinal = precioNeto - descuento;
    return parseFloat(precioFinal.toFixed(2));
}

function calcularPrecioConDescuentoFijo(precioNeto, descuentoFijo) {
    const precioFinal = precioNeto - descuentoFijo;
    return parseFloat(Math.max(precioFinal, 0).toFixed(2));
}

function calcularPrecioConDescuentoPorcentajeFijo(precioNeto, porcentajeDescuento) {
    const descuento = (precioNeto * porcentajeDescuento) / 100;
    const precioFinal = precioNeto - descuento;
    return parseFloat(precioFinal.toFixed(2));
}

export {
    precioneto,
    calcularPrecioTotal,
    calcularPrecioConDescuento,
    calcularPrecioConDescuentoFijo,
    calcularPrecioConDescuentoPorcentajeFijo,
};