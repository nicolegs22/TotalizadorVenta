function calcularPrecioConDescuento(precioNeto, porcentajeDescuento) {
    return precioNeto - (precioNeto * porcentajeDescuento) / 100;
  }
  
  export { calcularPrecioConDescuento };
  